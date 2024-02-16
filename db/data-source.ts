import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'sigmoid-shop',
  entities: [],
  migrations: [],
  logging: false,
  subscribers: [],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
