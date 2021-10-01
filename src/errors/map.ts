import * as errors from "./all";
import GeneralError from "./GeneralError";

export const map: { [key: string | number]: typeof GeneralError } = {
  // jsonrpc
  "-32700": errors.ParseError,
  "-32600": errors.InvalidRequest,
  "-32601": errors.MethodNotFound,
  "-32602": errors.InvalidParams,
  "-32603": errors.InternalError,
  // network
  12544: errors.PeerNotFound,
  12545: errors.PostNotFound,
  12546: errors.PostDeleted,
  12547: errors.AlreadyReposted,
  12548: errors.FileUploadError,
  12549: errors.DocumentNotFound,
  12550: errors.AccessDenied,
  // server
  16384: errors.InternalServerError,
  16385: errors.DocumentUpload,
  // validation
  8448: errors.InvalidUsername,
  8449: errors.InvalidPassword,
  8450: errors.InvalidFirstName,
  8451: errors.InvalidLastName,
  8452: errors.InvalidBiography,
  8453: errors.UsernameAlreadyExists,
  8454: errors.InvalidPeerInput,
  8455: errors.InvalidPostText,
  8456: errors.InvalidClientPublicHash,
  8457: errors.InvalidClientPrivateHash,
  8458: errors.InvalidPlatform,
  8459: errors.InvalidVersion,
  8460: errors.InvalidClientName,
  8461: errors.InvalidSessionIdentification,
  8462: errors.InvalidFileForProfilePicture,
  8463: errors.FileTooLarge,
  8464: errors.InvalidHelpDocumentId,
  8465: errors.AgreementRequired,
  // auth
  8704: errors.IncorrectLoginCredentials,
  8705: errors.IncorrectTwoFactorAuthenticationCode,
  8706: errors.AuthenticationNotApplicable,
  8707: errors.SessionNotFound,
  8708: errors.NotAuthenticated,
  8709: errors.PrivateAccessTokenRequired,
  8710: errors.AuthenticationFailure,
  8711: errors.BadSessionChallengeAnswer,
  8712: errors.TwoFactorAuthenticationRequired,
  8713: errors.AlreadyAuthenticated,
  8714: errors.SessionExpired,
};
