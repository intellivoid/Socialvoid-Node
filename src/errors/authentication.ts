import GeneralError from "./GeneralError";

export class AuthenticationError extends GeneralError {}

export class IncorrectLoginCredentials extends AuthenticationError {}

export class IncorrectTwoFactorAuthenticationCode extends AuthenticationError {}

export class AuthenticationNotApplicable extends AuthenticationError {}

export class SessionNotFound extends AuthenticationError {}

export class NotAuthenticated extends AuthenticationError {}

export class PrivateAccessTokenRequired extends AuthenticationError {}

export class AuthenticationFailure extends AuthenticationError {}

export class BadSessionChallengeAnswer extends AuthenticationError {}

export class TwoFactorAuthenticationRequired extends AuthenticationError {}

export class AlreadyAuthenticated extends AuthenticationError {}

export class SessionExpired extends AuthenticationError {}
