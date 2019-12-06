module.exports = (geoIndicatorsByBlocks) => ({

  /**
   * Get metadata information about a given indicator
   *
   * @param {string} typeId area id
   */
  getMetadata: async (typeId) => ({
    id: typeId,
    name: 'test Indicator name',
    is_geographic: false,
    metadata: 'Explanation?',
  }),

  /**
   * Get the geometry for a given set of values
   *
   * @param {Number[]} indicator values ids to get
   */
  getGeometries: (ids) => geoIndicatorsByBlocks.getGeometriesByIds(ids),
});
