module.exports = ({ geoIndicatorsByBlocks }, db) => ({

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
  getValuesByBiome: (name, ids, biomeId = null) => {
    const where = { block_name: name };
    if (biomeId) {
      where.id_biome = biomeId;
    }
    return geoIndicatorsByBlocks.query()
      .where(where)
      .whereIn('id_indicator', ids)
      .select('gid as id', 'id_indicator', 'name_biome', 'id_biome', 'indicator_value', 'value_description', 'year')
      .orderBy([{ column: 'indicator_value', order: 'desc' }, { column: 'year', order: 'desc' }])
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      });
  },

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

  /**
   * Find the geometry for a set of ids
   *
   * @param {Number[]} ids indicator values to get in the geometry
   */
  getGeometriesByIds: (ids) => (
    db.raw(
      `SELECT row_to_json(fc) as collection
      FROM (
        SELECT 'FeatureCollection' as type, array_to_json(array_agg(f)) as features
        FROM(
          SELECT 'Feature' as type,
            row_to_json(properties) as properties,
            ST_AsGeoJSON(geom)::json as geometry
          FROM anh.geo_indicators_by_blocks as gibb1
          INNER JOIN (
            SELECT gibb.gid, gibb.id_indicator, ic.indicator_name, gibb.indicator_value, gibb.value_description
            FROM anh.geo_indicators_by_blocks as gibb
            INNER JOIN anh.indicators_catalog as ic ON ic.id = gibb.id_indicator
          ) as properties ON properties.gid = gibb1.gid
          WHERE properties.gid IN (${ids.map(() => '?').join(',')})
        ) as f
      ) as fc`,
      [...ids],
    )
      .then((geom) => (geom.rows && geom.rows[0] ? geom.rows[0].collection : null))
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),
});
