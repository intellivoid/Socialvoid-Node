import { isBrowser } from "browser-or-node";
import Store from "./Store";

export default class LocalStorageStore extends Store {
  private id: string;

  constructor() {
    super();

    if (!isBrowser) {
      throw new Error("`LocalStorageStore` is only for browsers");
    }

    this.id = String(new Date().getTime());
  }

  private resolveKey(key: string) {
    return key + this.id;
  }

  set(key: string, value: any) {
    localStorage.setItem(this.resolveKey(key), value);
  }

  get(key: string) {
    return localStorage.getItem(this.resolveKey(key));
  }

  save() {}

  delete(key: string) {
    localStorage.removeItem(this.resolveKey(key));
  }
}
