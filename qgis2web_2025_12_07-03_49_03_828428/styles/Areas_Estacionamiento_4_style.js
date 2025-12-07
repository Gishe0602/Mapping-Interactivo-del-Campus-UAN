var size = 0;
var placement = 'point';

var style_Areas_Estacionamiento_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = "";
    var labelFont = "11px 'Segoe UI', 'Arial', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#555555";
    var bufferWidth = 1.5;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    // Clave del estacionamiento (AE01, etc.) solo cerca
    if (resolution < 1.5) {
        labelText = String(feature.get("clave") || "");
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(60,60,60,1.0)',
            lineDash: [4,2],            // punteado ligero
            lineCap: 'round',
            lineJoin: 'round',
            width: 1.2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,215,80,0.45)'  // amarillo dorado suave
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
