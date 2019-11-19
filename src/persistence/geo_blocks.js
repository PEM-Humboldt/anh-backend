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
          'peasant_reserves', has_farmer_reserve, 'projects', has_infrastructure, 'ordering', has_governance
        ) as categories`))
      .then((area) => area[0])
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
      .then((area) => area[0])
  ),
});
