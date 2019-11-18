module.exports = ({ geoBiomesByBlocks }, db) => ({
  /**
   * List name and code for all sedimentary basins
   */
  listAllBlocksWithName: async () => (
    geoBiomesByBlocks.query()
      .distinct('block_name as name')
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
          ) as gbbb2 ON gbbb2.gid = gbbb1.gid
          WHERE gbbb1.block_name = ?
        ) as f
      ) as fc`,
      [name],
    )
      .then((biomes) => biomes.rows[0].collection)
  ),
});
