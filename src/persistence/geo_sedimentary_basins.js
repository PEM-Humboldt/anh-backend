module.exports = ({ geoSedimentaryBasins }) => ({
  /**
   * List name and code for all sedimentary basins
   */
  listAllWithNameCode: async () => (
    geoSedimentaryBasins.query()
      .select('sedimentary_code as code', 'basin as name')
      .catch(() => {
        // TODO: Log error
        throw new Error('Problem querying the database');
      })
  ),
});
