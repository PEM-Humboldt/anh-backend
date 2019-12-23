module.exports = (geoBiomesByBlocks, geoBlocks, geoIndicatorsByBlocks, indicatorsCatalog) => {
  /**
   * I did not find a way to group these values, the grouping in the database should be handled
   * differently since it's not being used for anything else
   *
   * Given an indicator id return the group it belongs.
   *
   * @param {Number} id indicator id
  */
  const indicatorGroup = (id) => {
    if ([3, 6, 9].includes(id)) return '5km';
    if ([4, 7, 10].includes(id)) return '15km';
    if ([5, 8, 11].includes(id)) return '25km';
    return null;
  };

  /**
   * Get values for a set of identifiers depending on the code passed. Codes:
   * 1 - Get id, id_indicator, name_biome, indicator_value, value_description and year grouped by
   * biomes
   * 2 - Get id, id_indicator, indicator_value, value_description grouped according to
   * indicatorGroup function. If new indicators of this form are inserted in the database,
   * it's necessary to modify that function
   * 3 - Get id, id_indicator, indicator_value, value_description grouped by indicator
   * 4 - Get id, id_indicator, indicator_value, value_description
   *
   * @param {Number} code identifier to filter attributes to bring
   * @param {String} blockName anh area name
   * @param {Number[]} indicatorIds Indicators ids to select
   */
  const getFullValues = async (code, blockName, indicatorIds) => {
    if (code === 1) {
      const values = await geoIndicatorsByBlocks.getValuesByBiome(blockName, indicatorIds);
      const result = { biomes: [], values: {} };
      values.forEach((item) => {
        if (!result.values[item.id_biome]) {
          result.values[item.id_biome] = [];
          result.biomes.push({ id: item.id_biome, name: item.name_biome });
        }
        result.values[item.id_biome].push(item);
      });
      return result;
    } if (code === 2) {
      let hasRequired = false;
      const values = await geoIndicatorsByBlocks.getValueDescription(blockName, indicatorIds);
      const result = {};
      values.forEach((item) => {
        if (!hasRequired
          && (item.id_indicator === 3 || item.id_indicator === 4 || item.id_indicator === 5)) {
          hasRequired = true;
        }
        if (!result[indicatorGroup(item.id_indicator)]) {
          result[indicatorGroup(item.id_indicator)] = [];
        }
        result[indicatorGroup(item.id_indicator)].push(item);
      });
      if (!hasRequired) return { values: [] };
      return { values: result };
    } if (code === 3) {
      const values = await geoIndicatorsByBlocks.getValueDescription(blockName, indicatorIds);
      const groups = {};
      values.forEach((item) => {
        if (!groups[item.id_indicator]) {
          groups[item.id_indicator] = [];
        }
        groups[item.id_indicator].push(item);
      });
      return { values: groups };
    } if (code === 4) {
      return { values: await geoIndicatorsByBlocks.getValueDescription(blockName, indicatorIds) };
    }
    return { values: [] };
  };

  /**
   * Get values for a set of identifiers depending on the code passed. Codes:
   * 1 - Get name_biome, indicator_value, value_description and year for the largest biome in the
   * block (in the last year)
   * 2 - Same as getFullValues
   * 3 - Same as getFullValues
   * 4 - Same as getFullValues
   *
   * @param {Number} code identifier to filter attributes to bring
   * @param {String} blockName anh area name
   * @param {Number[]} indicatorIds Indicators ids to select
   */
  const getDashValues = async (code, blockName, indicatorIds) => {
    if (code === 1) {
      const biome = await geoIndicatorsByBlocks.getLargestBiomeInLastYear(blockName, indicatorIds);
      const biomeId = biome[0].id_biome;
      return {
        values: await geoIndicatorsByBlocks.getValuesByBiome(blockName, indicatorIds, biomeId),
      };
    } if (code === 2 || code === 3 || code === 4) {
      return getFullValues(code, blockName, indicatorIds);
    }
    return [];
  };

  /**
   * Depending on the code the group of indicators has a size
   *
   * @param {Number} code
   */
  const getSize = (code) => {
    switch (code) {
      case 1: return 2;
      case 2: return 3;
      case 3: return 2;
      case 4: return 1;
      default: return 1;
    }
  };

  return {
    /**
     * Get all anh areas basic information: name
     */
    listAllBasicInfo: async () => geoBiomesByBlocks.listAllBlocksWithName(),

    /**
     * Get information about a given area
     *
     * @param {String} name anh area name
     */
    getAreaInfo: async (name) => {
      const info = await geoBlocks.findAreaInfo(name);
      if (info === null) throw new Error('Area doesn\'t exist');
      return info;
    },

    /**
     * Get the geometry of an area
     *
     * @param {String} name anh area name
     */
    getAreaGeometry: async (name) => {
      const geom = await geoBlocks.findGeometry(name);
      if (geom === null) throw new Error('Area doesn\'t exist or doesn\'t have a geometry');
      return geom;
    },

    /**
     * Get the geometry of an area divided by biomes
     *
     * @param {String} name anh area name
     */
    getAreaGeometryWithBiomes: async (name) => {
      const geom = await geoBiomesByBlocks.findGeometryWithBiomes(name);
      if (geom === null) throw new Error('Area doesn\'t exist or doesn\'t have a geometry');
      return geom;
    },

    /**
     * Get the list of biomes information in the given area
     *
     * @param {String} name anh area name
     */
    getAreaBiomes: async (name) => {
      const biomes = await geoBiomesByBlocks.findBiomesInfoByBlock(name);
      const totalArea = await geoBlocks.findArea(name);
      if (totalArea === null) throw new Error('Area doesn\'t exist');

      return biomes.map((biome) => ({
        ...biome,
        percentage: parseFloat(biome.area) / totalArea.area,
      }));
    },

    /**
     * Get the list of indicators associated to a given area.
     * Some of them are simplified for this list.
     *
     * @param {String} name area name
     */
    getAreaIndicators: async (name) => {
      const catalog = await indicatorsCatalog.findIndicatorsByBlock(name);

      const groups = {};
      const topics = new Set();
      catalog.forEach((elem) => {
        if (!groups[elem.code_label]) {
          groups[elem.code_label] = {
            code: elem.code,
            size: getSize(elem.code),
            name: elem.code_label,
            topics: elem.topic.split(',').map((topic) => topic.trim()),
            ids: [],
          };
          groups[elem.code_label].topics.forEach((topic) => topics.add(topic));
        }
        groups[elem.code_label].ids.push({ id: elem.id, name: elem.indicator_name });
      });

      const indicators = await Promise.all(
        Object.values(groups).map(async (obj) => {
          const indicatorIds = obj.ids.map((item) => item.id);
          const values = await getDashValues(obj.code, name, indicatorIds);
          if (values.values.length === 0) return null;
          return { ...obj, ...values };
        }),
      );
      indicators.splice(indicators.findIndex((i) => i === null), 1);
      return { topics: Array.from(topics), indicators };
    },

    /**
     * Get indicators values for the given indicators ids
     * Note that only the first indicator id will be used to calculate the type of response,
     * that is the code will be get from that id
     *
     * @param {String} name anh area name
     * @param {Number[]} indicatorsIds indictors ids
     */
    getAreaIndicatorsByIds: async (name, indicatorsIds) => {
      if (indicatorsIds.includes(NaN)) {
        throw new Error('Not all indicator ids are numbers');
      }

      const catalog = await indicatorsCatalog.findIndicatorsByIds(indicatorsIds);
      if (catalog.length <= 0) throw new Error('Indicators don\'t exist');

      const indicators = catalog.map((elem) => ({
        id: elem.id,
        name: elem.indicator_name,
      }));

      const values = await getFullValues(catalog[0].code, name, indicatorsIds);
      return {
        code: catalog[0].code,
        group_name: catalog[0].code_label,
        indicators,
        ...values,
      };
    },
  };
};
