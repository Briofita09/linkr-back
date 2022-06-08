import pkg from "pg";
import "../setup.js";

const { Pool } = pkg;

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});
