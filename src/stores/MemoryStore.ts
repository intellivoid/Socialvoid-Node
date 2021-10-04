import Store from "./Store";

export default class MemoryStore extends Store {
  private data: { [key: string]: any };

  constructor() {
    super();
    this.data = {};
  }

  set(key: string, value: any) {
    this.data[key] = value;
  }

  get(key: string) {
    return this.data[key];
  }

  save() {}

  delete(key: string) {
    this.data[key] = undefined;
  }
}
