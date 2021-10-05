import Request from "../Request";
import { Document } from "../types";
import MethodBase from "./MethodBase";

export default class Account extends MethodBase {
  /**
   * Removes the profile picture of the currently logged in account.
   */
  deleteProfilePicture() {
    return this.client.invokeRequest(
      new Request("account.delete_profile_picture", {
        ...this.client.sessionId(),
      })
    );
  }

  /**
   * Sets the profile picture of the currently logged in account.
   *
   * @param document The document ID or instance of the profile picture.
   */
  setProfilePicture(document: string | Document) {
    document = document instanceof Document ? document.id : document;

    return this.client.invokeRequest(
      new Request("account.set_profile_picture", { document })
    );
  }
}
