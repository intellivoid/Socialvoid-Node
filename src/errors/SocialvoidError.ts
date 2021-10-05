export default class SocialvoidError extends Error {
  message: string;

  constructor(public errorCode: number, public errorMessage: string) {
    super();
    this.message = `Error ${errorCode}: ${errorMessage}`;
  }
}
