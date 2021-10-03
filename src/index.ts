import Client from "./Client";

export { Client };
export * from "./types";
export * from "./errors";

import { TOTP } from "./otp";

new TOTP("a").now();
