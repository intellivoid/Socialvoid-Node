import errors, { GeneralError } from "./errors";

export default class Response {
  id: number;
  success: boolean;
  data: any;
  error?: { code: number; message: string };

  constructor(public body: string) {
    const data = JSON.parse(body);

    if (!data.id) {
      throw new Error(`Got invalid body: ${body}`);
    }

    this.id = data.id;
    this.success = !("error" in data);
    this.data = data.result;
    this.error = data.error;
  }

  unwrap() {
    if (this.success) {
      return this.data;
    }

    if (this.error) {
      if (this.error.code in errors) {
        throw new errors[this.error.code]();
      }

      throw new GeneralError(this.error.code, this.error.message);
    }

    throw new Error("Oh no");
  }
}
