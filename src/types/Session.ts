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
      new Date(obj.created),
      new Date(obj.expires)
    );
  }
}
