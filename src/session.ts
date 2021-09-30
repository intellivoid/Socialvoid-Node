import { readFile, writeFileSync } from "fs";
import { SocialvoidClient } from "./client";

class Session {
  constructor(
    public client: SocialvoidClient,
    public publicHash?: string,
    public privateHash?: string,
    public sessionId?: string,
    public sessionChallenge?: string,
    public sessionExists = false
  ) {}

  load(file: string): Promise<Session> {
    return new Promise((res, rej) => {
      readFile(file, (err, buff) => {
        if (err) {
          rej(err);
        } else {
          const data = JSON.parse(buff.toString());
          res(
            new Session(
              data.public_hash,
              data.private_hash,
              data.session_id,
              data.session_challenge,
              data.session_exists
            )
          );
        }
      });
    });
  }

  save(fileName: string) {
    writeFileSync(
      fileName,
      JSON.stringify({
        public_hash: this.publicHash,
        private_hash: this.privateHash,
        session_id: this.sessionId,
        session_challenge: this.sessionChallenge,
        session_exists: this.sessionExists,
      })
    );
  }

  create() {}
}
