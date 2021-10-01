import Base from "./Base";
import Document from "./Document";

export default class DisplayPictureSize extends Base {
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
