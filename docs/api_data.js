define({ "api": [
  {
    "group": "anh_areas",
    "type": "get",
    "url": "/anh_areas/:name/biomes",
    "title": "get biomes area",
    "name": "getAreaBiomes",
    "version": "1.0.0",
    "description": "<p>Get the biomes area and percentage inside an anh area</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>area name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>biomes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.area",
            "description": "<p>biome area inside the area</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.percentage",
            "description": "<p>biome area percentage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>biome name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "[\n  {\n    \"id\": 328,\n    \"name\": \"Hidrobioma Casanare\",\n    \"area\": \"89.66000\",\n    \"percentage\": 0.003207134172744532\n  },\n  {\n    \"id\": 250,\n    \"name\": \"Helobioma Casanare\",\n    \"area\": \"27866.81000\",\n    \"percentage\": 0.9967945420073507\n  }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/anh_areas/LLA 96/biomes",
        "type": "curl"
      }
    ],
    "filename": "src/routes/anh_areas.js",
    "groupTitle": "Anh Areas",
    "groupDescription": "<p>Endpoints to get anh areas information</p>"
  },
  {
    "group": "anh_areas",
    "type": "get",
    "url": "anh_areas/:name/geometry",
    "title": "get geometry",
    "name": "getAreaGeometry",
    "version": "1.0.0",
    "description": "<p>Get an anh area geometry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>anh area name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>GeoJSON object with the area geometry</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n  \"type\": \"MultiPolygon\",\n  \"coordinates\": [\n    [\n      [\n        [\n          -73.5824875127128,\n          7.93669957021445\n        ],\n        [\n          -73.5994894891222,\n          7.90869514289547\n        ],\n        [\n          -73.600026889071,\n          7.90296194821853\n        ],\n        [\n          -73.5902648403485,\n          7.90295068102166\n        ],\n        [\n          -73.5904575216181,\n          7.85125570857766\n        ],\n        [\n          -73.6048711291575,\n          7.85127215214677\n        ],\n        [\n          -73.6069451650398,\n          7.82913620997058\n        ],\n        [\n          -73.6601414614602,\n          7.82919222665805\n        ],\n        [\n          -73.6150103256281,\n          7.91453698104144\n        ],\n        [\n          -73.5989435835239,\n          7.91451886232468\n        ],\n        [\n          -73.5958499406343,\n          7.95690008520649\n        ],\n        [\n          -73.5813391165604,\n          7.96237641256126\n        ],\n        [\n          -73.5824875127128,\n          7.93669957021445\n        ]\n      ]\n    ]\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/anh_areas/LLA 96/geometry",
        "type": "curl"
      }
    ],
    "filename": "src/routes/anh_areas.js",
    "groupTitle": "Anh Areas",
    "groupDescription": "<p>Endpoints to get anh areas information</p>"
  },
  {
    "group": "anh_areas",
    "type": "get",
    "url": "/anh_areas/:name/biomes/geometry",
    "title": "get geometry with biomes",
    "name": "getAreaGeometryWithBiomes",
    "version": "1.0.0",
    "description": "<p>Get an anh area geometry divided by biomes</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>anh area name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>GeoJSON object with the area geometry</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n  \"type\": \"FeatureCollection\",\n  \"features\": [\n    {\n      \"type\": \"Feature\",\n      \"properties\": {\n        \"gid\": 279,\n        \"id_biome\": 220,\n        \"name_biome\": \"Zonobioma Humedo Tropical Magdalena medio y depresión momposina\",\n        \"area_ha\": 491.23,\n        \"compensation_factor\": 7.75\n      },\n      \"geometry\": {\n        \"type\": \"MultiPolygon\",\n        \"coordinates\": [\n          [\n            [\n              [\n                -73.5921397792383,\n                7.92080105407325\n              ],\n              [\n                -73.5986157392954,\n                7.9190101497219\n              ],\n              [\n                -73.5970426151243,\n                7.94056109418816\n              ],\n              [\n                -73.593622647,\n                7.94255520000011\n              ],\n              [\n                -73.591327162,\n                7.94613938000001\n              ],\n              [\n                -73.587836428,\n                7.94855857800007\n              ],\n              [\n                -73.5843793909999,\n                7.94431905300003\n              ],\n              [\n                -73.5821291529051,\n                7.94471209121262\n              ],\n              [\n                -73.5824875127128,\n                7.93669957021445\n              ],\n              [\n                -73.5921397792383,\n                7.92080105407325\n              ]\n            ]\n          ]\n        ]\n      }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/anh_areas/LLA 96/biomes/geometry",
        "type": "curl"
      }
    ],
    "filename": "src/routes/anh_areas.js",
    "groupTitle": "Anh Areas",
    "groupDescription": "<p>Endpoints to get anh areas information</p>"
  },
  {
    "group": "anh_areas",
    "type": "get",
    "url": "/anh_areas/:name/indicators",
    "title": "list indicators",
    "name": "getAreaIndicators",
    "version": "1.0.0",
    "description": "<p>Get the list of indicators information associated to an area. When param &quot;ids&quot; is passed and those ids have code 1 the list of biomes is sorted descending</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>area name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "ids",
            "description": "<p>query param to indicate which indicators get in the request</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/anh_areas/LLA 96/indicators\n/anh_areas/LLA 96/indicators?ids=3289&ids=3501",
        "type": "curl"
      }
    ],
    "filename": "src/routes/anh_areas.js",
    "groupTitle": "Anh Areas",
    "groupDescription": "<p>Endpoints to get anh areas information</p>",
    "success": {
      "fields": {
        "without ids": [
          {
            "group": "without ids",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Indicators response object</p>"
          },
          {
            "group": "without ids",
            "type": "String[]",
            "optional": false,
            "field": "result.topics",
            "description": "<p>list of topics to classify indicators</p>"
          },
          {
            "group": "without ids",
            "type": "Object[]",
            "optional": false,
            "field": "result.indicators",
            "description": "<p>information</p>"
          },
          {
            "group": "without ids",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.code",
            "description": "<p>group code</p>"
          },
          {
            "group": "without ids",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.size",
            "description": ""
          },
          {
            "group": "without ids",
            "type": "String",
            "optional": false,
            "field": "result.indicators.name",
            "description": "<p>group name</p>"
          },
          {
            "group": "without ids",
            "type": "String[]",
            "optional": false,
            "field": "result.indicators.topics",
            "description": "<p>this group topics</p>"
          },
          {
            "group": "without ids",
            "type": "Object[]",
            "optional": false,
            "field": "result.indicators.ids",
            "description": "<p>list of indicators included in this group</p>"
          },
          {
            "group": "without ids",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.ids.id",
            "description": "<p>indicator id</p>"
          },
          {
            "group": "without ids",
            "type": "String",
            "optional": false,
            "field": "result.indicators.ids.name",
            "description": "<p>indicator name</p>"
          }
        ],
        "without ids - code 1": [
          {
            "group": "without ids - code 1",
            "type": "Object[]",
            "optional": false,
            "field": "result.indicators.values",
            "description": "<p>list of values for all indicators included in the group</p>"
          },
          {
            "group": "without ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.id",
            "description": "<p>indicator value id</p>"
          },
          {
            "group": "without ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.id_indicator",
            "description": "<p>indicator id</p>"
          },
          {
            "group": "without ids - code 1",
            "type": "String",
            "optional": false,
            "field": "result.indicators.values.name_biome",
            "description": "<p>biome name</p>"
          },
          {
            "group": "without ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.id_biome",
            "description": "<p>biome id</p>"
          },
          {
            "group": "without ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.indicator_value",
            "description": "<p>indicator value</p>"
          },
          {
            "group": "without ids - code 1",
            "type": "String",
            "optional": false,
            "field": "result.indicators.values.value_description",
            "description": "<p>associated description for the value</p>"
          },
          {
            "group": "without ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.year",
            "description": "<p>year associated to the value</p>"
          }
        ],
        "without ids - codes 2, 3": [
          {
            "group": "without ids - codes 2, 3",
            "type": "Object",
            "optional": false,
            "field": "result.indicators.values",
            "description": "<p>list of values for all indicators included in the group grouped in some way</p>"
          },
          {
            "group": "without ids - codes 2, 3",
            "type": "Object[]",
            "optional": false,
            "field": "result.indicators.values._group_",
            "description": "<p>list of indicators for a group</p>"
          },
          {
            "group": "without ids - codes 2, 3",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values._group_.id",
            "description": "<p>indicator value id</p>"
          },
          {
            "group": "without ids - codes 2, 3",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values._group_.id_indicator",
            "description": "<p>indicator id</p>"
          },
          {
            "group": "without ids - codes 2, 3",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values._group_.indicator_value",
            "description": "<p>indicator value</p>"
          },
          {
            "group": "without ids - codes 2, 3",
            "type": "String",
            "optional": false,
            "field": "result.indicators.values._group_.value_description",
            "description": "<p>associated description for the value</p>"
          }
        ],
        "without ids - codes 4": [
          {
            "group": "without ids - codes 4",
            "type": "Object[]",
            "optional": false,
            "field": "result.indicators.values",
            "description": "<p>list of values for all indicators included in the group</p>"
          },
          {
            "group": "without ids - codes 4",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.id",
            "description": "<p>indicator value id</p>"
          },
          {
            "group": "without ids - codes 4",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.id_indicator",
            "description": "<p>indicator id</p>"
          },
          {
            "group": "without ids - codes 4",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.values.indicator_value",
            "description": "<p>indicator value</p>"
          },
          {
            "group": "without ids - codes 4",
            "type": "String",
            "optional": false,
            "field": "result.indicators.values.value_description",
            "description": "<p>associated description for the value</p>"
          }
        ],
        "with ids - code 1": [
          {
            "group": "with ids - code 1",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Indicators response object</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Object[]",
            "optional": false,
            "field": "result.indicators",
            "description": "<p>indicators information</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.id",
            "description": "<p>indicator id</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "String",
            "optional": false,
            "field": "result.indicators.name",
            "description": "<p>indicator name</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Object[]",
            "optional": false,
            "field": "result.biomes",
            "description": "<p>biomes information</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.biomes.id",
            "description": "<p>biome id</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "String",
            "optional": false,
            "field": "result.biomes.name",
            "description": "<p>biome name</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Object",
            "optional": false,
            "field": "result.values",
            "description": "<p>indicators values grouped</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Object[]",
            "optional": false,
            "field": "result.values._group_",
            "description": "<p>indicator for the group</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.values._group_.id",
            "description": "<p>indicator value id</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.values._group_.id_indicator",
            "description": "<p>indicator id</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "String",
            "optional": false,
            "field": "result.values._group_.name_biome",
            "description": "<p>biome name</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.values._group_.id_biome",
            "description": "<p>biome id</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.values._group_.indicator_value",
            "description": "<p>indicator value</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "String",
            "optional": false,
            "field": "result.values._group_.value_description",
            "description": "<p>associated description for the value</p>"
          },
          {
            "group": "with ids - code 1",
            "type": "Number",
            "optional": false,
            "field": "result.values._group_.year",
            "description": "<p>year associated to the value</p>"
          }
        ],
        "with ids - codes 2, 3, 4": [
          {
            "group": "with ids - codes 2, 3, 4",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Indicators response object</p>"
          },
          {
            "group": "with ids - codes 2, 3, 4",
            "type": "Object[]",
            "optional": false,
            "field": "result.indicators",
            "description": "<p>indicators information</p>"
          },
          {
            "group": "with ids - codes 2, 3, 4",
            "type": "Number",
            "optional": false,
            "field": "result.indicators.id",
            "description": "<p>indicator id</p>"
          },
          {
            "group": "with ids - codes 2, 3, 4",
            "type": "String",
            "optional": false,
            "field": "result.indicators.name",
            "description": "<p>indicator name</p>"
          },
          {
            "group": "with ids - codes 2, 3, 4",
            "type": "Object[]",
            "optional": false,
            "field": "result.values",
            "description": "<p>Same structure and values as the request without ids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Without ids Success-Example:",
          "content": "[\n  {\n    \"code\": 1,\n    \"name\": \"Hectareas de Bosque Natural y Secundaria para cada año por Bioma\",\n    \"topic\": \"Riesgo para Biodiversidad\",\n    \"ids\": [\n      {\n        \"id\": 1,\n        \"name\": \"Cálculo de área en hectáreas de bosque Natural (N) para cada año por Bioma\"\n      },\n      {\n        \"id\": 2,\n        \"name\": \"Cálculo de área en hectáreas de bosque Secundario(S) para cada año por Bioma\"\n      }\n    ],\n    \"values\": [\n      {\n        \"name_biome\": \"Helobioma Casanare\",\n        \"indicator_value\": \"21897.30000\",\n        \"value_description\": \"Natural\",\n        \"year\": 2002\n      },\n      {\n        \"name_biome\": \"Helobioma Casanare\",\n        \"indicator_value\": \"1403.32000\",\n        \"value_description\": \"Secundaria\",\n        \"year\": 2002\n      }\n    ]\n  },\n  {\n    \"code\": 2,\n    \"name\": \"Areas Protegidas a 5, 15 y 25 km del borde del bloque de exploración\",\n    \"topic\": \"Riesgo para Biodiversidad\",\n    \"ids\": [\n      {\n        \"id\": 3,\n        \"name\": \"Superficie en áreas protegidas a 5 Km del borde del bloque de exploración\"\n      },...\n    ]...\n  }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "group": "anh_areas",
    "type": "get",
    "url": "/anh_areas/:id",
    "title": "get complete Info",
    "name": "getAreaInfo",
    "version": "1.0.0",
    "description": "<p>Get an anh area general information</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>area anh area name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.area",
            "description": "<p>total area in hectares</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.description",
            "description": "<p>description about the area</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.categories",
            "description": "<p>presence or absence of special areas inside the area</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.categories.protected_area",
            "description": "<p>if the given area has protected areas</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.categories.forest_reserves",
            "description": "<p>if the given area has forest reserves</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.categories.strategic_ecosystem",
            "description": "<p>if the given area has strategic ecosystems inside</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.categories.ethnic_territories",
            "description": "<p>if the given area has ethnic territories inside</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.categories.peasant_reserves",
            "description": "<p>if the given area has peasant reserves</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.categories.projects",
            "description": "<p>if the given area has projects</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.categories.ordering",
            "description": "<p>if the given area has ordering</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n  \"name\": \"LLA 92\",\n  \"area\": \"111329.14364\",\n  \"sedimentary_code\": \"LLA\",\n  \"description\": \"PROCESO PERMANENTE DE ASIGNACION DE AREAS 2019\",\n  \"categories\": {\n    \"protected_area\": true,\n    \"forest_reserves\": null,\n    \"strategic_ecosystem\": null,\n    \"ethnic_territories\": null,\n    \"peasant_reserves\": null,\n    \"projects\": null,\n    \"ordering\": null,\n    \"international\": null,\n    \"license\": null,\n    \"vulnerability\": 0.55\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/anh_areas/LLA 96",
        "type": "curl"
      }
    ],
    "filename": "src/routes/anh_areas.js",
    "groupTitle": "Anh Areas",
    "groupDescription": "<p>Endpoints to get anh areas information</p>"
  },
  {
    "group": "anh_areas",
    "type": "get",
    "url": "/anh_areas",
    "title": "list basic info",
    "name": "listAllAnhAreas",
    "version": "1.0.0",
    "description": "<p>List all anh areas basic information: name.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>area name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "[\n  { \"name\": \"CAG 7\" },\n  { \"name\": \"CAG 8\" },\n  { \"name\": \"CAT 4\" },\n  { \"name\": \"COR 9\" },\n  { \"name\": \"LLA 100\" },\n  { \"name\": \"LLA 101\" },\n  { \"name\": \"LLA 103\" }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/anh_areas",
        "type": "curl"
      }
    ],
    "filename": "src/routes/anh_areas.js",
    "groupTitle": "Anh Areas",
    "groupDescription": "<p>Endpoints to get anh areas information</p>"
  },
  {
    "group": "indicators",
    "type": "get",
    "url": "/indicators/:id/metadata",
    "title": "get metadata",
    "name": "getIndicatorMetadata",
    "version": "1.0.0",
    "description": "<p>Get metadata information about a type of indicator.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>indicator type id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n  \"metadata\": null\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/indicators/1/metadata",
        "type": "curl"
      }
    ],
    "filename": "src/routes/indicators.js",
    "groupTitle": "Indicators",
    "groupDescription": "<p>Endpoints to get indicators information</p>"
  },
  {
    "group": "indicators",
    "type": "get",
    "url": "/indicators/geometry",
    "title": "get indicators geometries",
    "name": "getIndicatorsGeometries",
    "version": "1.0.0",
    "description": "<p>Get a GeoJson object with the geometries for a given set of indicators</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type_id",
            "description": "<p>indicator type id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>query param to indicate which indicators get in the request</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>GeoJson object with geometries</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/indicators/geometry?ids=3289&ids=3501",
        "type": "curl"
      }
    ],
    "filename": "src/routes/indicators.js",
    "groupTitle": "Indicators",
    "groupDescription": "<p>Endpoints to get indicators information</p>"
  },
  {
    "group": "sedimentary_basins",
    "type": "get",
    "url": "/sedimentary_basins",
    "title": "list basic info",
    "name": "listAllSB",
    "version": "1.0.0",
    "description": "<p>List all sedimentary basins basic information: code and name.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.code",
            "description": "<p>sedimentary basin code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>sedimentary basin name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "[\n  {\n    \"code\": \"GUA OFF\",\n    \"name\": \"GUAJIRA OFFSHORE\"\n  },\n  {\n    \"code\": \"SIN OFF\",\n    \"name\": \"SINU OFFSHORE\"\n  },\n  {\n    \"code\": \"CAY\",\n    \"name\": \"LOS CAYOS\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "/sedimentary_basins",
        "type": "curl"
      }
    ],
    "filename": "src/routes/sedimentary_basins.js",
    "groupTitle": "Sedimentary Basins",
    "groupDescription": "<p>Endpoints to get sedimentary basins information</p>"
  }
] });
