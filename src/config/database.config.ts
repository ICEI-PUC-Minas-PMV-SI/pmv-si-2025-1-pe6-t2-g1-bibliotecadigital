import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.MONGO_URI || 'mongodb://localhost:27017/biblioteca-digital',
  user: process.env.MONGO_USER || '',
  password: process.env.MONGO_PASSWORD || '',
  dbName: process.env.MONGO_DB_NAME || 'biblioteca_digital',
}));