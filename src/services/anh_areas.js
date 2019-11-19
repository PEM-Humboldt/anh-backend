module.exports = (geoBiomesByBlocks, geoBlocks, geoIndicatorsByBlocks) => ({

  /**
   * Get all anh areas basic information: name
   */
  listAllBasicInfo: async () => geoBiomesByBlocks.listAllBlocksWithName(),

  /**
   * Get information about a given area
   *
   * @param {String} name anh area name
   */
  getAreaInfo: async (name) => geoBlocks.findAreaInfo(name),

  /**
   * Get the geometry of an area
   *
   * @param {String} name anh area name
   */
  getAreaGeometry: async (name) => {
    const geom = await geoBlocks.findGeometry(name);
    if (geom === null) throw new Error('Area doesn\'t exists or doesn\'t have a geometry');
    return geom;
  },

  /**
   * Get the geometry of an area divided by biomes
   *
   * @param {String} name anh area name
   */
  getAreaGeometryWithBiomes: async (name) => geoBiomesByBlocks.findGeometryWithBiomes(name),

  /**
   * Get the list of biomes information in the given area
   *
   * @param {String} name anh area name
   */
  getAreaBiomes: async (name) => {
    const biomes = await geoBiomesByBlocks.findBiomesInfoByBlock(name);
    const { area: totalArea } = await geoBlocks.findArea(name);

    return biomes.map((biome) => ({
      ...biome,
      percentage: parseFloat(biome.area) / totalArea,
    }));
  },

  /**
   * Get the list of indicators associated to a given area
   *
   * @param {String} id area id
   */
  getAreaIndicators: async () => ([
    {
      id: 'ai1',
      typeName: 'Indicator 1',
      typeId: 'ind1',
      size: '1',
      group: ['costo'],
      values: [1, 4, 6],
    },
    {
      id: 'ai2',
      typeId: 'ind2',
      typeName: 'Indicator 2',
      size: '2',
      group: ['riesgo'],
      values: [1, 4, 6],
    },
    {
      id: 'ai3',
      typeId: 'ind3',
      typeName: 'Indicator 3',
      size: '3',
      group: ['costo', 'monitoreo'],
      values: [9, 5],
    },
    {
      id: 'ai4',
      typeId: 'ind4',
      typeName: 'Indicator 4',
      size: '1',
      group: ['riesgo', 'monitoreo'],
      values: [9, 2],
    },
    {
      id: 'ai5',
      typeId: 'ind5',
      typeName: 'Indicator 5',
      size: '3',
      group: ['riesgo', 'costo', 'oportunidad'],
      values: [6, 5, 2],
    },
    {
      id: 'ai6',
      typeId: 'ind6',
      typeName: 'Indicator 6',
      size: '2',
      group: ['riesgo', 'costo', 'oportunidad', 'monitoreo', 'bioma'],
      values: [2, 2],
    },
    {
      id: 'ai7',
      typeId: 'ind7',
      typeName: 'Indicator 7',
      size: '2',
      group: ['monitoreo', 'costo'],
      values: [1, 2],
    },
    {
      id: 'ai8',
      typeId: 'ind8',
      typeName: 'Indicator 8',
      size: '1',
      group: ['riesgo', 'bioma'],
      values: [0, 2],
    },
    {
      id: 'ai9',
      typeId: 'ind9',
      typeName: 'Indicator 9',
      size: '1',
      group: ['bioma', 'monitoreo', 'oportunidad'],
      values: [9, 4, 3],
    },
    {
      id: 'ai10',
      typeId: 'ind10',
      typeName: 'Indicator 10',
      size: '2',
      group: ['riesgo', 'bioma', 'monitoreo', 'oportunidad'],
      values: [6, 3, 1],
    },
    {
      id: 'ai11',
      typeId: 'ind11',
      typeName: 'Indicator 11',
      size: '1',
      group: ['monitoreo', 'oportunidad'],
      values: [7, 4],
    },
  ]),

  /**
   * List biomes information inside an area that have indicators
   *
   * @param {String} name anh area name
   */
  listAreaIndicatorsBiomes: async (name) => (
    geoIndicatorsByBlocks.findBiomesWithIndicatorsByBlock(name)
  ),

  /**
   * Get the list of indicators associated to a given biome inside a given area
   *
   * @param {String} id area id
   * @param {Number} biomeId biome id
   */
  getBiomeIndicatorsInArea: async () => ([
    {
      id: 'ai1',
      typeName: 'Indicator 1',
      typeId: 'ind1',
      size: '1',
      group: ['costo'],
      values: [1, 4, 6],
    },
    {
      id: 'ai2',
      typeId: 'ind2',
      typeName: 'Indicator 2',
      size: '2',
      group: ['riesgo'],
      values: [1, 4, 6],
    },
    {
      id: 'ai3',
      typeId: 'ind3',
      typeName: 'Indicator 3',
      size: '3',
      group: ['costo', 'monitoreo'],
      values: [9, 5],
    },
    {
      id: 'ai4',
      typeId: 'ind4',
      typeName: 'Indicator 4',
      size: '1',
      group: ['riesgo', 'monitoreo'],
      values: [9, 2],
    },
    {
      id: 'ai7',
      typeId: 'ind7',
      typeName: 'Indicator 7',
      size: '2',
      group: ['monitoreo', 'costo'],
      values: [1, 2],
    },
    {
      id: 'ai8',
      typeId: 'ind8',
      typeName: 'Indicator 8',
      size: '1',
      group: ['riesgo', 'bioma'],
      values: [0, 2],
    },
    {
      id: 'ai9',
      typeId: 'ind9',
      typeName: 'Indicator 9',
      size: '1',
      group: ['bioma', 'monitoreo', 'oportunidad'],
      values: [9, 4, 3],
    },
    {
      id: 'ai11',
      typeId: 'ind11',
      typeName: 'Indicator 11',
      size: '1',
      group: ['monitoreo', 'oportunidad'],
      values: [7, 4],
    },
  ]),

  /**
   * Get the geometry of an indicator (if there is one)
   *
   * @param {String} id area id
   * @param {Number} indicatorId indicator id
   */
  getIndicatorGeometry: async () => (JSON.parse('{"type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "gid": 1078, "name_biome": "Hidrobioma Cauca medio", "id_biome": 399, "compensation_factor": 5.75 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-76.4755002307361, 3.45432183303081], [-76.4752721990104, 3.44862622250411], [-76.4775641729049, 3.46067639392209], [-76.4757267938876, 3.46436799236412], [-76.4755002307361, 3.45432183303081]]], [[[-76.4754589634175, 3.46849797668682], [-76.4761083440915, 3.47056762893293], [-76.4760903907354, 3.4718411017682], [-76.4754524665243, 3.4685982096869], [-76.4754589634175, 3.46849797668682]]], [[[-76.4868177015598, 3.49729772866661], [-76.4915819428342, 3.49956154969668], [-76.4921286485238, 3.50275510178317], [-76.4943125253349, 3.50198136043353], [-76.4930002943755, 3.50545046961956], [-76.4908219807319, 3.50606692455725], [-76.4905378916317, 3.50059972727256], [-76.4835815672016, 3.49519517995345], [-76.4766497420808, 3.47468452780718], [-76.4816241635739, 3.48266846114716], [-76.4840065069204, 3.49385065849655], [-76.4868177015598, 3.49729772866661]]], [[[-76.4615672501325, 3.42352195355299], [-76.4619925774812, 3.42178083195153], [-76.4619187846055, 3.42268745962945], [-76.4615672501325, 3.42352195355299]]]] } }, { "type": "Feature", "properties": { "gid": 41, "name_biome": "Helobioma Cauca medio", "id_biome": 289, "compensation_factor": 8.5 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-76.490050998874, 3.42763303119604], [-76.4916536639778, 3.42762897109924], [-76.492401168775, 3.4299135845617], [-76.4907914205744, 3.43045526824287], [-76.4896012317451, 3.43516514172085], [-76.484321764921, 3.4390106548605], [-76.4841156970287, 3.43504407428185], [-76.4875185296654, 3.43288390776014], [-76.490050998874, 3.42763303119604]]], [[[-76.4752721990104, 3.44862622250411], [-76.4806894740185, 3.44469578766436], [-76.4806169084161, 3.44085761290784], [-76.4762335701285, 3.43791862394658], [-76.4732068284693, 3.43453174727146], [-76.4696121530148, 3.43528170479422], [-76.4675134133998, 3.43783951217127], [-76.4640107970465, 3.43602956542859], [-76.4726983794183, 3.4336067617866], [-76.4802017909449, 3.4405056604684], [-76.4835675005973, 3.44024761978448], [-76.4836954920516, 3.44258911525835], [-76.4761139606219, 3.44968550415552], [-76.4752721990104, 3.44862622250411]]], [[[-76.4618255969346, 3.43098321419293], [-76.4615806400379, 3.42925099284306], [-76.4616983909511, 3.42943720311837], [-76.4618255969346, 3.43098321419293]]], [[[-76.4619925774812, 3.42178083195153], [-76.4623086349578, 3.4203366321772], [-76.4623502541272, 3.42215324128302], [-76.4612341302165, 3.42538105544767], [-76.4619925774812, 3.42178083195153]]], [[[-76.4637200736912, 3.41616347771778], [-76.4663324122317, 3.41119787645133], [-76.4687292429609, 3.40965642398494], [-76.4776396225463, 3.41176933146528], [-76.4831341129066, 3.41459694583545], [-76.4818351960278, 3.41568334200669], [-76.4780402021791, 3.41255908274953], [-76.4680313608528, 3.41064495128706], [-76.4637200736912, 3.41616347771778]]], [[[-76.483370606113, 3.41439914584052], [-76.485347047346, 3.41214923136296], [-76.4871879395993, 3.41156621454968], [-76.4871877536056, 3.41187100879028], [-76.483370606113, 3.41439914584052]]], [[[-76.4909166027241, 3.40924737590376], [-76.4922860098543, 3.40724871439305], [-76.4923978778254, 3.40716760487197], [-76.4911588382101, 3.40927186780912], [-76.4909166027241, 3.40924737590376]]], [[[-76.4999216065663, 3.40015523258171], [-76.4999722656053, 3.40010442858076], [-76.5001588147418, 3.39989888206871], [-76.4999498542918, 3.40020856809179], [-76.4999216065663, 3.40015523258171]]], [[[-76.5005148009609, 3.39937129897259], [-76.5014161302955, 3.39683791881037], [-76.5033068243306, 3.39444931745658], [-76.5015212836317, 3.39713742468693], [-76.5005148009609, 3.39937129897259]]], [[[-76.5075631690681, 3.39858820070618], [-76.5079676396111, 3.39823063869238], [-76.5075726617147, 3.39858820069872], [-76.5075631690681, 3.39858820070618]]], [[[-76.5130201667706, 3.39376405839999], [-76.5130972591866, 3.39369590617583], [-76.5132761784967, 3.39391839267851], [-76.5132055474319, 3.39398113934318], [-76.5130201667706, 3.39376405839999]]]] } }, { "type": "Feature", "properties": { "gid": 477, "name_biome": "Orobioma Subandino Cauca medio", "id_biome": 175, "compensation_factor": 7.5 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-76.5239606204288, 3.34533713788623], [-76.5241093951322, 3.3422347508607], [-76.5270796356427, 3.34160445156154], [-76.5272559682326, 3.33861959574832], [-76.5307144879026, 3.33845168582691], [-76.5312094779338, 3.33663043736201], [-76.5422834538249, 3.33616328911075], [-76.5491534800783, 3.33819239112546], [-76.5497329813969, 3.34074669428665], [-76.545482818814, 3.34271012122977], [-76.547704824709, 3.34935368934422], [-76.5403447213067, 3.36548120111689], [-76.541226255305, 3.36634632607455], [-76.5486436982999, 3.36208497892856], [-76.5540522442776, 3.36202377341737], [-76.5614297852993, 3.37112509243154], [-76.5636477968236, 3.38116166155059], [-76.5668397867712, 3.38442236226503], [-76.5667685559175, 3.38777165079016], [-76.5616857530579, 3.39462755279925], [-76.5600906995274, 3.40962111679025], [-76.5605660822327, 3.41137547601142], [-76.5704323094775, 3.41256728225155], [-76.5711952333927, 3.42143070410864], [-76.5684947294472, 3.42557627028736], [-76.5629398570648, 3.42413784510633], [-76.5589714041576, 3.42493308232382], [-76.5551799623749, 3.43009809411578], [-76.5563847910624, 3.42668671503634], [-76.5553849424565, 3.42263229077367], [-76.5598749845105, 3.41423963397337], [-76.5567666135566, 3.40793229077428], [-76.5589868844663, 3.39460232972444], [-76.5575371911863, 3.38865601475135], [-76.5498861219641, 3.38611931347641], [-76.5474079172179, 3.38868992797781], [-76.5348755042593, 3.39014328710514], [-76.5248744281742, 3.38514238542645], [-76.5238728561293, 3.38103489506892], [-76.5267094105124, 3.37946367443825], [-76.5352710207773, 3.37964410145782], [-76.5354474886076, 3.37630745626505], [-76.532826463289, 3.37595496735873], [-76.5335282910867, 3.37103866995793], [-76.5267141358651, 3.37103445942567], [-76.5307416441711, 3.35523318277844], [-76.5293465798036, 3.35031538778975], [-76.5237557254198, 3.34961000878452], [-76.5239606204288, 3.34533713788623]]], [[[-76.562750906104, 3.45819543928055], [-76.5633848503694, 3.45663226004442], [-76.5598450286597, 3.45828647793015], [-76.5523851527446, 3.45563227715987], [-76.5571492786253, 3.45080952586333], [-76.5599288153794, 3.45225773018748], [-76.5613851712453, 3.44823735209957], [-76.5751161568686, 3.44969819342989], [-76.5858102117056, 3.45572769739286], [-76.5835486120936, 3.46113081185955], [-76.5758067735648, 3.45700719830146], [-76.5739844808531, 3.45680986101536], [-76.5737159193891, 3.45832897955395], [-76.5688235443587, 3.45674837883473], [-76.562750906104, 3.45819543928055]]], [[[-76.5550871026975, 3.43023517178014], [-76.5533874084153, 3.43826980561766], [-76.5523300969564, 3.43889439791003], [-76.5529023008234, 3.43055816932418], [-76.5550871026975, 3.43023517178014]]]] } }, { "type": "Feature", "properties": { "gid": 476, "name_biome": "Orobioma Azonal Subandino Cauca medio", "id_biome": 506, "compensation_factor": 8 }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-76.4754589634175, 3.46849797668682], [-76.4775630283068, 3.46132416437985], [-76.4761139606219, 3.44968550415552], [-76.4836954920516, 3.44258911525835], [-76.4835675005973, 3.44024761978448], [-76.4802017909449, 3.4405056604684], [-76.4726983794183, 3.4336067617866], [-76.4653183865804, 3.43633368878716], [-76.462498074467, 3.43475066449969], [-76.4612341302165, 3.42538105544767], [-76.462733547927, 3.41796881970787], [-76.4669954069564, 3.41133803566546], [-76.4780402021791, 3.41255908274953], [-76.4818351960278, 3.41568334200669], [-76.4978048630278, 3.40368900358282], [-76.5035325553471, 3.39422364671589], [-76.505207358316, 3.39590732326307], [-76.5040827860453, 3.39854055363066], [-76.5050556812704, 3.39974486921897], [-76.5132139990765, 3.39359270426753], [-76.515969847773, 3.39680790145916], [-76.5181644616652, 3.39335597937158], [-76.5227312120019, 3.39539085020385], [-76.523632947952, 3.39019843523974], [-76.5185414119533, 3.38861494570058], [-76.5178722401842, 3.38056234269224], [-76.5238728561293, 3.38103489506892], [-76.5248744281742, 3.38514238542645], [-76.5348755042593, 3.39014328710514], [-76.5474079172179, 3.38868992797781], [-76.5498861219641, 3.38611931347641], [-76.5575371911863, 3.38865601475135], [-76.5589868844663, 3.39460232972444], [-76.5567666135566, 3.40793229077428], [-76.5598749845105, 3.41423963397337], [-76.5553849424565, 3.42263229077367], [-76.5563847910624, 3.42668671503634], [-76.5551799623749, 3.43009809411578], [-76.5529023008234, 3.43055816932418], [-76.5523300969564, 3.43889439791003], [-76.5533874084153, 3.43826980561766], [-76.5568248643418, 3.44885745191205], [-76.5613851712453, 3.44823735209957], [-76.5613851553138, 3.45015486789233], [-76.5599288153794, 3.45225773018748], [-76.5571492786253, 3.45080952586333], [-76.5523851527446, 3.45563227715987], [-76.5554919932934, 3.45754400871032], [-76.5606839945624, 3.45828427285871], [-76.562210681286, 3.4565826528621], [-76.5633852070989, 3.45763230508204], [-76.5589158910224, 3.45970005592826], [-76.5476924888711, 3.45718783504826], [-76.5454447259276, 3.4584930516676], [-76.5432266993082, 3.46456076179216], [-76.5409108229184, 3.46648110785272], [-76.5349719330758, 3.46597201549635], [-76.5331587371369, 3.46910682591319], [-76.5330499596684, 3.48288275646115], [-76.5381786506108, 3.49117984614497], [-76.5361645399235, 3.49289784478403], [-76.5296229445852, 3.49127571488716], [-76.5260971404881, 3.49582508866606], [-76.5241847415616, 3.49582445044061], [-76.5032294569657, 3.48807769509237], [-76.4933542710211, 3.50505588197509], [-76.4943125253349, 3.50198136043353], [-76.4921286485238, 3.50275510178317], [-76.4915819428342, 3.49956154969668], [-76.4867014121435, 3.49724756243773], [-76.4840065069204, 3.49385065849655], [-76.4818786706292, 3.48330928185471], [-76.4766497420808, 3.47468452780718], [-76.4754589634175, 3.46849797668682]], [[-76.490050998874, 3.42763303119604], [-76.4875185296654, 3.43288390776014], [-76.4841156970287, 3.43504407428185], [-76.484321764921, 3.4390106548605], [-76.4896012317451, 3.43516514172085], [-76.4907914205744, 3.43045526824287], [-76.492401168775, 3.4299135845617], [-76.4916536639778, 3.42762897109924], [-76.490050998874, 3.42763303119604]]], [[[-76.4908704853698, 3.50158432921039], [-76.4903465036859, 3.50057240768402], [-76.4894302182011, 3.49966189891591], [-76.4905378916317, 3.50059972727256], [-76.4908704853698, 3.50158432921039]]], [[[-76.4778260360487, 3.47890181673357], [-76.4772098646998, 3.47753260362392], [-76.4770688031989, 3.47681523109339], [-76.4776609330976, 3.47789625781026], [-76.4778260360487, 3.47890181673357]]], [[[-76.4758871420083, 3.46189050772013], [-76.4760296172112, 3.4596925252481], [-76.4762609129732, 3.46137901188243], [-76.4758871420083, 3.46189050772013]]], [[[-76.4930002943755, 3.50545046961956], [-76.4928496287781, 3.50561894003889], [-76.4917688895685, 3.50585771692193], [-76.4918360361556, 3.50552145309383], [-76.4930002943755, 3.50545046961956]]], [[[-76.5274155123467, 3.36603080883764], [-76.5274160663058, 3.36524061013019], [-76.5282503868885, 3.36311885825536], [-76.528621317781, 3.36353418166162], [-76.5274155123467, 3.36603080883764]]], [[[-76.4807124051742, 3.4840803675348], [-76.4802939481852, 3.48326672664184], [-76.479939808764, 3.48273180232136], [-76.4804813670131, 3.48302714868043], [-76.4807124051742, 3.4840803675348]]]] } }] }')),
});
