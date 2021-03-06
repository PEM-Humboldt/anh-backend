module.exports = ({ geoBiomesByBlocks }, db) => ({
  /**
   * List name and code for all sedimentary basins
   */
  listAllBlocksWithName: async () => (
    geoBiomesByBlocks.query()
      .distinct('block_name as name')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Find the geometry of an anh area with the biomes inside it
   *
   * @param {String} name anh area name
   */
  findGeometryWithBiomes: async (name) => (
    db.raw(
      `SELECT row_to_json(fc) as collection
      FROM (
        SELECT 'FeatureCollection' as type, array_to_json(array_agg(f)) as features
        FROM(
          SELECT 'Feature' as type,
            row_to_json(gbbb2) as properties,
            ST_AsGeoJSON(geom)::json as geometry
          FROM anh.geo_biomes_by_blocks as gbbb1
          INNER JOIN (
            SELECT gbbb.gid, gbbb.id_biome, gbbb.name_biome, gbbb.area_ha, gbbb.compensation_factor
            FROM anh.geo_biomes_by_blocks as gbbb
            ORDER BY gbbb.area_ha DESC
          ) as gbbb2 ON gbbb2.gid = gbbb1.gid
          WHERE gbbb1.block_name = ?
        ) as f
      ) as fc`,
      [name],
    )
      .then((biomes) => (biomes.rows && biomes.rows[0] ? biomes.rows[0].collection : null))
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Find all biomes inside an anh area with its corresponding area inside the block
   *
   * @param {String} name anh area name
   */
  findBiomesInfoByBlock: async (name) => (
    geoBiomesByBlocks.query()
      .where({ block_name: name })
      .select('id_biome as id', 'name_biome as name', 'area_ha as area', 'compensation_factor')
      .orderBy('area', 'desc')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),
});
