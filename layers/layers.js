ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1368153.705722, 7471843.421888, 1425595.817445, 7499608.494704]);
var wms_layers = [];


        var lyr_Baggrundskort_0 = new ol.layer.Tile({
            'title': 'Baggrundskort',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_kommuneplan_1 = new ol.format.GeoJSON();
var features_kommuneplan_1 = format_kommuneplan_1.readFeatures(json_kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_1.addFeatures(features_kommuneplan_1);
var lyr_kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_1, 
                style: style_kommuneplan_1,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_1.png" /> kommuneplan'
            });
var format_Strandbeskyttelse_2 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_2 = format_Strandbeskyttelse_2.readFeatures(json_Strandbeskyttelse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_2.addFeatures(features_Strandbeskyttelse_2);
var lyr_Strandbeskyttelse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_2, 
                style: style_Strandbeskyttelse_2,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelse_2.png" /> Strandbeskyttelse'
            });
var format_Frededeomrder_3 = new ol.format.GeoJSON();
var features_Frededeomrder_3 = format_Frededeomrder_3.readFeatures(json_Frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_3.addFeatures(features_Frededeomrder_3);
var lyr_Frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_3, 
                style: style_Frededeomrder_3,
                popuplayertitle: 'Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrder_3.png" /> Fredede områder'
            });
var format_Lokalplanvedtaget_4 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_4 = format_Lokalplanvedtaget_4.readFeatures(json_Lokalplanvedtaget_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_4.addFeatures(features_Lokalplanvedtaget_4);
var lyr_Lokalplanvedtaget_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_4, 
                style: style_Lokalplanvedtaget_4,
                popuplayertitle: 'Lokal plan - vedtaget',
                interactive: true,
    title: 'Lokal plan - vedtaget<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_0.png" /> 001<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_1.png" /> 101-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_2.png" /> 102<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_3.png" /> 103<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_4.png" /> 104<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_5.png" /> 105<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_6.png" /> 106<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_7.png" /> 108<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_8.png" /> 109-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_9.png" /> 112<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_10.png" /> 115<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_11.png" /> 116<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_12.png" /> 118<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_13.png" /> 119<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_14.png" /> 120<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_15.png" /> 121<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_16.png" /> 122<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_17.png" /> 124<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_18.png" /> 126<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_19.png" /> 127<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_20.png" /> 128<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_21.png" /> 131<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_22.png" /> 132<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_23.png" /> 133<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_24.png" /> 134<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_25.png" /> 135<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_26.png" /> 137<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_27.png" /> 139<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_28.png" /> 140<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_29.png" /> 141<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_30.png" /> 142<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_31.png" /> 143<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_32.png" /> 144<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_33.png" /> 147<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_34.png" /> 148<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_35.png" /> 149<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_36.png" /> 150<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_37.png" /> 151<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_38.png" /> 152<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_39.png" /> 154<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_40.png" /> 202<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_41.png" /> 203<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_42.png" /> 206<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_43.png" /> 207<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_44.png" /> 208<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_45.png" /> 209<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_46.png" /> 210<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_47.png" /> 211<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_48.png" /> 216<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_49.png" /> 220<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_50.png" /> 221<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_51.png" /> 225<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_52.png" /> 226<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_53.png" /> 228<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_54.png" /> 229<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_55.png" /> 230<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_56.png" /> 231<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_57.png" /> 232<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_58.png" /> 233<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_59.png" /> 234<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_60.png" /> 236<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_61.png" /> 237<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_62.png" /> 238<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_63.png" /> 239<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_64.png" /> 240<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_65.png" /> 241<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_66.png" /> 301-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_67.png" /> 303<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_68.png" /> 304<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_69.png" /> 305<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_70.png" /> 306<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_71.png" /> 313<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_72.png" /> 314<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_73.png" /> 316<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_74.png" /> 322<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_75.png" /> 323<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_76.png" /> 324<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_77.png" /> 325<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_78.png" /> 326<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_79.png" /> 327<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_80.png" /> 328<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_81.png" /> 329<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_82.png" /> 330<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_83.png" /> 331<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_84.png" /> 332<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_85.png" /> 335<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_86.png" /> 338<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_87.png" /> 339<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_88.png" /> 340<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_89.png" /> 341<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_90.png" /> 342<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_91.png" /> 343<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_92.png" /> 345<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_93.png" /> 403-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_94.png" /> 404<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_95.png" /> 405<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_96.png" /> 407<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_97.png" /> 408<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_98.png" /> 409<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_99.png" /> 411<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_100.png" /> 412<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_101.png" /> 418<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_102.png" /> 423<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_103.png" /> 429<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_104.png" /> 432<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_105.png" /> 433<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_106.png" /> 440<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_107.png" /> 441<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_108.png" /> 447<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_109.png" /> 448<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_110.png" /> 452<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_111.png" /> 454<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_112.png" /> 455<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_113.png" /> 456<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_114.png" /> 457<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_115.png" /> 458<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_116.png" /> 459<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_117.png" /> 462<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_118.png" /> 463<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_119.png" /> 464<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_120.png" /> 466<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_121.png" /> 467<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_122.png" /> 468<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_123.png" /> 469<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_124.png" /> 470<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_125.png" /> 471<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_126.png" /> 472<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_127.png" /> 473<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_128.png" /> 475<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_129.png" /> 476<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_130.png" /> 504<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_131.png" /> 507<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_132.png" /> 508<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_133.png" /> 510<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_134.png" /> 511<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_135.png" /> 516<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_136.png" /> 518<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_137.png" /> 519<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_138.png" /> A1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_139.png" /> A10<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_140.png" /> A11<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_143.png" /> A13<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_144.png" /> A14<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_145.png" /> A15<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_146.png" /> A3<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_147.png" /> A5<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_148.png" /> A7<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_149.png" /> A8<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_151.png" /> B17<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_154.png" /> H1 tillæg 4 <br />\
    <img src="styles/legend/Lokalplanvedtaget_4_155.png" /> H10<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_157.png" /> H11<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_158.png" /> H12<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_159.png" /> H13<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_160.png" /> H14<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_161.png" /> H15<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_162.png" /> H16<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_163.png" /> H17<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_164.png" /> H18<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_165.png" /> H20<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_167.png" /> H3<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_168.png" /> H4<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_169.png" /> H5<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_170.png" /> H9<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_4_172.png" /> <br />' });
var format_Tandlger_5 = new ol.format.GeoJSON();
var features_Tandlger_5 = format_Tandlger_5.readFeatures(json_Tandlger_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tandlger_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tandlger_5.addFeatures(features_Tandlger_5);
var lyr_Tandlger_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tandlger_5, 
                style: style_Tandlger_5,
                popuplayertitle: 'Tandlæger',
                interactive: true,
                title: '<img src="styles/legend/Tandlger_5.png" /> Tandlæger'
            });
var format_Indkb_6 = new ol.format.GeoJSON();
var features_Indkb_6 = format_Indkb_6.readFeatures(json_Indkb_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indkb_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indkb_6.addFeatures(features_Indkb_6);
var lyr_Indkb_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indkb_6, 
                style: style_Indkb_6,
                popuplayertitle: 'Indkøb',
                interactive: true,
                title: '<img src="styles/legend/Indkb_6.png" /> Indkøb'
            });
var format_MacDonalds_7 = new ol.format.GeoJSON();
var features_MacDonalds_7 = format_MacDonalds_7.readFeatures(json_MacDonalds_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MacDonalds_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacDonalds_7.addFeatures(features_MacDonalds_7);
var lyr_MacDonalds_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacDonalds_7, 
                style: style_MacDonalds_7,
                popuplayertitle: 'Mac Donald\'s',
                interactive: true,
                title: '<img src="styles/legend/MacDonalds_7.png" /> Mac Donald\'s'
            });
var format_Togstationer_8 = new ol.format.GeoJSON();
var features_Togstationer_8 = format_Togstationer_8.readFeatures(json_Togstationer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_8.addFeatures(features_Togstationer_8);
var lyr_Togstationer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_8, 
                style: style_Togstationer_8,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_8.png" /> Togstationer'
            });
var format_Folkeskole_9 = new ol.format.GeoJSON();
var features_Folkeskole_9 = format_Folkeskole_9.readFeatures(json_Folkeskole_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskole_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskole_9.addFeatures(features_Folkeskole_9);
var lyr_Folkeskole_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskole_9, 
                style: style_Folkeskole_9,
                popuplayertitle: 'Folkeskole',
                interactive: true,
                title: '<img src="styles/legend/Folkeskole_9.png" /> Folkeskole'
            });
var format_Valgsteder_10 = new ol.format.GeoJSON();
var features_Valgsteder_10 = format_Valgsteder_10.readFeatures(json_Valgsteder_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valgsteder_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valgsteder_10.addFeatures(features_Valgsteder_10);
var lyr_Valgsteder_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valgsteder_10, 
                style: style_Valgsteder_10,
                popuplayertitle: 'Valgsteder',
                interactive: true,
                title: '<img src="styles/legend/Valgsteder_10.png" /> Valgsteder'
            });
var format_Bibliotek_11 = new ol.format.GeoJSON();
var features_Bibliotek_11 = format_Bibliotek_11.readFeatures(json_Bibliotek_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bibliotek_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bibliotek_11.addFeatures(features_Bibliotek_11);
var lyr_Bibliotek_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bibliotek_11, 
                style: style_Bibliotek_11,
                popuplayertitle: 'Bibliotek',
                interactive: true,
                title: '<img src="styles/legend/Bibliotek_11.png" /> Bibliotek'
            });
var format_Cykelbutiksmed_12 = new ol.format.GeoJSON();
var features_Cykelbutiksmed_12 = format_Cykelbutiksmed_12.readFeatures(json_Cykelbutiksmed_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cykelbutiksmed_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cykelbutiksmed_12.addFeatures(features_Cykelbutiksmed_12);
var lyr_Cykelbutiksmed_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cykelbutiksmed_12, 
                style: style_Cykelbutiksmed_12,
                popuplayertitle: 'Cykelbutik & smed ',
                interactive: true,
                title: '<img src="styles/legend/Cykelbutiksmed_12.png" /> Cykelbutik & smed '
            });
var format_Fodboldklubber_13 = new ol.format.GeoJSON();
var features_Fodboldklubber_13 = format_Fodboldklubber_13.readFeatures(json_Fodboldklubber_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldklubber_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldklubber_13.addFeatures(features_Fodboldklubber_13);
var lyr_Fodboldklubber_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldklubber_13, 
                style: style_Fodboldklubber_13,
                popuplayertitle: 'Fodboldklubber ',
                interactive: true,
                title: '<img src="styles/legend/Fodboldklubber_13.png" /> Fodboldklubber '
            });
var format_Pizzaria_14 = new ol.format.GeoJSON();
var features_Pizzaria_14 = format_Pizzaria_14.readFeatures(json_Pizzaria_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pizzaria_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pizzaria_14.addFeatures(features_Pizzaria_14);
var lyr_Pizzaria_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pizzaria_14, 
                style: style_Pizzaria_14,
                popuplayertitle: 'Pizzaria',
                interactive: true,
                title: '<img src="styles/legend/Pizzaria_14.png" /> Pizzaria'
            });

lyr_Baggrundskort_0.setVisible(true);lyr_kommuneplan_1.setVisible(true);lyr_Strandbeskyttelse_2.setVisible(true);lyr_Frededeomrder_3.setVisible(true);lyr_Lokalplanvedtaget_4.setVisible(true);lyr_Tandlger_5.setVisible(true);lyr_Indkb_6.setVisible(true);lyr_MacDonalds_7.setVisible(true);lyr_Togstationer_8.setVisible(true);lyr_Folkeskole_9.setVisible(true);lyr_Valgsteder_10.setVisible(true);lyr_Bibliotek_11.setVisible(true);lyr_Cykelbutiksmed_12.setVisible(true);lyr_Fodboldklubber_13.setVisible(true);lyr_Pizzaria_14.setVisible(true);
var layersList = [lyr_Baggrundskort_0,lyr_kommuneplan_1,lyr_Strandbeskyttelse_2,lyr_Frededeomrder_3,lyr_Lokalplanvedtaget_4,lyr_Tandlger_5,lyr_Indkb_6,lyr_MacDonalds_7,lyr_Togstationer_8,lyr_Folkeskole_9,lyr_Valgsteder_10,lyr_Bibliotek_11,lyr_Cykelbutiksmed_12,lyr_Fodboldklubber_13,lyr_Pizzaria_14];
lyr_kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Strandbeskyttelse_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Frededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Lokalplanvedtaget_4.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelsegenerel': 'anvendelsegenerel', });
lyr_Tandlger_5.set('fieldAliases', {'fid': 'fid', 'Tandlægek': 'Tandlægek', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Indkb_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MacDonalds_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskole_9.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Tlf.': 'Tlf.', 'E-mail': 'E-mail', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Valgsteder_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Hjemmeside': 'Hjemmeside', });
lyr_Bibliotek_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cykelbutiksmed_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Fodboldklubber_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Pizzaria_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kommuneplan_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Strandbeskyttelse_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Frededeomrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Lokalplanvedtaget_4.set('fieldImages', {'fid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'Range', 'doklink': 'TextEdit', 'anvendelsegenerel': 'TextEdit', });
lyr_Tandlger_5.set('fieldImages', {'fid': 'TextEdit', 'Tandlægek': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Indkb_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_MacDonalds_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_8.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Folkeskole_9.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Tlf.': 'TextEdit', 'E-mail': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Valgsteder_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Hjemmeside': 'TextEdit', });
lyr_Bibliotek_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Cykelbutiksmed_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Fodboldklubber_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Pizzaria_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_kommuneplan_1.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Strandbeskyttelse_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Frededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Lokalplanvedtaget_4.set('fieldLabels', {'fid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'header label - visible with data', 'doklink': 'inline label - always visible', 'anvendelsegenerel': 'inline label - always visible', });
lyr_Tandlger_5.set('fieldLabels', {'fid': 'no label', 'Tandlægek': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_Indkb_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_MacDonalds_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Togstationer_8.set('fieldLabels', {'Name': 'no label', });
lyr_Folkeskole_9.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Tlf.': 'no label', 'E-mail': 'no label', 'Hjemmeside': 'no label', });
lyr_Valgsteder_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Hjemmeside': 'no label', });
lyr_Bibliotek_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Cykelbutiksmed_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Fodboldklubber_13.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Pizzaria_14.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Pizzaria_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});