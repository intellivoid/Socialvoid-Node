import { isBrowser } from "browser-or-node";

export const NAME = "SocialvoidJS";
export const VERSION = "0.0.1";
export const PLATFORM = isBrowser ? "Browser" : process.platform || "Unknown";
