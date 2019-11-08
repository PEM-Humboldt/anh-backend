module.exports = (geoSedimentaryBasinsPersistence) => ({

  /**
   * Get all sedimentary basins basic information: code and name
   */
  listAllBasicInfo: async () => geoSedimentaryBasinsPersistence.listAllWithNameCode(),

});
