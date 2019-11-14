const { Router } = require('restify-router');

/**
 * @apiDefine sedimentary_basins Sedimentary Basins
 * Endpoints to get sedimentary basins information
 */

module.exports = (errorHandler, sedimentaryBasinsService) => {
  const router = new Router();

  /**
   * @apiGroup sedimentary_basins
   * @api {get} /sedimentary_basins List basic info
   * @apiName listAllSB
   * @apiVersion 1.0.0
   * @apiDescription
   * List all sedimentary basins basic information: code and name.
   *
   * @apiSuccess {Object[]} result
   * @apiSuccess {String} result.code sedimentary basin code
   * @apiSuccess {String} result.name sedimentary basin name
   *
   * @apiExample {curl} Example usage:
   *  /sedimentary_basins
   */
  router.get('/sedimentary_basins', errorHandler((req, res, next) => (
    sedimentaryBasinsService.listAllBasicInfo()
      .then((basins) => {
        res.send(basins);
        next();
      })
  )));

  return router;
};
