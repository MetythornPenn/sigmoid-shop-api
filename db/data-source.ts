import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: String(process.env.DB_HOST),
  port: Number(process.env.PORT),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_DATABASE),
  entities: [],
  migrations: [],
  logging: false,
  subscribers: [],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
