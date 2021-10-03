import TypeBase from "./TypeBase";

export default class TextEntity extends TypeBase {
  constructor(
    public type: string,
    public offset: number,
    public length: number,
    public value?: string
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(obj.type, obj.offset, obj.length, obj.value);
  }
}
