import { isAllNotEmpty } from '@local/shared/dist/util/validate';
import { useEnv } from '@src/utils/environment';

export type MongooseSecret = Pick<
  Env,
  'MONGO_CLIENT_ID' | 'MONGO_CLIENT_PASSWORD' | 'MONGO_ADDRESS' | 'MONGO_DATABASE'
>;

export const getMongooseRootUrl = () => {
  useEnv();

  const mongooseSecret: MongooseSecret = {
    MONGO_CLIENT_ID: process.env.MONGO_CLIENT_ID,
    MONGO_CLIENT_PASSWORD: process.env.MONGO_CLIENT_PASSWORD,
    MONGO_ADDRESS: process.env.MONGO_ADDRESS,
    MONGO_DATABASE: process.env.MONGO_DATABASE,
  };

  if (!isAllNotEmpty(Object.values(mongooseSecret))) {
    throw new Error('MongoDB settings not found.');
  }

  return `mongodb+srv://${mongooseSecret.MONGO_CLIENT_ID}:${mongooseSecret.MONGO_CLIENT_PASSWORD}@${mongooseSecret.MONGO_ADDRESS}/${mongooseSecret.MONGO_DATABASE}`;
};
