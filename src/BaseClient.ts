import axios from "axios";
import Request from "./Request";
import Response from "./Response";
import { serializeRequests, parseResponses, answerChallenge } from "./utils";

interface Session {
  id: string;
  publicHash: string;
  privateHash: string;
  challenge: string;
}

export default class BaseClient {
  protected _session?: Session;

  constructor(
    public readonly rpcEndpoint = "http://socialvoid.qlg1.com:5601"
  ) {}

  sessionId() {
    if (!this._session) {
      throw new Error("Session does not exist");
    }

    return {
      session_identification: {
        session_id: this._session.id,
        client_public_hash: this._session.publicHash,
        challenge_answer: answerChallenge(
          this._session.privateHash,
          this._session.challenge
        ),
      },
    };
  }

  async invokeRequest(request: Request) {
    const result = parseResponses(await this.send(serializeRequests(request)));

    if (result && !Array.isArray(result)) {
      return result.unwrap();
    }

    return {};
  }

  async invokeRequests(...requests: Request[]) {
    if (!requests) {
      throw new Error(
        "The parameter `requests` cannot be `undefined` or empty"
      );
    }

    const toReturn = new Array<Response>();
    const result = parseResponses(
      await this.send(serializeRequests(...requests))
    );

    if (result) {
      if (Array.isArray(result)) {
        toReturn.push(...result);
      } else {
        toReturn.push(result);
      }
    }

    return toReturn.map((response) => response.unwrap());
  }

  async send(data: any) {
    return (await axios.post(this.rpcEndpoint, data, {
      headers: { "Content-Type": "application/json-rpc" },
    })).data;
  }
}
