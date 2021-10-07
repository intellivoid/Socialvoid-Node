import { SocialvoidError, map } from "./errors";

export default class Response {
  id?: number;
  success: boolean;
  error?: { code: number; message: string };

  constructor(public data: any) {
    if (!this.data.success) {
      throw new Error(`Got invalid data: ${data}`);
    }

    this.id = data.id;
    this.success = !("error" in data);
    this.data = data.result || data.results;

    if (data.error) {
      this.error = data.error;
    } else if (data.error_code && data.message) {
      this.error = { code: data.error_code, message: data.message };
    }
  }

  unwrap() {
    if (this.success) {
      return this.data;
    }

    if (this.error) {
      if (this.error.code in map) {
        throw new map[this.error.code](this.error.code, this.error.message);
      }

      throw new SocialvoidError(this.error.code, this.error.message);
    }

    throw new Error("Oh no");
  }
}
