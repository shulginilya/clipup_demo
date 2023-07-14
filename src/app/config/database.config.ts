import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

interface DbConfigObjectType {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    driver: string;
};

const dbConfigObject: DbConfigObjectType = {
    host: process.env.DB_HOST || '',
    port: parseInt(process.env.DB_PORT || ''),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || '',
    driver: process.env.DB_DRIVER as Dialect
};

const dbDriver = dbConfigObject.driver as Dialect;

const sequelizeConnection = new Sequelize(dbConfigObject.database, dbConfigObject.user, dbConfigObject.password, {
    host: dbConfigObject.host,
    dialect: dbDriver
});

export default sequelizeConnection;
