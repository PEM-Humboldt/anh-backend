module.exports = (geoSimplifiedBiomes) => ({

  /**
   * Get the geometry of a biome
   *
   * @param {String} id biome id
   */
  getGeometry: async (id) => {
    const geom = await geoSimplifiedBiomes.findGeometry(id);
    if (geom === null) throw new Error('Biome doesn\'t exist or doesn\'t have a geometry');
    return geom;
  },
});
