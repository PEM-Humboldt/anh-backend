/**
 * Wrapper to catch errors from every endpoint. When an error occurs in a lower layer,
 * depending on the error it should be caught and organized to be thrown again and then log it here,
 * or it's just handled here.
 *
 * In order to organize custom errors (i.e mask lower layer errors), catch it in the corresponding
 * place and throw a new object with the keys:
 * - 'origin' containing the original error object
 * - 'userMsg' or 'message' with the custom message to show.
 * If non of 'userMsg' or 'message' exist the default message 'There was an internal error' is sent
 *
 * @param {Object} logger logger instance.
 * @param {Function} callback the function to execute.
 */
module.exports = (logger) => (callback) => (
  async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (err) {
      let error = err;
      if ('origin' in err) error = err.origin;
      const code = typeof error.code === 'number' ? error.code : 500;
      logger.error(error.stack || error.Error || error.message || error);
      res.send(code, {
        code,
        message: err.message || err.userMsg || 'There was an internal error',
      });
    }
  }
);
