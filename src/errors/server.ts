import GeneralError from "./GeneralError";

export class ServerError extends GeneralError {}

export class InternalServerError extends ServerError {}

export class DocumentUpload extends ServerError {}
