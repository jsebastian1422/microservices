import { Sequelize } from 'sequelize';
import 'dotenv/config';
let sequelizeConnection: any;
if (process.env.STATUS === 'production') {
  sequelizeConnection = new Sequelize(process.env.PROD_DB_NAME, process.env.PROD_DB_USER, process.env.PROD_DB_PASSWORD, {
    host: process.env.PROD_DB_HOST,
    dialect: process.env.DB_DRIVER
  })
} else {
  sequelizeConnection = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USER, process.env.DEV_DB_PASSWORD, {
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DB_DRIVER
  })
}
export default sequelizeConnection;