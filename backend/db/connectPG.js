import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
    user: process.env.PG_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    ssl: { rejectUnauthorized: false },
    port: process.env.PGPORT
}