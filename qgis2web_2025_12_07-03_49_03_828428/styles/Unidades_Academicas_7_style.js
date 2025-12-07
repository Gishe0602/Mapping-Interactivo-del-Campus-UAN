var size = 0;
var placement = 'point';

var style_Unidades_Academicas_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = "";
    var labelFont = "12px 'Segoe UI', 'Arial', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#880e4f";
    var bufferWidth = 2.0;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    // Nombre de la unidad: solo cuando el zoom es razonable
    if (resolution < 8) {
        labelText = String(
            feature.get("Nombre") ||
            feature.get("nombre") ||
            ""
        );
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(136,14,79,0.95)',
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 2.0
        }),
        fill: new ol.style.Fill({
            color: 'rgba(225,89,137,0.25)'   // un poco más suave
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
