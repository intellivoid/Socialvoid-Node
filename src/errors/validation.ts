import GeneralError from "./GeneralError";

export class ValidationError extends GeneralError {}

export class InvalidUsername extends ValidationError {}

export class InvalidPassword extends ValidationError {}

export class InvalidFirstName extends ValidationError {}

export class InvalidLastName extends ValidationError {}

export class InvalidBiography extends ValidationError {}

export class UsernameAlreadyExists extends ValidationError {}

export class InvalidPeerInput extends ValidationError {}

export class InvalidPostText extends ValidationError {}

export class InvalidClientPublicHash extends ValidationError {}

export class InvalidClientPrivateHash extends ValidationError {}

export class InvalidPlatform extends ValidationError {}

export class InvalidVersion extends ValidationError {}

export class InvalidClientName extends ValidationError {}

export class InvalidSessionIdentification extends ValidationError {}

export class InvalidFileForProfilePicture extends ValidationError {}

export class FileTooLarge extends ValidationError {}

export class InvalidHelpDocumentId extends ValidationError {}

export class AgreementRequired extends ValidationError {}
