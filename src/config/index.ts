import dotenv from "dotenv";

dotenv.config();

type ServerConfig = {
  PORT: number;
};
type Dbconfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
};

export const serverconfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3001,
};
export const dbconfig: Dbconfig = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "shortmyurl",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql"
};