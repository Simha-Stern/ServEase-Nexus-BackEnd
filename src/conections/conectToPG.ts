import { config } from 'dotenv';
import { PoolClient } from 'pg';
import pkg from 'pg';

const { Pool } = pkg;
config();

const connect = {
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    host: process.env.POSTGRES_HOST!,
    port: Number(process.env.POSTGRES_PORT!),
    database: process.env.POSTGRES_DB,
}
const pool = new Pool(connect);

export const connectToPg = async () => {
    try {
        await pool.connect();
        console.log('Connected to postgres');
    } catch (err) {
        console.error('Error connecting to postgres: ', err);
    } finally {
        pool.end();
    }
};


export const sendQueryToDatabase = async (query: string, values?: any[]): Promise<any> => {
    const client: PoolClient = await pool.connect();
    try {
        const data = await client.query(query, values);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
}