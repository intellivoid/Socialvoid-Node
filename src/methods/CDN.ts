import FormData from "form-data";
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
    return Document.fromObject((await this.client.sendCDN(form)).results);
  }

  async download(document: string | Document) {
    const form = formFromObj({
      action: "download",
      document,
      ...this.client.sessionId().session_identification,
    });

    return this.client.sendCDN(form);
  }
}
