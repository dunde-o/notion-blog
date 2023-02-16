import { TextObject } from "@components/atoms/TextList/TextList.type";

export const PROFILE_DESCRIPTION = {
  ["position"]: "프론트엔드 개발자",
  ["history"]: "국비 개발자 양성과정 수료, 부스트 캠프 6기 풀스택과정 수료",
  ["skill"]: "Typescript, React, NextJS, GitHub",
  ["e-mail"]: "chldlsrb1000@naver.com",
};

export const PROFILE_DESCRIPTION_TO_TEXT_LIST = Object.entries(
  PROFILE_DESCRIPTION
).reduce(
  (obj, [key, value]) => ({
    ...obj,
    [key]: { description: value },
  }),
  {} as TextObject
);

export const PROFILE = {
  PROFILE_DESCRIPTION,
  PROFILE_DESCRIPTION_TO_TEXT_LIST,
};
