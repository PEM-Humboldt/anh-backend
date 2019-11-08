const knex = require('knex');
const bookshelf = require('bookshelf');
const config = require('config');

const dbConfig = config.get('db');

const knexClient = knex({
  client: 'pg',
  connection: {
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
  },
});

const connection = bookshelf(knexClient);

const geoBiomesByBlocks = connection.model('geoBiomesByBlocks', {
  tableName: 'geo_biomes_by_blocks',
});

module.exports = {
  geoBiomesByBlocks,
};
