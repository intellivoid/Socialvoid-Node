import { readFileSync, writeFileSync } from "fs";
import { randomBytes } from "crypto";
import Client from "./Client";
import Request from "./Request";
import { getPlatform } from "./utils";
import { Peer } from "./types";
import { createSessionId } from "./crypto";

export default class Session {
  constructor(
    private client: Client,
    public publicHash?: string,
    public privateHash?: string,
    public sessionId?: string,
    public sessionChallenge?: string,
    public sessionExists = false
  ) {}

  static load(client: Client, file: string): Session {
    const data = JSON.parse(readFileSync(file).toString());

    return new Session(
      client,
      data.public_hash,
      data.private_hash,
      data.session_id,
      data.session_challenge,
      data.session_exists
    );
  }

  save(file: string) {
    writeFileSync(
      file,
      JSON.stringify({
        public_hash: this.publicHash,
        private_hash: this.privateHash,
        session_id: this.sessionId,
        session_challenge: this.sessionChallenge,
        session_exists: this.sessionExists,
      })
    );
  }

  async create(name = "SocialvoidJS", version = "0.0.1", platform?: string) {
    if (!platform) {
      platform = getPlatform();
    }

    this.publicHash = randomBytes(32).toString("hex");
    this.privateHash = randomBytes(32).toString("hex");

    const result = await this.client.invokeRequest(
      new Request("session.create", {
        public_hash: this.publicHash,
        private_hash: this.privateHash,
        name,
        version,
        platform,
      })
    );

    this.sessionId = result.id;
    this.sessionChallenge = result.challenge;
    this.sessionExists = true;
    this.client.saveSession();
  }

  get() {
    return this.client.invokeRequest(
      new Request("session.get", {
        session_identification: createSessionId(this),
      })
    );
  }

  logout() {
    return this.client.invokeRequest(
      new Request(
        "session.logout",
        {
          session_identification: createSessionId(this),
        },
        true
      )
    );
  }

  authenticateUser(username: string, password: string, otp?: string) {
    console.log(this.client);
    console.log(this.client.invokeRequest);
    return this.client.invokeRequest(
      new Request("session.authenticate_user", {
        session_identification: createSessionId(this),
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
          session_identification: createSessionId(this),
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
