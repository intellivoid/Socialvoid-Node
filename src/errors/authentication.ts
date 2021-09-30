import GeneralError from "./GeneralError";

class AuthenticationError extends GeneralError {}

class IncorrectLoginCredentials extends AuthenticationError {}

class IncorrectTwoFactorAuthenticationCode extends AuthenticationError {}

class AuthenticationNotApplicable extends AuthenticationError {}

class SessionNotFound extends AuthenticationError {}

class NotAuthenticated extends AuthenticationError {}

class PrivateAccessTokenRequired extends AuthenticationError {}

class AuthenticationFailure extends AuthenticationError {}

class BadSessionChallengeAnswer extends AuthenticationError {}

class TwoFactorAuthenticationRequired extends AuthenticationError {}

class AlreadyAuthenticated extends AuthenticationError {}

class SessionExpired extends AuthenticationError {}

export default {
  8704: IncorrectLoginCredentials,
  8705: IncorrectTwoFactorAuthenticationCode,
  8706: AuthenticationNotApplicable,
  8707: SessionNotFound,
  8708: NotAuthenticated,
  8709: PrivateAccessTokenRequired,
  8710: AuthenticationFailure,
  8711: BadSessionChallengeAnswer,
  8712: TwoFactorAuthenticationRequired,
  8713: AlreadyAuthenticated,
  8714: SessionExpired,
};
