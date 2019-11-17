module.exports = (geoSimplifiedBiomes) => ({

  /**
   * Get the geometry of a biome
   *
   * @param {String} id biome id
   */
  getGeometry: async (id) => geoSimplifiedBiomes.findGeometry(id),
});
