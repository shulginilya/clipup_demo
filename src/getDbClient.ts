import { Client } from 'pg';

const databaseConfig = require('./config/database.config.ts');

export const getDbClient = (): Client => {
    const client = new Client(databaseConfig);
    return client;
};
