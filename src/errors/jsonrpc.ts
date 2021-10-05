import SocialvoidError from "./SocialvoidError";

export class JSONRPCError extends SocialvoidError {}

export class ParseError extends JSONRPCError {}

export class InvalidRequest extends JSONRPCError {}

export class MethodNotFound extends JSONRPCError {}

export class InvalidParams extends JSONRPCError {}

export class InternalError extends JSONRPCError {}
