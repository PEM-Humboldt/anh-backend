/**
 * @apiDefine getAreaIndicatorsResponse
 * @apiSuccess (without ids) {Object} result Indicators response object
 * @apiSuccess (without ids) {String[]} result.topics list of topics to classify indicators
 * @apiSuccess (without ids) {Object[]} result.indicators information
 * @apiSuccess (without ids) {Number} result.indicators.code group code
 * @apiSuccess (without ids) {Number} result.indicators.size
 * @apiSuccess (without ids) {String} result.indicators.name group name
 * @apiSuccess (without ids) {String[]} result.indicators.topics this group topics
 * @apiSuccess (without ids) {Object[]} result.indicators.ids list of indicators included in this
 * group
 * @apiSuccess (without ids) {Number} result.indicators.ids.id indicator id
 * @apiSuccess (without ids) {String} result.indicators.ids.name indicator name
 * @apiSuccess (without ids - code 1) {Object[]} result.indicators.values list of values for all
 * indicators included in the group
 * @apiSuccess (without ids - code 1) {Number} result.indicators.values.id indicator value id
 * @apiSuccess (without ids - code 1) {Number} result.indicators.values.id_indicator indicator id
 * @apiSuccess (without ids - code 1) {String} result.indicators.values.name_biome biome name
 * @apiSuccess (without ids - code 1) {Number} result.indicators.values.id_biome biome id
 * @apiSuccess (without ids - code 1) {Number} result.indicators.values.indicator_value indicator
 * value
 * @apiSuccess (without ids - code 1) {String} result.indicators.values.value_description
 * associated description for the value
 * @apiSuccess (without ids - code 1) {Number} result.indicators.values.year year
 * associated to the value
 *
 * @apiSuccess (without ids - codes 2, 3) {Object} result.indicators.values list of values for all
 * indicators included in the group grouped in some way
 * @apiSuccess (without ids - codes 2, 3) {Object[]} result.indicators.values._group_ list of
 * indicators for a group
 * @apiSuccess (without ids - codes 2, 3) {Number} result.indicators.values._group_.id indicator
 * value id
 * @apiSuccess (without ids - codes 2, 3) {Number} result.indicators.values._group_.id_indicator
 * indicator id
 * @apiSuccess (without ids - codes 2, 3) {Number} result.indicators.values._group_.indicator_value
 * indicator value
 * @apiSuccess (without ids - codes 2, 3) {String} result.indicators.values._group_.value_description
 * associated description for the value
 *
 * @apiSuccess (without ids - codes 4) {Object[]} result.indicators.values list of values for all
 * indicators included in the group
 * @apiSuccess (without ids - codes 4) {Number} result.indicators.values.id indicator value id
 * @apiSuccess (without ids - codes 4) {Number} result.indicators.values.id_indicator indicator id
 * @apiSuccess (without ids - codes 4) {Number} result.indicators.values.indicator_value indicator
 * value
 * @apiSuccess (without ids - codes 4) {String} result.indicators.values.value_description
 * associated description for the value
 *
 * @apiSuccess (with ids - code 1) {Object} result Indicators response object
 * @apiSuccess (with ids - code 1) {Object[]} result.indicators indicators information
 * @apiSuccess (with ids - code 1) {Number} result.indicators.id indicator id
 * @apiSuccess (with ids - code 1) {String} result.indicators.name indicator name
 * @apiSuccess (with ids - code 1) {Object[]} result.biomes biomes information
 * @apiSuccess (with ids - code 1) {Number} result.biomes.id biome id
 * @apiSuccess (with ids - code 1) {String} result.biomes.name biome name
 * @apiSuccess (with ids - code 1) {Object} result.values indicators values grouped
 * @apiSuccess (with ids - code 1) {Object[]} result.values._group_ indicator for the group
 * @apiSuccess (with ids - code 1) {Number} result.values._group_.id indicator value id
 * @apiSuccess (with ids - code 1) {Number} result.values._group_.id_indicator indicator id
 * @apiSuccess (with ids - code 1) {String} result.values._group_.name_biome biome name
 * @apiSuccess (with ids - code 1) {Number} result.values._group_.id_biome biome id
 * @apiSuccess (with ids - code 1) {Number} result.values._group_.indicator_value indicator value
 * @apiSuccess (with ids - code 1) {String} result.values._group_.value_description
 * associated description for the value
 * @apiSuccess (with ids - code 1) {Number} result.values._group_.year year associated to the value
 *
 * @apiSuccess (with ids - codes 2, 3, 4) {Object} result Indicators response object
 * @apiSuccess (with ids - codes 2, 3, 4) {Object[]} result.indicators indicators information
 * @apiSuccess (with ids - codes 2, 3, 4) {Number} result.indicators.id indicator id
 * @apiSuccess (with ids - codes 2, 3, 4) {String} result.indicators.name indicator name
 * @apiSuccess (with ids - codes 2, 3, 4) {Object[]} result.values Same structure and values as the
 * request without ids
*/

/**
 * @apiDefine withIdsGroup ( )
 * The response is the same as the "valueS" attribute in the responses without ids
 */
