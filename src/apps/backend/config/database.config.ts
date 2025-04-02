import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.MONGO_URI || 'mongodb://mongoadmin:secret@localhost:27017/biblioteca_digital',
  user: process.env.MONGO_USER || 'mongoadmin',
  password: process.env.MONGO_PASSWORD || 'secret',
  dbName: process.env.MONGO_DB_NAME || 'biblioteca_digital',
}));