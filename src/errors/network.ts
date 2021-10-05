import SocialvoidError from "./SocialvoidError";

export class NetworkError extends SocialvoidError {}

export class PeerNotFound extends NetworkError {}

export class PostNotFound extends NetworkError {}

export class PostDeleted extends NetworkError {}

export class AlreadyReposted extends NetworkError {}

export class FileUploadError extends NetworkError {}

export class DocumentNotFound extends NetworkError {}

export class AccessDenied extends NetworkError {}
