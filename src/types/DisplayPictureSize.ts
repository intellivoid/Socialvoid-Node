import TypeBase from "./TypeBase";
import Document from "./Document";

export default class DisplayPictureSize extends TypeBase {
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
