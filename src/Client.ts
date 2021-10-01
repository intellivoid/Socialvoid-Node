import axios from "axios";
import Request from "./Request";
import { serializeRequests, parseResponses } from "./utils";

export default class Client {
  constructor(
    public readonly file: string,
    public readonly rpcEndpoint = "http://socialvoid.qlg1.com:5601"
  ) {}

  async makeRequest(...requests: Request[]) {
    if (!requests || requests.length == 0) {
      throw new Error(
        "The parameter `requests` cannot be `undefined` or empty"
      );
    }

    return parseResponses(await this.send(serializeRequests(...requests)));
  }

  private async send(data: any) {
    return (
      await axios.post(this.rpcEndpoint, data, {
        headers: { "Content-Type": "application/json-rpc" },
      })
    ).data;
  }
}
