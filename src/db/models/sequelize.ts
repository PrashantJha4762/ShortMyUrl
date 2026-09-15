import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME || "Shortner_dev",
    process.env.DB_USERNAME || "root",
    process.env.DB_PASSWORD || "root",
    {
        host: process.env.DB_HOST || "localhost",
        dialect: "mysql"
    }
);