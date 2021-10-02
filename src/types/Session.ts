import { unixTimestampToDate } from "../utils";
import Base from "./Base";

export default class Session extends Base {
  constructor(
    public id: string,
    public flags: string[],
    public authenticated: boolean,
    public created: Date,
    public expires: Date
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.id,
      obj.flags,
      obj.authenticated,
      unixTimestampToDate(obj.created),
      unixTimestampToDate(obj.expires)
    );
  }
}
