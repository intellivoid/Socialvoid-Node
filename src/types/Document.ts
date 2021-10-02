import { unixTimestampToDate } from "../utils";
import Base from "./Base";

export default class Document extends Base {
  constructor(
    public id: string,
    public fileMime: string,
    public fileName: string,
    public fileSize: string,
    public fileType: string,
    public flags: string[],
    public created: Date
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.id,
      obj.file_mime,
      obj.file_name,
      obj.file_size,
      obj.file_type,
      obj.flags,
      unixTimestampToDate(obj.created)
    );
  }
}
