module.exports = ({ geoSedimentaryBasins }) => ({
  /**
   * List name and code for all sedimentary basins
   */
  listAllWithNameCode: async () => (
    geoSedimentaryBasins.query()
      .select('sedimentary_code as code', 'basin as name')
      .catch((error) => {
        const customErr = { origin: error, userMsg: 'Problem querying the database' };
        throw customErr;
      })
  ),
});
