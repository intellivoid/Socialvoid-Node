import { createHash } from "crypto";
import { totp } from "otplib";
import Session from "./Session";

export function answerChallenge(clientPrivateHash: string, challenge: string) {
  const totpCode = totp.generate(challenge);
  return createHash("sha1")
    .update(totpCode + clientPrivateHash)
    .digest("hex");
}

export function createSessionId(session: Session) {
  if (!session.sessionExists) {
    throw new Error("Session does not exist");
  }

  return {
    session_id: session.sessionId,
    client_public_hash: session.publicHash,
    challenge_answer: answerChallenge(
      session.privateHash!,
      session.sessionChallenge!
    ),
  };
}
