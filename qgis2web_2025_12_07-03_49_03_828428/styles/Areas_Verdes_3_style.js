var size = 0;
var placement = 'point';

var style_Areas_Verdes_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = "";
    var labelFont = "11px 'Segoe UI', 'Arial', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#1b5e20";
    var bufferWidth = 1.5;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    // Clave del área verde solo cerca
    if (resolution < 1.5) {
        labelText = String(
            feature.get("Clave") ||
            feature.get("clave") ||
            ""
        );
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(27,94,32,1.0)',
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 1.2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(129,199,132,0.45)'  // verde claro translúcido
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
