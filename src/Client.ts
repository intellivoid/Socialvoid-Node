import axios from "axios";
import Request from "./Request";
import Response from "./Response";
import { serializeRequests, parseResponses } from "./utils";
import Session from "./Session";
import Network from "./Network";

export default class Client {
  session: Session;
  network: Network;

  constructor(
    public readonly file?: string,
    public readonly rpcEndpoint = "http://socialvoid.qlg1.com:5601"
  ) {
    if (file) {
      try {
        this.session = Session.load(this, file);
      } catch (err) {
        this.session = new Session(this);
      }
    } else {
      this.session = new Session(this);
    }

    this.network = new Network(this);
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
    return (
      await axios.post(this.rpcEndpoint, data, {
        headers: { "Content-Type": "application/json-rpc" },
      })
    ).data;
  }

  saveSession() {
    if (this.file) {
      this.session.save(this.file);
    }
  }
}
