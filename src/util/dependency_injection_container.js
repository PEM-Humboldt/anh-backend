const Bottlejs = require('bottlejs');

const ErrorHandler = require('./errorHandler');
const logger = require('./logger');

const [models, db] = require('../persistence/models');
const geoBiomesByBlocksPersistence = require('../persistence/geo_biomes_by_blocks');
const geoSedimentaryBasinsPersistence = require('../persistence/geo_sedimentary_basins');
const geoBlocksPersistence = require('../persistence/geo_blocks');
const geoIndicatorsByBlocksPersistence = require('../persistence/geo_indicators_by_blocks');
const indicatorsCatalogPersistence = require('../persistence/indicators_catalog');

const anhAreasService = require('../services/anh_areas');
const sedimentaryBasinsService = require('../services/sedimentary_basins');
const indicatorsService = require('../services/indicators');

const anhAreasRoute = require('../routes/anh_areas');
const sedimentaryBasinsRoute = require('../routes/sedimentary_basins');
const indicatorsRoute = require('../routes/indicators');

const bottle = new Bottlejs();

bottle.factory('logger', () => logger);
bottle.factory('errorHandler', (container) => ErrorHandler(container.logger));

bottle.factory('geoBiomesByBlocksPersistence', () => geoBiomesByBlocksPersistence(models, db));
bottle.factory('geoSedimentaryBasinsPersistence', () => geoSedimentaryBasinsPersistence(models));
bottle.factory('geoBlocksPersistence', () => geoBlocksPersistence(models, db));
bottle.factory('geoIndicatorsByBlocksPersistence', () => geoIndicatorsByBlocksPersistence(models, db));
bottle.factory('indicatorsCatalogPersistence', () => indicatorsCatalogPersistence(models));

bottle.factory('anhAreasService', (container) => (
  anhAreasService(
    container.geoBiomesByBlocksPersistence,
    container.geoBlocksPersistence,
    container.geoIndicatorsByBlocksPersistence,
    container.indicatorsCatalogPersistence,
  )
));
bottle.factory('sedimentaryBasinsService', (container) => (
  sedimentaryBasinsService(container.geoSedimentaryBasinsPersistence)
));
bottle.factory('indicatorsService', (container) => (
  indicatorsService(container.geoIndicatorsByBlocksPersistence)
));

bottle.factory('routes', (container) => ([
  anhAreasRoute(container.errorHandler, container.anhAreasService),
  sedimentaryBasinsRoute(container.errorHandler, container.sedimentaryBasinsService),
  indicatorsRoute(container.errorHandler, container.indicatorsService),
]));


module.exports = bottle.container;
