// Fórmula del semiverseno
const lat1 = 21.1728, lon1 = -101.6867, lat2 = 20.9836, lon2 = -101.4798;

function getDistanciaMetros(lat1, lon1, lat2, lon2) {
    rad = function (x) { return x * Math.PI / 180; }
    var R = 6378.137; //Radio de la tierra en km 
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) *
        Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    //aquí obtienes la distancia en metros por la conversion 1Km =1000m
    var d = R * c * 1000;
    //return d;
    console.log(d);
}

getDistanciaMetros();