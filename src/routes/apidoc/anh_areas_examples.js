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
      "ordering": null,
      "international": null,
      "license": null,
      "vulnerability": 0.55
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
 * @apiDefine getAreaGeometrySE
 * @apiSuccessExample {json} Success-Example:
  {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            -73.5824875127128,
            7.93669957021445
          ],
          [
            -73.5994894891222,
            7.90869514289547
          ],
          [
            -73.600026889071,
            7.90296194821853
          ],
          [
            -73.5902648403485,
            7.90295068102166
          ],
          [
            -73.5904575216181,
            7.85125570857766
          ],
          [
            -73.6048711291575,
            7.85127215214677
          ],
          [
            -73.6069451650398,
            7.82913620997058
          ],
          [
            -73.6601414614602,
            7.82919222665805
          ],
          [
            -73.6150103256281,
            7.91453698104144
          ],
          [
            -73.5989435835239,
            7.91451886232468
          ],
          [
            -73.5958499406343,
            7.95690008520649
          ],
          [
            -73.5813391165604,
            7.96237641256126
          ],
          [
            -73.5824875127128,
            7.93669957021445
          ]
        ]
      ]
    ]
  }
 */

/**
 * @apiDefine getAreaIndicatorsSE
 * @apiSuccessExample {json} Without ids Success-Example:
  [
    {
      "code": 1,
      "name": "Hectareas de Bosque Natural y Secundaria para cada año por Bioma",
      "topic": "Riesgo para Biodiversidad",
      "ids": [
        {
          "id": 1,
          "name": "Cálculo de área en hectáreas de bosque Natural (N) para cada año por Bioma"
        },
        {
          "id": 2,
          "name": "Cálculo de área en hectáreas de bosque Secundario(S) para cada año por Bioma"
        }
      ],
      "values": [
        {
          "name_biome": "Helobioma Casanare",
          "indicator_value": "21897.30000",
          "value_description": "Natural",
          "year": 2002
        },
        {
          "name_biome": "Helobioma Casanare",
          "indicator_value": "1403.32000",
          "value_description": "Secundaria",
          "year": 2002
        }
      ]
    },
    {
      "code": 2,
      "name": "Areas Protegidas a 5, 15 y 25 km del borde del bloque de exploración",
      "topic": "Riesgo para Biodiversidad",
      "ids": [
        {
          "id": 3,
          "name": "Superficie en áreas protegidas a 5 Km del borde del bloque de exploración"
        },...
      ]...
    }
  ]
 */
