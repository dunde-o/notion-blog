import { RouterButtonProps } from "@components/atoms/RouterButton/RouterButton.type";
import { NotionPage } from "@local/shared/dist/types/models/notion";

export interface PostCardProps {
  path?: RouterButtonProps["path"];
  data: NotionPage;
  type?: "simple" | "detail";
}
