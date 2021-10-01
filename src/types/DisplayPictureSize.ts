import BaseClass from "./BaseClass";
import Document from "./Document";

export default class DisplayPictureSize extends BaseClass {
  constructor(
    public width: number,
    public height: number,
    public document: Document
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.width, obj.height, Document.fromObject(obj.document));
  }
}
