import jsonrpc from "./jsonrpc";
import authentication from "./authentication";
import network from "./network";
import server from "./server";
import validation from "./validation";
import GeneralError from "./GeneralError";

export { GeneralError };

const all: { [key: string | number]: any } = {
  ...jsonrpc,
  ...authentication,
  ...network,
  ...server,
  ...validation,
};

export default all;
