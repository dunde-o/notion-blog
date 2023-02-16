import { ReactHTMLAttribute } from "@common/types/type";

export interface TextObject {
  [key: string]: {
    description: string;
  };
}

export interface TextListProps extends ReactHTMLAttribute<HTMLUListElement> {
  textList: TextObject;
  textOption?: {
    marker?: string | false;
  };
}
