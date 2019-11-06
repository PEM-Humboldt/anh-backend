module.exports = () => ({
  /**
   * Get information about a given area
   *
   * @param {string} id area id
   */
  getAreaInfo: async (id) => ({
    id,
    area: 101096,
    description: 'La información espacial que se muestra en la figura corresponde a la identificación de condiciones sociales, culturales, económicas y biofísicas, algunas de las cuales son determinantes ambientales del ordenamiento territorial y pueden generar restricciones al desarrollo de las actividades de exploración y explotación de hidrocarburos. Este análisis hace parte del procedimiento que la ANH ha establecido para la coordinación y concurrencia con las entidades territoriales y demás autoridades y entidades con presencia en el territorio, con el fin de posibilitar la definición y determinación de nuevas áreas de interés de hidrocarburos.',
    categories: {
      protected_area: true,
      forest_reserves: false,
      strategic_ecosystem: false,
      ethnic_territories: false,
      peasant_reserves: false,
      projects: false,
      ordering: true,
    },
  }),
});
