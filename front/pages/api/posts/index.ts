import { NextApiRequest, NextApiResponse } from "next";
import { NotionPages } from "@local/shared/dist/types/models/notion";
import { ExecutionType } from "@common/api/type";
import { executeHttpMethod } from "@common/api/util";
import { serverFetch, urlToQueryObject } from "@common/utils/message";

const execution: ExecutionType = {
  GET: async (req, res) => {
    const response = await serverFetch<NotionPages>(
      { url: "/notions", isServer: true },
      "GET",
      { param: urlToQueryObject(req.url) }
    );

    res
      .status(response.success ? 200 : Number(response.error.statusCode ?? 400))
      .json(response.success ? response.data : response.error.message);
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NotionPages>
) {
  executeHttpMethod(req, res, execution);
}
