import FormData from "form-data";
import MethodBase from "./MethodBase";

export default class CDN extends MethodBase {
  upload(document: any) {
    const { session_identification } = this.client.sessionId();
    const form = new FormData();
    form.append("action", "upload");
    form.append("session_id", session_identification.session_id);
    form.append(
      "client_public_hash",
      session_identification.client_public_hash
    );
    form.append("challenge_answer", session_identification.challenge_answer);
    form.append("document", document);
    return this.client.sendToCDN(form);
  }
}
