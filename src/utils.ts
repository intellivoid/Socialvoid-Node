import FormData from "form-data";
import { createHash, randomBytes } from "crypto";
import Request from "./Request";
import Response from "./Response";
import { TOTP } from "./otp";
import { map, SocialvoidError } from "./errors";

export function throwError(code: number, message: string) {
  if (code in map) {
    throw new map[code](code, message);
  }

  throw new SocialvoidError(code, message);
}

export function answerChallenge(clientPrivateHash: string, challenge: string) {
  const totpCode = new TOTP(challenge).now();

  return createHash("sha1")
    .update(totpCode + clientPrivateHash)
    .digest("hex");
}

export const unixTimestampToDate = (unixTimestamp: number) =>
  new Date(unixTimestamp * 1000);

export function parseResponses(body: any): Response | Response[] | undefined {
  if (!body) {
    return undefined;
  }

  if (body.success) {
    return new Response(body);
  }

  return Array.isArray(body)
    ? body
        .filter((item: any) => "id" in item)
        .map((item: any) => new Response(item))
    : "id" in body
    ? new Response(body)
    : undefined;
}

export function serializeRequests(...requests: Request[]): string {
  const toReturn: any[] = [];

  for (const request of requests) {
    toReturn.push({ ...request, jsonrpc: "2.0" });
  }

  return JSON.stringify(toReturn);
}

export const newHash = () => randomBytes(32).toString("hex");

export const formFromObj = (obj: { [key: string]: any }) => {
  const form = new FormData();

  for (const i in obj) {
    form.append(i, obj[i]);
  }

  return form;
};
