import { createHash } from "crypto";
import Request from "./Request";
import Response from "./Response";
import { TOTP } from "./otp";

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

export const getPlatform = () => process.platform || "Unknown";
