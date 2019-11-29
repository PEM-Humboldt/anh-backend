module.exports = ({ geoIndicatorsByBlocks }) => ({

  /**
   * Find the biomes inside a block that have indicators
   *
   * @param {String} name anh area name
   */
  findBiomesWithIndicatorsByBlock: (name) => (
    geoIndicatorsByBlocks.query()
      .where({ block_name: name })
      .whereNot({ id_biome: null })
      .distinct('id_biome as id', 'name_biome as name')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Get the biome with the largest value inside the block in the last year for the given indicators
   *
   * @param {String} name block name
   * @param {Number[]} ids indicators id
   */
  getLargestBiomeInLastYear: (name, ids) => (
    geoIndicatorsByBlocks.query()
      .where({ block_name: name })
      .whereIn('id_indicator', ids)
      .groupBy('id_biome', 'year')
      .sum('indicator_value as area')
      .orderBy([{ column: 'area', order: 'desc' }, { column: 'year', order: 'desc' }])
      .select('id_biome')
      .limit(1)
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Find the indicators values corresponding to the given block, indicators and biome
   *
   * @param {String} name block name
   * @param {Number[]} ids indicators ids
   * @param {Number} biomeId biome id
   */
  getValuesByBiome: (name, ids, biomeId) => (
    geoIndicatorsByBlocks.query()
      .where({ block_name: name, id_biome: biomeId })
      .whereIn('id_indicator', ids)
      .select('name_biome', 'indicator_value', 'value_description', 'year')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Find the value - description for the given indicators and block name
   *
   * @param {String} name block name
   * @param {Number[]} ids indicator ids
   */
  getValueDescription: (name, ids) => (
    geoIndicatorsByBlocks.query()
      .where({ block_name: name })
      .whereIn('id_indicator', ids)
      .select('gid as id', 'id_indicator', 'indicator_value', 'value_description')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),
});
