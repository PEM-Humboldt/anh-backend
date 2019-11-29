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
});
