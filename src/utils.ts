import Request from "./Request";
import Response from "./Response";

export function parseResponses(body: any) {
  return Array.isArray(body)
    ? body
        .filter((item: any) => "id" in item)
        .map((item: any) => new Response(item))
    : "id" in body
    ? body
    : undefined;
}

export function serializeRequests(...requests: Request[]): string {
  const toReturn: any[] = [];

  for (const request of requests) {
    toReturn.push({ ...request, jsonrpc: "2.0" });
  }

  return JSON.stringify(toReturn);
}
