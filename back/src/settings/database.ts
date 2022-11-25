import { isAllNotEmpty } from '@local/shared/dist/util/validate';
import { useEnv } from '@src/settings/environment';

type MongooseEnv = Pick<Env, 'MONGO_CLIENT_ID' | 'MONGO_CLIENT_PASSWORD' | 'MONGO_ADDRESS' | 'MONGO_DATABASE'>;

export const getMongooseRootUrl = () => {
  useEnv();

  const mongooseEnv: MongooseEnv = {
    MONGO_CLIENT_ID: process.env.MONGO_CLIENT_ID,
    MONGO_CLIENT_PASSWORD: process.env.MONGO_CLIENT_PASSWORD,
    MONGO_ADDRESS: process.env.MONGO_ADDRESS,
    MONGO_DATABASE: process.env.MONGO_DATABASE,
  };

  if (!isAllNotEmpty(Object.values(mongooseEnv))) {
    throw new Error('MongoDB settings not found.');
  }

  return `mongodb+srv://${mongooseEnv.MONGO_CLIENT_ID}:${mongooseEnv.MONGO_CLIENT_PASSWORD}@${mongooseEnv.MONGO_ADDRESS}/${mongooseEnv.MONGO_DATABASE}`;
};
