import GeneralError from "./GeneralError";

export class JSONRPCError extends GeneralError {}

export class ParseError extends JSONRPCError {}

export class InvalidRequest extends JSONRPCError {}

export class MethodNotFound extends JSONRPCError {}

export class InvalidParams extends JSONRPCError {}

export class InternalError extends JSONRPCError {}
