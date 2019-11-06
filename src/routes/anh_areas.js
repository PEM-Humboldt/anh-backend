const { Router } = require('restify-router');

/**
 * @apiDefine anh_areas Anh Areas
 * Endpoints to get anh areas information
 */

module.exports = (errorHandler, anhAreasService) => {
  const router = new Router();

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:id get Area Info
   * @apiName getAreaInfo
   * @apiVersion 1.0.0
   * @apiDescription
   * Get an area information
   *
   * @apiParam {String} id area id
   *
   * @apiSuccess {Object} result
   * @apiSuccess {Number} result.area total area in hectares
   * @apiSuccess {String} result.description description about the area
   * @apiSuccess {Object[]} result.categories presence or absence of special areas inside the area
   * @apiSuccess {Boolean} result.protected_area if the given area has protected areas
   * @apiSuccess {Boolean} result.forest_reserves if the given area has forest reserves
   * @apiSuccess {Boolean} result.strategic_ecosystem if the given area has strategic ecosystem
   * @apiSuccess {Boolean} result.ethnic_territories if the given area has ethnic territories
   * @apiSuccess {Boolean} result.peasant_reserves if the given area has peasant reserves
   * @apiSuccess {Boolean} result.projects if the given area has projects
   * @apiSuccess {Boolean} result.ordering if the given area has ordering
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
   * @api {get} /anh_areas/:id/geometry get Area geometry
   * @apiName getAreaGeometry
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the geometry associated to an area
   *
   * @apiParam {String} id area id
   *
   * @apiSuccess {Object} result GeoJSON object with the area geometry
   *
   * @apiExample {curl} Example usage:
   *  /anh_areas/LLA 96/geometry
   */
  router.get('/anh_areas/:id/geometry', errorHandler((req, res, next) => (
    anhAreasService.getAreaGeometry(req.params.id)
      .then((areaGeometry) => {
        res.send(areaGeometry);
        next();
      })
  )));

  /**
   * @apiGroup anh_areas
   * @api {get} /anh_areas/:id/indicators get Area associated indicators
   * @apiName getAreaIndicators
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the list of indicators associated to an area
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

  return router;
};
