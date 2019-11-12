const Bottlejs = require('bottlejs');

const ErrorHandler = require('./errorHandler');
const logger = require('./logger');

const models = require('../persistence/models');
const geoBiomesByBlocksPersistence = require('../persistence/geo_biomes_by_blocks');
const geoSedimentaryBasinsPersistence = require('../persistence/geo_sedimentary_basins');

const anhAreasService = require('../services/anh_areas');
const sedimentaryBasinsService = require('../services/sedimentary_basins');

const anhAreasRoute = require('../routes/anh_areas');
const sedimentaryBasinsRoute = require('../routes/sedimentary_basins');

const bottle = new Bottlejs();

bottle.factory('logger', () => logger);
bottle.factory('errorHandler', (container) => ErrorHandler(container.logger));

bottle.factory('geoBiomesByBlocksPersistence', () => geoBiomesByBlocksPersistence(models));
bottle.factory('geoSedimentaryBasinsPersistence', () => geoSedimentaryBasinsPersistence(models));

bottle.factory('anhAreasService', (container) => (
  anhAreasService(container.geoBiomesByBlocksPersistence)
));
bottle.factory('sedimentaryBasinsService', (container) => (
  sedimentaryBasinsService(container.geoSedimentaryBasinsPersistence)
));

bottle.factory('routes', (container) => ([
  anhAreasRoute(container.errorHandler, container.anhAreasService),
  sedimentaryBasinsRoute(container.errorHandler, container.sedimentaryBasinsService),
]));


module.exports = bottle.container;
