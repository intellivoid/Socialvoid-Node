import GeneralError from "./GeneralError";

export class NetworkError extends GeneralError {}

export class PeerNotFound extends NetworkError {}

export class PostNotFound extends NetworkError {}

export class PostDeleted extends NetworkError {}

export class AlreadyReposted extends NetworkError {}

export class FileUploadError extends NetworkError {}

export class DocumentNotFound extends NetworkError {}

export class AccessDenied extends NetworkError {}
