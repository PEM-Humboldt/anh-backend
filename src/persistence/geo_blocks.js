module.exports = ({ geoBlocks }, db) => ({
  /**
   * Find the information associated to an area
   *
   * @param {String} name anh area name
   */
  findAreaInfo: async (name) => (
    geoBlocks.query()
      .where({ block_name: name })
      .select('block_name as name', 'area_ha as area', 'sedimentary_code', 'territory_description as description',
        db.raw(`json_build_object(
          'protected_areas', has_protected_area, 'forest_reserves', has_forestal_reserve,
          'strategic_ecosystems', has_strategic_ecosystem, 'ethnic_territories', has_ethnic_territory,
          'peasant_reserves', has_farmer_reserve, 'projects', has_infrastructure, 'ordering', has_governance,
          'international', has_international_degree, 'license', has_licences, 'vulnerability', vulnerability_index
        ) as categories`))
      .then((area) => (area[0] ? area[0] : null))
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Find the total area for an anh area
   *
   * @param {String} name anh area name
   */
  findArea: async (name) => (
    geoBlocks.query()
      .where({ block_name: name })
      .select('area_ha as area')
      .then((area) => (area[0] ? area[0] : null))
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),

  /**
   * Find the geometry of an area
   *
   * @param {String} name anh area name
   */
  findGeometry: (name) => (
    geoBlocks.query()
      .where({ block_name: name })
      .select(db.raw('ST_AsGeoJSON(geom)::json as geometry'))
      .then((geometry) => (geometry[0] ? geometry[0].geometry : null))
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),
});
