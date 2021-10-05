import { Document } from "../types";
import MethodBase from "./MethodBase";
import Request from "../Request";

export default class Cloud extends MethodBase {
  /**
   * Gets a document using its ID or instance.
   */
  async getDocument(document: string | Document) {
    document = document instanceof Document ? document.id : document;

    return Document.fromObject(
      await this.client.invokeRequest(
        new Request("cloud.get_document", {
          ...this.client.sessionId(),
          document,
        })
      )
    );
  }
}
