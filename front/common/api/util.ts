import { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod } from "@local/shared/dist/types/message/http";
import { ExecutionType, requestType } from "./type";
import { isEmpty } from "@local/shared/dist/util/validate";

export const executeHttpMethod = (
  req: NextApiRequest,
  res: NextApiResponse,
  execution: ExecutionType
) => {
  const method = req.method as HttpMethod | undefined;
  if (method == null || execution[method] == null) return;
  execution[method]?.(req, res);
};

export const objectToQueryString = (queryObject?: requestType): string => {
  if (queryObject == null) return "";
  const query = Object.entries(queryObject)
    .reduce<string[]>((arr, [key, value]) => [...arr, `${key}=${value}`], [])
    .join("&");
  return isEmpty(query) ? "" : `?${query}`;
};

async function defaultFetch<T>(
  url: string,
  method: "GET",
  requestData?: { param?: requestType }
): Promise<T | undefined>;
async function defaultFetch<T>(
  url: string,
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  requestData?: { body?: requestType }
): Promise<T | undefined>;
async function defaultFetch<T>(
  url: string,
  method: HttpMethod,
  requestData?: { param?: requestType; body?: requestType }
): Promise<T | undefined> {
  const fetchOptions: RequestInit = { method };

  if (method === "GET" && requestData?.param != null) {
    const query = objectToQueryString(requestData.param);
    url = `${url}${query}`;
  } else if (requestData?.body != null) {
    fetchOptions.body = JSON.stringify(requestData.body);
  }

  const response = await fetch(url, fetchOptions);
  return response.json();
}

export { defaultFetch };
