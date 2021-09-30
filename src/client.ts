import axios from "axios";
import Request from "./Request";
import { serializeRequests, parseResponses } from "./utils";

export class SocialvoidClient {
  constructor(
    public readonly file: string,
    public readonly rpcEndpoint = "http://socialvoid.qlg1.com:5601"
  ) {}

  async makeRequest(...requests: Request[]) {
    if (requests.length == 0) {
      throw new Error("The parameter `requests` cannot be empty");
    }

    const data = serializeRequests(...requests);
    const result = await this.post(data);
    return parseResponses(result.data, requests.length != 1);
  }

  private post(data: any) {
    return axios.post(this.rpcEndpoint, data, {
      headers: { "Content-Type": "application/json-rpc" },
    });
  }
}
