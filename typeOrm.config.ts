import { config } from "dotenv";
import { DataSource } from "typeorm";

config();

export default new DataSource({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    options: { encrypt: true },
    entities: [
      __dirname + '/src/**/entities/*.entity{.ts,.js}',
    ],
    migrationsTableName: 'typeorm__migrations',
    synchronize: false,
    migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
    logging: true
});