"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
let sequelizeConnection;
if (process.env.STATUS === 'production') {
    sequelizeConnection = new sequelize_1.Sequelize(process.env.PROD_DB_NAME, process.env.PROD_DB_USER, process.env.PROD_DB_PASSWORD, {
        host: process.env.PROD_DB_HOST,
        dialect: process.env.DB_DRIVER
    });
}
else {
    sequelizeConnection = new sequelize_1.Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USER, process.env.DEV_DB_PASSWORD, {
        host: process.env.DEV_DB_HOST,
        dialect: process.env.DB_DRIVER
    });
}
exports.default = sequelizeConnection;
