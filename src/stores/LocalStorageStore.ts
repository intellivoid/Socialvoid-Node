import { isBrowser } from "browser-or-node";
import Store from "./Store";

function resolveToBeSet(toBeSet: any) {
  return JSON.stringify(toBeSet);
}

function resolveGot(got: string | null) {
  return got == null ? got : JSON.parse(got);
}

export default class LocalStorageStore extends Store {
  constructor(private id = "main") {
    super();

    if (!isBrowser) {
      throw new Error("`LocalStorageStore` is only for browsers");
    }
  }

  private resolveKey(key: string) {
    return key + this.id;
  }

  set(key: string, value: any) {
    localStorage.setItem(this.resolveKey(key), resolveToBeSet(value));
  }

  get(key: string) {
    return resolveGot(localStorage.getItem(this.resolveKey(key)));
  }

  save() {}

  delete(key: string) {
    localStorage.removeItem(this.resolveKey(key));
  }
}
