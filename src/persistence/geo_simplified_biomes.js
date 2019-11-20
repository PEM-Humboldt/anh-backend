module.exports = ({ geoSimplifiedBiomes }, db) => ({

  /**
   * Get the geometry for a given biome
   *
   * @param {Number} id biome id
   */
  findGeometry: async (id) => (
    geoSimplifiedBiomes.query()
      .where({ id_biome: id })
      .select(db.raw('ST_AsGeoJSON(geom)::json as geometry'))
      .then((geometry) => (geometry[0] ? geometry[0].geometry : null))
      .catch(() => {
        // TODO: Log error
        throw new Error('Problem querying the database');
      })
  ),
});
