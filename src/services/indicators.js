module.exports = (geoIndicatorsByBlocks, indicatorsCatalog) => ({

  /**
   * Get metadata information about a given indicator
   *
   * @param {string} id indicator id
   */
  getMetadata: (id) => indicatorsCatalog.findMetadata(id),

  /**
   * Get the geometry for a given set of values
   *
   * @param {Number[]} indicator values ids to get
   */
  getGeometries: (ids) => geoIndicatorsByBlocks.getGeometriesByIds(ids),
});
