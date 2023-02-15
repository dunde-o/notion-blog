import {
  DEFAULT_PATH,
  PATH,
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
    case PATH.POSTS:
      return {
        name: PATH_TO_NAME[PATH.POSTS],
        description: PATH_TO_DESCRIPTION[PATH.POSTS],
      };
    case PATH.PROFILE:
      return {
        name: PATH_TO_NAME[PATH.PROFILE],
        description: PATH_TO_DESCRIPTION[PATH.PROFILE],
      };
    default:
      return {
        name: PATH_TO_NAME.NOT_FOUND_PATH,
        description: PATH_TO_DESCRIPTION.NOT_FOUND_PATH,
      };
  }
};
