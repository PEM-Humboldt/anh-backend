const { Router } = require('restify-router');

/**
 * @apiDefine biomes Biomes
 * Endpoints to get biomes information
 */

module.exports = (errorHandler, biomesService) => {
  const router = new Router();

  /**
   * @apiGroup biomes
   * @api {get} /biomes/:id/geometry get geometry
   * @apiName getBiomeGeometry
   * @apiVersion 1.0.0
   * @apiDescription
   * Get the geometry of a biome.
   *
   * @apiSuccess {Object} result GeoJSON object with the area geometry
   *
   * @apiExample {curl} Example usage:
   *  /biomes/1/geometry
   * @apiUse getBiomeGeometrySE
   */
  router.get('/biomes/:id/geometry', errorHandler((req, res, next) => (
    biomesService.getGeometry(req.params.id)
      .then((geometry) => {
        res.send(geometry);
        next();
      })
  )));

  return router;
};
