import Request from "../Request";
import { Peer } from "../types";
import MethodBase from "./MethodBase";

export default class Network extends MethodBase {
  /**
   * Gets the peer of the currently logged in account.
   */
  async getMe() {
    return Peer.fromObject(
      await this.client.invokeRequest(
        new Request("network.get_me", this.client.sessionId())
      )
    );
  }
}
