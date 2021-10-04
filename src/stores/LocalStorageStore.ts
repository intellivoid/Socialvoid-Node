import { isBrowser } from "browser-or-node";
import Store from "./Store";

export default class LocalStorageStore extends Store {
  constructor() {
    super();

    if (!isBrowser) {
      throw new Error("`LocalStorageStore` is only for browsers");
    }
  }

  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  save() {}

  delete(key: string) {
    localStorage.removeItem(key);
  }
}
