import Request from "../Request";
import { Peer } from "../types";
import * as types from "../types";
import MethodBase from "./MethodBase";
import { getPlatform } from "../utils";

export default class Session extends MethodBase {
  async create(
    publicHash: string,
    privateHash: string,
    name = "SocialvoidJS",
    version = "0.0.1",
    platform: string = getPlatform()
  ) {
    return await this.client.invokeRequest(
      new Request("session.create", {
        public_hash: publicHash,
        private_hash: privateHash,
        name,
        version,
        platform,
      })
    );
  }

  async get() {
    return types.Session.fromObject(
      await this.client.invokeRequest(
        new Request("session.get", this.client.sessionId())
      )
    );
  }

  logout() {
    return this.client.invokeRequest(
      new Request("session.logout", this.client.sessionId(), true)
    );
  }

  authenticateUser(username: string, password: string, otp?: string) {
    return this.client.invokeRequest(
      new Request("session.authenticate_user", {
        ...this.client.sessionId(),
        username,
        password,
        otp,
      })
    );
  }

  async register(
    termsOfServiceId: string,
    username: string,
    password: string,
    firstName: string,
    lastName?: string
  ) {
    return Peer.fromObject(
      await this.client.invokeRequest(
        new Request("session.register", {
          ...this.client.sessionId(),
          terms_of_service_id: termsOfServiceId,
          terms_of_service_agree: true,
          username,
          password,
          first_name: firstName,
          last_name: lastName,
        })
      )
    );
  }
}
