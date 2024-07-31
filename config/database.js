module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'my-database'),
        username: env('DATABASE_USERNAME', 'my-username'),
        password: env('DATABASE_PASSWORD', 'my-password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
