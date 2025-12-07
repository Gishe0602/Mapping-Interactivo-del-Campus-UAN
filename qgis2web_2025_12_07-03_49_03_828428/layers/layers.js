var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Campus_Universitario_2 = new ol.format.GeoJSON();
var features_Campus_Universitario_2 = format_Campus_Universitario_2.readFeatures(json_Campus_Universitario_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campus_Universitario_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_Universitario_2.addFeatures(features_Campus_Universitario_2);
var lyr_Campus_Universitario_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campus_Universitario_2, 
                style: style_Campus_Universitario_2,
                popuplayertitle: 'Campus_Universitario',
                interactive: false,
                title: '<img src="styles/legend/Campus_Universitario_2.png" /> Campus_Universitario'
            });
var format_Areas_Verdes_3 = new ol.format.GeoJSON();
var features_Areas_Verdes_3 = format_Areas_Verdes_3.readFeatures(json_Areas_Verdes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_Verdes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Verdes_3.addFeatures(features_Areas_Verdes_3);
var lyr_Areas_Verdes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Verdes_3, 
                style: style_Areas_Verdes_3,
                popuplayertitle: 'Areas_Verdes',
                interactive: true,
                title: '<img src="styles/legend/Areas_Verdes_3.png" /> Areas_Verdes'
            });
var format_Areas_Estacionamiento_4 = new ol.format.GeoJSON();
var features_Areas_Estacionamiento_4 = format_Areas_Estacionamiento_4.readFeatures(json_Areas_Estacionamiento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_Estacionamiento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Estacionamiento_4.addFeatures(features_Areas_Estacionamiento_4);
var lyr_Areas_Estacionamiento_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Estacionamiento_4, 
                style: style_Areas_Estacionamiento_4,
                popuplayertitle: 'Areas_Estacionamiento',
                interactive: true,
                title: '<img src="styles/legend/Areas_Estacionamiento_4.png" /> Areas_Estacionamiento'
            });
var format_Areas_Deportivas_5 = new ol.format.GeoJSON();
var features_Areas_Deportivas_5 = format_Areas_Deportivas_5.readFeatures(json_Areas_Deportivas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_Deportivas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Deportivas_5.addFeatures(features_Areas_Deportivas_5);
var lyr_Areas_Deportivas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Deportivas_5, 
                style: style_Areas_Deportivas_5,
                popuplayertitle: 'Areas_Deportivas',
                interactive: true,
                title: '<img src="styles/legend/Areas_Deportivas_5.png" /> Areas_Deportivas'
            });
var format_Edificios_6 = new ol.format.GeoJSON();
var features_Edificios_6 = format_Edificios_6.readFeatures(json_Edificios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificios_6.addFeatures(features_Edificios_6);
var lyr_Edificios_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificios_6, 
                style: style_Edificios_6,
                popuplayertitle: 'Edificios',
                interactive: true,
                title: '<img src="styles/legend/Edificios_6.png" /> Edificios'
            });
var format_Unidades_Academicas_7 = new ol.format.GeoJSON();
var features_Unidades_Academicas_7 = format_Unidades_Academicas_7.readFeatures(json_Unidades_Academicas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidades_Academicas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidades_Academicas_7.addFeatures(features_Unidades_Academicas_7);
var lyr_Unidades_Academicas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unidades_Academicas_7, 
                style: style_Unidades_Academicas_7,
                popuplayertitle: 'Unidades_Academicas',
                interactive: true,
                title: '<img src="styles/legend/Unidades_Academicas_7.png" /> Unidades_Academicas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Campus_Universitario_2.setVisible(true);lyr_Areas_Verdes_3.setVisible(true);lyr_Areas_Estacionamiento_4.setVisible(true);lyr_Areas_Deportivas_5.setVisible(true);lyr_Edificios_6.setVisible(true);lyr_Unidades_Academicas_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Campus_Universitario_2,lyr_Areas_Verdes_3,lyr_Areas_Estacionamiento_4,lyr_Areas_Deportivas_5,lyr_Edificios_6,lyr_Unidades_Academicas_7];
lyr_Campus_Universitario_2.set('fieldAliases', {'fid': 'fid', 'clave': 'clave', 'nombre': 'nombre', 'descripcion': 'descripcion', 'f_registro': 'f_registro', });
lyr_Areas_Verdes_3.set('fieldAliases', {'fid': 'ID', 'clave': 'Clave', 'descrip': 'Descripción', 'tipo': 'Tipo de área', 'f_registro': 'Fecha Registro', });
lyr_Areas_Estacionamiento_4.set('fieldAliases', {'fid': 'fid', 'clave': 'clave', 'descrip': 'Descripción', 'tipo': 'tipo', 'f_registro': 'Fecha Registro', });
lyr_Areas_Deportivas_5.set('fieldAliases', {'fid': 'fid', 'clave': 'clave', 'descrip': 'Descripción', 'tipo': 'tipo', 'f_registro': 'Fecha Registro', });
lyr_Edificios_6.set('fieldAliases', {'fid': 'fid', 'clave': 'Clave:', 'nombre': 'Nombre: ', 'descripcion': 'Descripcción:', 'f_regisro': 'Fecha de Actualización', });
lyr_Unidades_Academicas_7.set('fieldAliases', {'fid': 'fid', 'clave': 'clave', 'Nombre': 'Nombre', 'Descripcion': 'Descripcion', });
lyr_Campus_Universitario_2.set('fieldImages', {'fid': 'TextEdit', 'clave': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'f_registro': 'DateTime', });
lyr_Areas_Verdes_3.set('fieldImages', {'fid': 'TextEdit', 'clave': 'TextEdit', 'descrip': 'TextEdit', 'tipo': 'TextEdit', 'f_registro': 'DateTime', });
lyr_Areas_Estacionamiento_4.set('fieldImages', {'fid': 'TextEdit', 'clave': 'TextEdit', 'descrip': 'TextEdit', 'tipo': 'TextEdit', 'f_registro': 'DateTime', });
lyr_Areas_Deportivas_5.set('fieldImages', {'fid': 'TextEdit', 'clave': 'TextEdit', 'descrip': 'TextEdit', 'tipo': 'TextEdit', 'f_registro': 'DateTime', });
lyr_Edificios_6.set('fieldImages', {'fid': 'TextEdit', 'clave': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'f_regisro': 'DateTime', });
lyr_Unidades_Academicas_7.set('fieldImages', {'fid': 'TextEdit', 'clave': 'TextEdit', 'Nombre': 'TextEdit', 'Descripcion': 'TextEdit', });
lyr_Campus_Universitario_2.set('fieldLabels', {'fid': 'hidden field', 'clave': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'descripcion': 'inline label - visible with data', 'f_registro': 'inline label - visible with data', });
lyr_Areas_Verdes_3.set('fieldLabels', {'fid': 'hidden field', 'clave': 'inline label - visible with data', 'descrip': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'f_registro': 'inline label - visible with data', });
lyr_Areas_Estacionamiento_4.set('fieldLabels', {'fid': 'hidden field', 'clave': 'inline label - visible with data', 'descrip': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'f_registro': 'inline label - visible with data', });
lyr_Areas_Deportivas_5.set('fieldLabels', {'fid': 'no label', 'clave': 'inline label - visible with data', 'descrip': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'f_registro': 'inline label - visible with data', });
lyr_Edificios_6.set('fieldLabels', {'fid': 'hidden field', 'clave': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'descripcion': 'inline label - visible with data', 'f_regisro': 'inline label - visible with data', });
lyr_Unidades_Academicas_7.set('fieldLabels', {'fid': 'hidden field', 'clave': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Descripcion': 'inline label - visible with data', });
lyr_Unidades_Academicas_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});