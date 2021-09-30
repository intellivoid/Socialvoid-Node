export default class Request {
  id?: string;

  constructor(
    public method: string,
    public params?: any,
    public notification = false
  ) {
    this.id = notification ? undefined : String(Date.now());
  }
}
