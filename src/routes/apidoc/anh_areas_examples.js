/**
 * @apiDefine listAllAnhAreasSE
 * @apiSuccessExample {json} Success-Example:
  [
    { "name": "CAG 7" },
    { "name": "CAG 8" },
    { "name": "CAT 4" },
    { "name": "COR 9" },
    { "name": "LLA 100" },
    { "name": "LLA 101" },
    { "name": "LLA 103" }
  ]
 */

/**
 * @apiDefine getAreaGeometryWithBiomesSE
 * @apiSuccessExample {json} Success-Example:
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "gid": 279,
          "id_biome": 220,
          "name_biome": "Zonobioma Humedo Tropical Magdalena medio y depresión momposina",
          "area_ha": 491.23,
          "compensation_factor": 7.75
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  -73.5921397792383,
                  7.92080105407325
                ],
                [
                  -73.5986157392954,
                  7.9190101497219
                ],
                [
                  -73.5970426151243,
                  7.94056109418816
                ],
                [
                  -73.593622647,
                  7.94255520000011
                ],
                [
                  -73.591327162,
                  7.94613938000001
                ],
                [
                  -73.587836428,
                  7.94855857800007
                ],
                [
                  -73.5843793909999,
                  7.94431905300003
                ],
                [
                  -73.5821291529051,
                  7.94471209121262
                ],
                [
                  -73.5824875127128,
                  7.93669957021445
                ],
                [
                  -73.5921397792383,
                  7.92080105407325
                ]
              ]
            ]
          ]
        }
      }
    ]
  }
 */

/**
 * @apiDefine getAreaInfoSE
 * @apiSuccessExample {json} Success-Example:
  {
    "name": "LLA 92",
    "area": "111329.14364",
    "sedimentary_code": "LLA",
    "description": "PROCESO PERMANENTE DE ASIGNACION DE AREAS 2019",
    "categories": {
      "protected_area": true,
      "forest_reserves": null,
      "strategic_ecosystem": null,
      "ethnic_territories": null,
      "peasant_reserves": null,
      "projects": null,
      "ordering": null
    }
  }
 */

/**
 * @apiDefine getAreaBiomesSE
 * @apiSuccessExample {json} Success-Example:
  [
    {
      "id": 328,
      "name": "Hidrobioma Casanare",
      "area": "89.66000",
      "percentage": 0.003207134172744532
    },
    {
      "id": 250,
      "name": "Helobioma Casanare",
      "area": "27866.81000",
      "percentage": 0.9967945420073507
    }
  ]
 */

/**
 * @apiDefine listAreaIndicatorsBiomesSE
 * @apiSuccessExample {json} Success-Example:
  [
    {
      "id": 250,
      "name": "Helobioma Casanare"
    },
    {
      "id": 328,
      "name": "Hidrobioma Casanare"
    }
  ]
 */
