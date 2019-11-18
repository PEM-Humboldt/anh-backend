const Bottlejs = require('bottlejs');

const ErrorHandler = require('./errorHandler');
const logger = require('./logger');

const [models, db] = require('../persistence/models');
const geoBiomesByBlocksPersistence = require('../persistence/geo_biomes_by_blocks');
const geoSedimentaryBasinsPersistence = require('../persistence/geo_sedimentary_basins');
const geoSimplifiedBiomes = require('../persistence/geo_simplified_biomes');

const anhAreasService = require('../services/anh_areas');
const sedimentaryBasinsService = require('../services/sedimentary_basins');
const indicatorsService = require('../services/indicators');
const biomesService = require('../services/biomes');

const anhAreasRoute = require('../routes/anh_areas');
const sedimentaryBasinsRoute = require('../routes/sedimentary_basins');
const indicatorsRoute = require('../routes/indicators');
const biomesRoute = require('../routes/biomes');

const bottle = new Bottlejs();

bottle.factory('logger', () => logger);
bottle.factory('errorHandler', (container) => ErrorHandler(container.logger));

bottle.factory('geoBiomesByBlocksPersistence', () => geoBiomesByBlocksPersistence(models));
bottle.factory('geoSedimentaryBasinsPersistence', () => geoSedimentaryBasinsPersistence(models));
bottle.factory('geoSimplifiedBiomes', () => geoSimplifiedBiomes(models, db));

bottle.factory('anhAreasService', (container) => (
  anhAreasService(container.geoBiomesByBlocksPersistence)
));
bottle.factory('sedimentaryBasinsService', (container) => (
  sedimentaryBasinsService(container.geoSedimentaryBasinsPersistence)
));
bottle.factory('indicatorsService', () => indicatorsService());
bottle.factory('biomesService', (container) => (
  biomesService(container.geoSimplifiedBiomes)
));

bottle.factory('routes', (container) => ([
  anhAreasRoute(container.errorHandler, container.anhAreasService),
  sedimentaryBasinsRoute(container.errorHandler, container.sedimentaryBasinsService),
  indicatorsRoute(container.errorHandler, container.indicatorsService),
  biomesRoute(container.errorHandler, container.biomesService),
]));


module.exports = bottle.container;
