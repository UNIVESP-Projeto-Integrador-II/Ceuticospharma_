import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: "postgres://default:txBHVOJ95fhT@ep-tiny-dream-25593241-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
})

export default pool;
