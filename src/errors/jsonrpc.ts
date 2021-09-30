import GeneralError from "./GeneralError";

class JSONRPCError extends GeneralError {}

class ParseError extends JSONRPCError {}

class InvalidRequest extends JSONRPCError {}

class MethodNotFound extends JSONRPCError {}

class InvalidParams extends JSONRPCError {}

class InternalError extends JSONRPCError {}

export default {
  "-32700": ParseError,
  "-32600": InvalidRequest,
  "-32601": MethodNotFound,
  "-32602": InvalidParams,
  "-32603": InternalError,
};
