var size = 0;
var placement = 'point';

var style_Edificios_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = "";
    var labelFont = "11px 'Segoe UI', 'Arial', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#424242";
    var bufferWidth = 1.5;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    // Nombre del edificio o clave: solo muy cerca
    if (resolution < 1.5) {
        labelText = String(
            feature.get("Nombre") ||
            feature.get("nombre") ||
            feature.get("clave")  ||
            ""
        );
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(66,66,66,1.0)',
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 0.8
        }),
        fill: new ol.style.Fill({
            color: 'rgba(189,189,189,0.5)'   // edificios más suaves
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
