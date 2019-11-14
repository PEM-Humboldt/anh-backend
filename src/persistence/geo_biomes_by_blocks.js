module.exports = ({ geoBiomesByBlocks }) => ({
  /**
   * List name and code for all sedimentary basins
   */
  listAllBlocksWithName: async () => (
    geoBiomesByBlocks.query()
      .distinct('block_name as name')
  ),
});
