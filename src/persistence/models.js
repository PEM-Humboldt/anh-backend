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
  tableName: 'anh.geo_biomes_by_blocks',
});
const geoSedimentaryBasins = connection.model('geoSedimentaryBasins', {
  tableName: 'anh.geo_sedimentary_basins',
});
const geoSimplifiedBiomes = connection.model('geoSimplifiedBiomes', {
  tableName: 'anh.geo_simplified_biomes',
});
const geoBlocks = connection.model('geoBlocks', {
  tableName: 'anh.geo_blocks',
});
const indicatorsCatalog = connection.model('indicatorsCatalog', {
  tableName: 'anh.indicators_catalog',
});
const geoIndicatorsByBlocks = connection.model('geoIndicatorsByBlocks', {
  tableName: 'anh.geo_indicators_by_blocks',
});

module.exports = [
  {
    geoBiomesByBlocks,
    geoSedimentaryBasins,
    geoSimplifiedBiomes,
    geoBlocks,
    geoIndicatorsByBlocks,
    indicatorsCatalog,
  },
  connection.knex,
];
