import { readFileSync, writeFileSync } from "fs";
import { isNode } from "browser-or-node";
import Store from "./Store";

export default class FileStore extends Store {
  data: { [key: string]: any };

  constructor(public readonly file: string) {
    super();

    if (!isNode) {
      throw new Error("`FileStore` is for Node only");
    }

    try {
      this.data = JSON.parse(readFileSync(this.file).toString());
    } catch (err) {
      this.data = {};
    }
  }

  set(key: string, value: any) {
    this.data[key] = value;
  }

  get(key: string) {
    return this.data[key];
  }

  save() {
    writeFileSync(this.file, JSON.stringify(this.data));
  }

  delete(key: string) {
    this.data[key] = undefined;
  }
}
