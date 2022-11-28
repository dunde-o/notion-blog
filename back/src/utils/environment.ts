import * as dotenv from 'dotenv';

export const useEnv = () => {
  const envState = process.env.STATE;

  if (envState === 'on') return;

  const isDev = process.env.NODE_ENV === 'dev';
  dotenv.config({ path: `env/${isDev ? '.dev' : ''}.env` });
};
