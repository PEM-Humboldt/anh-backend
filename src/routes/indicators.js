const { Router } = require('restify-router');

/**
 * @apiDefine indicators Indicators
 * Endpoints to get indicators information
 */

module.exports = (errorHandler, indicatorsService) => {
  const router = new Router();

  /**
   * @apiGroup indicators
   * @api {get} /indicators/:id/metadata get metadata
   * @apiName getIndicatorMetadata
   * @apiVersion 1.0.0
   * @apiDescription
   * Get metadata information about a type of indicator.
   *
   * @apiParam {String} id indicator type id
   *
   * @apiSuccess {Object} result
   *
   * @apiExample {curl} Example usage:
   *  /indicators/1/metadata
   * @apiUse getIndicatorMetadataSE
   */
  router.get('/indicators/:id/metadata', errorHandler((req, res, next) => (
    indicatorsService.getMetadata(req.params.id)
      .then((metadata) => {
        res.send(metadata);
        next();
      })
  )));

  /**
   * @apiGroup indicators
   * @api {get} /indicators/geometry get indicators geometries
   * @apiName getIndicatorsGeometries
   * @apiVersion 1.0.0
   * @apiDescription
   * Get a GeoJson object with the geometries for a given set of indicators
   *
   * @apiParam {String} type_id indicator type id
   * @apiParam {Number[]} ids query param to indicate which indicators get in the request
   *
   * @apiSuccess {Object} result GeoJson object with geometries
   *
   * @apiExample {curl} Example usage:
   *  /indicators/geometry?ids=3289&ids=3501
   */
  router.get('/indicators/geometry', errorHandler((req, res, next) => {
    if (!req.params.ids) {
      throw new Error('Parameter ids is required');
    }
    let ids = [];
    if (typeof req.params.ids === 'string') {
      ids = [parseInt(req.params.ids, 10)];
    } else {
      ids = req.params.ids.map((id) => parseInt(id, 10));
    }
    return indicatorsService.getGeometries(ids)
      .then((geometries) => {
        res.send(geometries);
        next();
      });
  }));

  return router;
};
