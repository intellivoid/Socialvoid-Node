import axios, { AxiosInstance, AxiosError } from "axios";
import Request from "./Request";
import Response from "./Response";
import { serializeRequests, parseResponses, answerChallenge } from "./utils";
import FormData from "form-data";
import { throwError } from "./utils";

interface Session {
  id: string;
  publicHash: string;
  privateHash: string;
  challenge: string;
}

export default class BaseClient {
  protected instance: AxiosInstance;
  protected cdnInstance: AxiosInstance;
  protected _session?: Session;

  constructor(
    public readonly rpcEndpoint: string,
    public readonly cdnEndpoint: string
  ) {
    this.instance = axios.create({
      baseURL: this.rpcEndpoint,
      method: "POST",
      headers: { "Content-Type": "application/json-rpc" },
    });
    this.cdnInstance = axios.create({
      baseURL: this.cdnEndpoint,
      method: "POST",
    });
  }

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

  async invokeCDNRequest(data: FormData) {
    return await this.sendCDN(data);
  }

  async send(data: any) {
    return (
      await this.instance.request({
        data,
      })
    ).data;
  }

  async sendCDN(data: FormData) {
    let res;

    try {
      // https://github.com/axios/axios/issues/4150
      res = await this.cdnInstance.request<any>({
        data,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (catched) {
      const error = catched as AxiosError<any>;

      if (error.response && error.response?.status != 200) {
        const data = error.response.data;

        if (data) {
          if (
            typeof data.error_code !== "undefined" &&
            typeof data.message !== "undefined"
          ) {
            throwError(data.error_code, data.message);
          }
        }
      }

      throw catched;
    }

    return res.data;
  }
}
