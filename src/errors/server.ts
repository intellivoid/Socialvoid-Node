import GeneralError from "./GeneralError";

class ServerError extends GeneralError {}

class InternalServerError extends ServerError {}

class DocumentUpload extends ServerError {}

export default { 16384: InternalServerError, 16385: DocumentUpload };
