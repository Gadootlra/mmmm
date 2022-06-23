var wms_layers = [];

var format_gaa_0 = new ol.format.GeoJSON();
var features_gaa_0 = format_gaa_0.readFeatures(json_gaa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gaa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gaa_0.addFeatures(features_gaa_0);
var lyr_gaa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gaa_0, 
                style: style_gaa_0,
                interactive: true,
                title: '<img src="styles/legend/gaa_0.png" /> gaa'
            });

lyr_gaa_0.setVisible(true);
var layersList = [lyr_gaa_0];
lyr_gaa_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'رقم_القاعة': 'رقم القاعة', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_البينشات': 'عدد البينشات', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_المكيفات': 'عدد المكيفات', 'إضافات_اخرى': 'إضافات اخرى', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_gaa_0.set('fieldImages', {'OBJECTID': '', 'رقم_القاعة': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_البينشات': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'إضافات_اخرى': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_gaa_0.set('fieldLabels', {'OBJECTID': 'no label', 'رقم_القاعة': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_البينشات': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'إضافات_اخرى': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_gaa_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});