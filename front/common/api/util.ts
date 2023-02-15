import { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod } from "@local/shared/dist/types/message/http";
import { ExecutionType, RequestType } from "./type";
import { clearEmptyObject } from "@common/utils/parsing";

export const executeHttpMethod = (
  req: NextApiRequest,
  res: NextApiResponse,
  execution: ExecutionType
) => {
  const method = req.method as HttpMethod | undefined;
  if (method == null || execution[method] == null) return;
  execution[method]?.(req, res);
};

export const getQueryKey = (name: string, query?: RequestType) => {
  if (query == null) {
    return name;
  }

  const sortedListQuery = Object.entries(clearEmptyObject(query))
    .map(([key, value]) => `${key}:${value}`)
    .sort();
  return [name, ...sortedListQuery].join("-");
};
