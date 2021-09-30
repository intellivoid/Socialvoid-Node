import GeneralError from "./GeneralError";

class ValidationError extends GeneralError {}

class InvalidUsername extends ValidationError {}

class InvalidPassword extends ValidationError {}

class InvalidFirstName extends ValidationError {}

class InvalidLastName extends ValidationError {}

class InvalidBiography extends ValidationError {}

class UsernameAlreadyExists extends ValidationError {}

class InvalidPeerInput extends ValidationError {}

class InvalidPostText extends ValidationError {}

class InvalidClientPublicHash extends ValidationError {}

class InvalidClientPrivateHash extends ValidationError {}

class InvalidPlatform extends ValidationError {}

class InvalidVersion extends ValidationError {}

class InvalidClientName extends ValidationError {}

class InvalidSessionIdentification extends ValidationError {}

class InvalidFileForProfilePicture extends ValidationError {}

class FileTooLarge extends ValidationError {}

class InvalidHelpDocumentId extends ValidationError {}

class AgreementRequired extends ValidationError {}

export default {
  8448: InvalidUsername,
  8449: InvalidPassword,
  8450: InvalidFirstName,
  8451: InvalidLastName,
  8452: InvalidBiography,
  8453: UsernameAlreadyExists,
  8454: InvalidPeerInput,
  8455: InvalidPostText,
  8456: InvalidClientPublicHash,
  8457: InvalidClientPrivateHash,
  8458: InvalidPlatform,
  8459: InvalidVersion,
  8460: InvalidClientName,
  8461: InvalidSessionIdentification,
  8462: InvalidFileForProfilePicture,
  8463: FileTooLarge,
  8464: InvalidHelpDocumentId,
  8465: AgreementRequired,
};
