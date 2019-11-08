const Bottlejs = require('bottlejs');

const ErrorHandler = require('./errorHandler');
const logger = require('./logger');

const models = require('../persistence/models');
const geoBiomesByBlocks = require('../persistence/geo_biomes_by_blocks');

const anhAreasService = require('../services/anh_areas');

const anhAreasRoute = require('../routes/anh_areas');

const bottle = new Bottlejs();

bottle.factory('logger', () => logger);
bottle.factory('errorHandler', (container) => ErrorHandler(container.logger));

bottle.factory('geoBiomesByBlocksPersistence', () => geoBiomesByBlocks(models));

bottle.factory('anhAreasService', (container) => (
  anhAreasService(container.geoBiomesByBlocksPersistence)
));

bottle.factory('routes', (container) => ([
  anhAreasRoute(container.errorHandler, container.anhAreasService),
]));


module.exports = bottle.container;
