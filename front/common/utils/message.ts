import { RequestType, UrlType } from "@common/api/type";
import { isEmpty } from "@local/shared/dist/util/validate";
import {
  HttpMethod,
  HttpResponseForm,
} from "@local/shared/dist/types/message/http";
import { clearEmptyObject } from "@common/utils/parsing";

export const objectToQueryString = (
  queryObject?: RequestType,
  option?: { nullable?: boolean }
): string => {
  if (queryObject == null) return "";
  const { nullable = false } = option ?? {};
  const query = Object.entries(
    nullable ? queryObject : clearEmptyObject(queryObject)
  )
    .reduce<string[]>((arr, [key, value]) => [...arr, `${key}=${value}`], [])
    .join("&");
  return isEmpty(query) ? "" : `?${query}`;
};

export const urlToQueryObject = (url?: string): RequestType => {
  const [_, queries] = url?.split("?") ?? ["", ""];
  const queryList = queries?.split("&") ?? [];
  return queryList.reduce((obj, query) => {
    const [key, value] = query.split("=");
    return key == null || value == null
      ? obj
      : {
          ...obj,
          [key]: value,
        };
  }, {});
};

async function serverFetch<T>(
  url: UrlType,
  method: "GET",
  requestData?: { param?: RequestType }
): Promise<HttpResponseForm<T>>;
async function serverFetch<T>(
  url: UrlType,
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  requestData?: { body?: RequestType }
): Promise<HttpResponseForm<T>>;
async function serverFetch<T>(
  url: UrlType,
  method: HttpMethod,
  requestData?: { param?: RequestType; body?: RequestType }
): Promise<HttpResponseForm<T>> {
  const fetchOptions: RequestInit = { method };
  const { isServer } = typeof url === "string" ? { isServer: false } : url;

  if (typeof url !== "string") {
    url =
      (isServer
        ? `${process.env.SERVER_SECURE ? "https://" : "http://"}` +
          `${process.env.SERVER_URL}`
        : "") + url.url;
  }

  if (method === "GET" && requestData?.param != null) {
    const query = objectToQueryString(requestData.param);
    url = `${url}${query}`;
  } else if (requestData?.body != null) {
    fetchOptions.body = JSON.stringify(requestData.body);
  }

  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    return isServer
      ? data
      : {
          success: true,
          path: url,
          timeStamp: new Date(),
          data,
        };
  } catch (error) {
    return {
      success: false,
      path: url,
      timeStamp: new Date(),
      error: {
        message: error as string,
        statusCode: "400",
        ...(error as { [key in string]: string }),
      },
    };
  }
}

async function clientFetch<T>(
  url: string,
  method: "GET",
  requestData?: { param?: RequestType }
): Promise<T | undefined>;
async function clientFetch<T>(
  url: string,
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  requestData?: { body?: RequestType }
): Promise<T | undefined>;
async function clientFetch<T>(
  url: string,
  method: HttpMethod,
  requestData?: { param?: RequestType; body?: RequestType }
): Promise<T | undefined> {
  const fetchOptions: RequestInit = { method };

  if (method === "GET" && requestData?.param != null) {
    const query = objectToQueryString(requestData.param);
    url = `${url}${query}`;
  } else if (requestData?.body != null) {
    fetchOptions.body = JSON.stringify(requestData.body);
  }

  try {
    const response = await fetch(url, fetchOptions);
    return response.json();
  } catch (error) {
    return;
  }
}

export { serverFetch, clientFetch };
