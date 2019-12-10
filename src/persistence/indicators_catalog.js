module.exports = ({ indicatorsCatalog }) => ({

  /**
   * Find the indicators associated to an anh area
   *
   * @param {String} name anh area name
   */
  findIndicatorsByBlock: (name) => (
    indicatorsCatalog.query()
      .innerJoin('anh.geo_indicators_by_blocks as gibb', 'id', 'gibb.id_indicator')
      .where('gibb.block_name', name)
      .whereNot({ code_label: null })
      .distinct('id', 'indicator_name', 'topic', 'code', 'code_label')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Find information for the given indicators
   *
   * @param {Number} ids indicators ids
   */
  findIndicatorsByIds: (ids) => (
    indicatorsCatalog.query()
      .whereIn('id', ids)
      .select('id', 'indicator_name', 'code', 'code_label')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Get the metadata for a given indicator
   *
   * @param {Number} id indicator id
   */
  findMetadata: (id) => (
    indicatorsCatalog.query()
      .where({ id })
      .select('metadata')
      .then((metadata) => (metadata[0] ? metadata[0] : null))
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),
});
