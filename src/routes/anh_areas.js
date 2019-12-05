const { Router } = require('restify-router');

/**
 * @apiDefine anh_areas Anh Areas
 * Endpoints to get anh areas information
 */

module.exports = (errorHandler, anhAreasService) => {
  const router = new Router();

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas list basic info
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
   * @apiParam {String} name area anh area name
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
   * @apiUse getAreaInfoSE
   */
  router.get('/anh_areas/:name', errorHandler((req, res, next) => (
    anhAreasService.getAreaInfo(req.params.name)
      .then((areaInfo) => {
        res.send(areaInfo);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} anh_areas/:name/geometry get geometry
   * @apiName getAreaGeometry
   * @apiVersion 1.0.0
   * @apiDescription
   * Get an anh area geometry
   *
   * @apiParam {String} name anh area name
   *
   * @apiSuccess {Object} result GeoJSON object with the area geometry
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/geometry
   * @apiUse getAreaGeometrySE
   */
  router.get('/anh_areas/:name/geometry', errorHandler((req, res, next) => (
    anhAreasService.getAreaGeometry(req.params.name)
      .then((areaGeometry) => {
        res.send(areaGeometry);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:name/biomes get biomes area
   * @apiName getAreaBiomes
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the biomes area and percentage inside an anh area
   *
   * @apiParam {String} name area name
   *
   * @apiSuccess {Object[]} result biomes
   * @apiSuccess {Number} result.area biome area inside the area
   * @apiSuccess {Number} result.percentage biome area percentage
   * @apiSuccess {String} result.name biome name
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/biomes
   * @apiUse getAreaBiomesSE
   */
  router.get('/anh_areas/:name/biomes', errorHandler((req, res, next) => (
    anhAreasService.getAreaBiomes(req.params.name)
      .then((areaBiomes) => {
        res.send(areaBiomes);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:name/biomes/geometry get geometry with biomes
   * @apiName getAreaGeometryWithBiomes
   * @apiVersion 1.0.0
   * @apiDescription
   * Get an anh area geometry divided by biomes
   *
   * @apiParam {String} name anh area name
   *
   * @apiSuccess {Object} result GeoJSON object with the area geometry
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/biomes/geometry
   * @apiUse getAreaGeometryWithBiomesSE
   */
  router.get('/anh_areas/:name/biomes/geometry', errorHandler((req, res, next) => (
    anhAreasService.getAreaGeometryWithBiomes(req.params.name)
      .then((areaGeometry) => {
        res.send(areaGeometry);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:name/indicators list indicators
   * @apiName getAreaIndicators
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the list of indicators information associated to an area
   *
   * @apiParam {String} name area name
   * @apiParam {Number[]} [ids] query param to indicate which indicators get in the request
   *
   * @apiUse getAreaIndicatorsResponse
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/indicators
   * @apiUse getAreaIndicatorsSE
   */
  router.get('/anh_areas/:name/indicators', errorHandler((req, res, next) => {
    if (req.params.ids) {
      let indicatorsIds = [];
      if (typeof req.params.ids === 'string') {
        indicatorsIds = [parseInt(req.params.ids, 10)];
      } else {
        indicatorsIds = req.params.ids.map((id) => parseInt(id, 10));
      }
      return anhAreasService.getAreaIndicatorsByIds(req.params.name, indicatorsIds)
        .then((areaIndicators) => {
          res.send(areaIndicators);
          next();
        });
    }
    return anhAreasService.getAreaIndicators(req.params.name)
      .then((areaIndicators) => {
        res.send(areaIndicators);
        next();
      });
  }));

  return router;
};
