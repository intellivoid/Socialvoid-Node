import Request from "../Request";
import { Peer } from "../types";
import MethodBase from "./MethodBase";

export default class Network extends MethodBase {
  async getMe() {
    return Peer.fromObject(
      await this.client.invokeRequest(
        new Request("network.get_me", this.client.sessionId())
      )
    );
  }
}
