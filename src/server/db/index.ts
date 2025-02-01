import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

// Buat koneksi menggunakan postgres-js
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export const db = drizzle(sql, { schema });
