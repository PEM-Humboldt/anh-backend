const { Router } = require('restify-router');

/**
 * @apiDefine anh_areas Anh Areas
 * Endpoints to get anh areas information
 */

module.exports = (errorHandler, anhAreasService) => {
  const router = new Router();

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas List basic info
   * @apiName listAllAnhAreas
   * @apiVersion 1.0.0
   * @apiDescription
   * List all anh areas basic information: name.
   *
   * @apiSuccess {Object[]} result
   * @apiSuccess {String} result.name area name
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas
   * @apiUse listAllAnhAreasSE
   */
  router.get('/anh_areas', errorHandler((req, res, next) => (
    anhAreasService.listAllBasicInfo()
      .then((areas) => {
        res.send(areas);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:id get complete Info
   * @apiName getAreaInfo
   * @apiVersion 1.0.0
   * @apiDescription
   * Get an anh area general information
   *
   * @apiParam {String} id area id
   *
   * @apiSuccess {Object} result
   * @apiSuccess {Number} result.area total area in hectares
   * @apiSuccess {String} result.description description about the area
   * @apiSuccess {Object[]} result.categories presence or absence of special areas inside the area
   * @apiSuccess {Boolean} result.categories.protected_area if the given area has protected areas
   * @apiSuccess {Boolean} result.categories.forest_reserves if the given area has forest reserves
   * @apiSuccess {Boolean} result.categories.strategic_ecosystem if the given area has strategic
   * ecosystems inside
   * @apiSuccess {Boolean} result.categories.ethnic_territories if the given area has ethnic
   * territories inside
   * @apiSuccess {Boolean} result.categories.peasant_reserves if the given area has peasant reserves
   * @apiSuccess {Boolean} result.categories.projects if the given area has projects
   * @apiSuccess {Boolean} result.categories.ordering if the given area has ordering
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96
   */
  router.get('/anh_areas/:id', errorHandler((req, res, next) => (
    anhAreasService.getAreaInfo(req.params.id)
      .then((areaInfo) => {
        res.send(areaInfo);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:id/biomes/geometry get geometry with biomes
   * @apiName getAreaGeometryWithBiomes
   * @apiVersion 1.0.0
   * @apiDescription
   * Get an anh area geometry divided by biomes
   *
   * @apiParam {String} id area id
   *
   * @apiSuccess {Object} result GeoJSON object with the area geometry
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/biomes/geometry
   */
  router.get('/anh_areas/:id/biomes/geometry', errorHandler((req, res, next) => (
    anhAreasService.getAreaGeometryWithBiomes(req.params.id)
      .then((areaGeometry) => {
        res.send(areaGeometry);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:id/biomes get biomes area
   * @apiName getAreaBiomes
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the biomes area and percentage inside an anh area
   *
   * @apiParam {String} id area id
   *
   * @apiSuccess {Object[]} result biomes
   * @apiSuccess {Number} result.area biome area inside the area
   * @apiSuccess {Number} result.percentage biome area percentage
   * @apiSuccess {String} result.name biome name
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/biomes
   */
  router.get('/anh_areas/:id/biomes', errorHandler((req, res, next) => (
    anhAreasService.getAreaBiomes(req.params.id)
      .then((areaBiomes) => {
        res.send(areaBiomes);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:id/indicators get associated indicators
   * @apiName getAreaIndicators
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the list of indicators information associated to an area
   *
   * @apiParam {String} id area id
   *
   * @apiSuccess {Object[]} result Array with indicators objects
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/indicators
   */
  router.get('/anh_areas/:id/indicators', errorHandler((req, res, next) => (
    anhAreasService.getAreaIndicators(req.params.id)
      .then((areaIndicators) => {
        res.send(areaIndicators);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:id/indicators/biomes get biomes with indicators inside area
   * @apiName getAreaIndicatorsBiomes
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the list of biomes inside the anh area with indicators information
   *
   * @apiParam {String} id area id
   *
   * @apiSuccess {Object[]} result Array with biomes indicators objects
   * @apiSuccess {Number} result.id biome id
   * @apiSuccess {String} result.name biome name
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/indicators/biomes
   */
  router.get('/anh_areas/:id/indicators/biomes', errorHandler((req, res, next) => (
    anhAreasService.listAreaIndicatorsBiomes(req.params.id)
      .then((indicatorsBiomes) => {
        res.send(indicatorsBiomes);
        next();
      })
  )));

  return router;
};
