import GeneralError from "./GeneralError";

class NetworkError extends GeneralError {}

class PeerNotFound extends NetworkError {}

class PostNotFound extends NetworkError {}

class PostDeleted extends NetworkError {}

class AlreadyReposted extends NetworkError {}

class FileUploadError extends NetworkError {}

class DocumentNotFound extends NetworkError {}

class AccessDenied extends NetworkError {}

export default {
  12544: PeerNotFound,
  12545: PostNotFound,
  12546: PostDeleted,
  12547: AlreadyReposted,
  12548: FileUploadError,
  12549: DocumentNotFound,
  12550: AccessDenied,
};
