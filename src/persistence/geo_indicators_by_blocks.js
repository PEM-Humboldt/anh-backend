module.exports = ({ geoIndicatorsByBlocks }) => ({

  /**
   * Find the biomes inside a block that have indicators
   *
   * @param {String} name anh area name
   */
  findBiomesWithIndicatorsByBlock: async (name) => (
    geoIndicatorsByBlocks.query()
      .where({ block_name: name })
      .whereNot({ id_biome: null })
      .distinct('id_biome as id', 'name_biome as name')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),
});
