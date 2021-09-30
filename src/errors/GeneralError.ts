export default class GeneralError extends Error {
  constructor(public errorCode: number, public errorMessage: string) {
    super();
    this.message = `Error ${errorCode}: ${errorMessage}`;
  }
}
