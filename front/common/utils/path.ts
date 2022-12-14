import {
  DEFAULT_PATH,
  PATH_TO_DESCRIPTION,
  PATH_TO_NAME,
} from "@common/constants/path";

export const getPathToHeadInfo = (
  path: string
): { name: string; description: string } => {
  switch (path) {
    case DEFAULT_PATH:
      return {
        name: PATH_TO_NAME[DEFAULT_PATH],
        description: PATH_TO_DESCRIPTION[DEFAULT_PATH],
      };
    default:
      return {
        name: PATH_TO_NAME.NOT_FOUND_PATH,
        description: PATH_TO_DESCRIPTION.NOT_FOUND_PATH,
      };
  }
};
