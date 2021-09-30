import Request from "./Request";
import Response from "./Response";

export function parseResponses(
  body: string,
  batch: boolean
): Response | Response[] | undefined {
  if (!body) {
    if (batch) {
      return [];
    }

    return undefined;
  }

  const data = JSON.parse(body);

  if (Array.isArray(data)) {
    const toReturn = new Array<Response>();

    for (const response of data) {
      if ("id" in response) {
        toReturn.push(new Response(body));
      }
    }

    return toReturn;
  }

  if ("id" in data) {
    return new Response(body);
  }

  return undefined;
}

export function serializeRequests(...requests: Request[]): string {
  const toReturn = new Array<any>();

  for (const request of requests) {
    toReturn.push({
      ...request,
      jsonrpc: "2.0",
    });
  }

  return JSON.stringify(toReturn);
}
