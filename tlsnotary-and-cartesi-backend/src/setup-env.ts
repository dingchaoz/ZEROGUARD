import * as dotenv from 'dotenv-safe';

dotenv.config({ path: process.env.ENV_PATH || '.env' });
