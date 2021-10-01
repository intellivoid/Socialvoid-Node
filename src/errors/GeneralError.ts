export default class GeneralError extends Error {
  message: string;

  constructor(public errorCode: number, public errorMessage: string) {
    super();
    this.message = `Error ${errorCode}: ${errorMessage}`;
  }
}
