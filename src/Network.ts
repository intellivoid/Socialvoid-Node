import Client from "./Client";
import Request from "./Request";
import { Peer } from "./types";
import { createSessionId } from "./crypto";

export default class Network {
  constructor(private client: Client) {}

  async getMe() {
    return Peer.fromObject(
      await this.client.invokeRequest(
        new Request("network.get_me", {
          session_identification: createSessionId(this.client.session),
        })
      )
    );
  }
}
