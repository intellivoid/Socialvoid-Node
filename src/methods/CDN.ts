import { Document } from "../types";
import { formFromObj } from "../utils";
import MethodBase from "./MethodBase";

export default class CDN extends MethodBase {
  async upload(document: any) {
    const form = formFromObj({
      action: "upload",
      document,
      ...this.client.sessionId().session_identification,
    });

    return Document.fromObject(
      (await this.client.invokeCDNRequest(form)).results
    );
  }

  async download(document: string | Document) {
    const form = formFromObj({
      action: "download",
      document: document instanceof Document ? document.id : document,
      ...this.client.sessionId().session_identification,
    });

    return this.client.invokeCDNRequest(form, "arraybuffer");
  }

  async streamDownload(document: string | Document) {
    const form = formFromObj({
      action: "download",
      document: document instanceof Document ? document.id : document,
      ...this.client.sessionId().session_identification,
    });

    return this.client.invokeCDNRequest(form, "stream");
  }
}
