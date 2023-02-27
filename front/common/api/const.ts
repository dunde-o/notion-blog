import { UseQueryOptions } from 'react-query';

/**
 * @description use UseQueryOptions type
 * @type UseQueryOptions
 */
export const QUERY_OPTION = {
  DEFAULT: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 0,
  },
  CACHE: {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  },
};
