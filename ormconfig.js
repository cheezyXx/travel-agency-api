module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  port: 5432,
  username: 'travelagency',
  password: 'kralik12',
  database: 'sda_ta',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migration',
  synchronize: true,
  logging: true,
  migrations: ['dist/migration/*.ts'],
  cli: {
    entitiesDir: 'src/user',
    migrationsDir: 'src/migration',
  },
  ssl: false,
};
