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
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [],
  logging: false,
  subscribers: [],
  synchronize: true, // automatically createa entity (table)
  // synchronize: false, // need to use migration command
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
