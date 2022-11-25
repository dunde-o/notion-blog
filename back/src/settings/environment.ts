import * as dotenv from 'dotenv';

export const useEnv = () => {
  const isDev = process.env.NODE_ENV === 'dev';
  dotenv.config({ path: `env/${isDev ? '.dev' : ''}.env` });
};
