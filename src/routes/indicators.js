const { Router } = require('restify-router');

/**
 * @apiDefine indicators Indicators
 * Endpoints to get indicators information
 */

module.exports = (errorHandler, indicatorsService) => {
  const router = new Router();

  /**
   * @apiGroup indicators
   * @api {get} /indicators/:type_id/metadata get metadata
   * @apiName getIndicatorMetadata
   * @apiVersion 1.0.0
   * @apiDescription
   * Get metadata information about a type of indicator.
   *
   * @apiParam {String} type_id indicator type id
   *
   * @apiSuccess {Object} result
   *
   * @apiExample {curl} Example usage:
   *  /indicators/:type_id/metadata
   */
  router.get('/indicators/:type_id/metadata', errorHandler((req, res, next) => (
    indicatorsService.getMetadata(req.params.type_id)
      .then((metadata) => {
        res.send(metadata);
        next();
      })
  )));

  return router;
};
