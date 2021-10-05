import Request from "../Request";
import { Document } from "../types";
import MethodBase from "./MethodBase";

export default class Account extends MethodBase {
  deleteProfilePicture() {
    return this.client.invokeRequest(
      new Request("account.delete_profile_picture", {
        ...this.client.sessionId(),
      })
    );
  }

  setProfilePicture(document: string | Document) {
    document = document instanceof Document ? document.id : document;

    return this.client.invokeRequest(
      new Request("account.set_profile_picture", { document })
    );
  }
}
