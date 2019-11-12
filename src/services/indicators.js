module.exports = () => ({

  /**
   * Get metadata information about a given indicator
   *
   * @param {string} typeId area id
   */
  getMetadata: async (typeId) => ({
    id: typeId,
    name: 'test Indicator name',
    is_geographic: false,
    metadata: 'Explanation?',
  }),
});
