import BaseClass from "./BaseClass";
import DisplayPictureSize from "./DisplayPictureSize";

export default class Peer extends BaseClass {
  constructor(
    public id: string,
    public type: string,
    public name: string,
    public username: string,
    public displayPictureSizes: DisplayPictureSize[],
    public flags: string[]
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.id,
      obj.type,
      obj.name,
      obj.username,
      (obj.display_picture_sizes as any[]).map((obj) =>
        DisplayPictureSize.fromObject(obj)
      ),
      obj.flags
    );
  }
}
