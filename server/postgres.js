import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.SUPABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});


export default pool;