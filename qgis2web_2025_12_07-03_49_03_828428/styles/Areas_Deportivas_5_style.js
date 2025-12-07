var size = 0;
var placement = 'point';

var style_Areas_Deportivas_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = "";
    var labelFont = "11px 'Segoe UI', 'Arial', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#1b4f72";
    var bufferWidth = 1.5;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    // Mostrar la clave de la cancha solo cuando estés bastante cerca
    if (resolution < 1.5) {
        labelText = String(feature.get("clave") || "");
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(25,80,130,1.0)',
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 1.3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(55,126,184,0.45)'   // azul deportivo translúcido
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
