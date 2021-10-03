import TypeBase from "./TypeBase";
import TextEntity from "./TextEntity";

export default class HelpDocument extends TypeBase {
  constructor(
    public id: string,
    public text: string,
    public entities: TextEntity[]
  ) {
    super();
  }

  static fromObject(obj: any) {
    return new this(
      obj.id,
      obj.text,
      obj.entities.map((obj: any) => TextEntity.fromObject(obj))
    );
  }
}
