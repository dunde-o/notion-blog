import { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod } from "@local/shared/dist/types/message/http";

export type ExecutionType = {
  [key in HttpMethod]?: (req: NextApiRequest, res: NextApiResponse) => void;
};

export const executeHttpMethod = (
  req: NextApiRequest,
  res: NextApiResponse,
  execution: ExecutionType
) => {
  const method = req.method as HttpMethod | undefined;
  if (method == null || execution[method] == null) return;
  execution[method]?.(req, res);
};
