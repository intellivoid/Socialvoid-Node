import SocialvoidError from "./SocialvoidError";

export class ServerError extends SocialvoidError {}

export class InternalServerError extends ServerError {}

export class DocumentUpload extends ServerError {}
