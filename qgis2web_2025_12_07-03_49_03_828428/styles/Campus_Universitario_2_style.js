var size = 0;
var placement = 'point';

var style_Campus_Universitario_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = "";
    var labelFont = "12px 'Segoe UI', 'Arial', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#b71c1c";
    var bufferWidth = 2.0;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    // Nombre del campus solo en vista general
    if (resolution > 3 && resolution < 50) {
        labelText = String(
            feature.get("nombre") ||
            feature.get("Nombre") ||
            "Campus Universitario UAN"
        );
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(183,28,28,0.9)',
            lineDash: [8,4],
            lineCap: 'round',
            lineJoin: 'round',
            width: 2.5
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,238,200,0.15)' // casi transparente
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
