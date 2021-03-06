import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.APIKEY; // APIKEY="XYZ"
const start = "-101.6867,21.1728"; // 21.1728, -101.6867
const end = "-101.4798,20.9836"; // 20.9836, -101.4798

function distance() {
    let url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${api_key}&start=${start}&end=${end}`;
    fetch(url)
        .then((response) => { return response.json(); })
        .then(function (data) {
            //  console.log(data);
            const distanciakm = data.features[0].properties.summary.distance / 1000;
            const tiempomin = data.features[0].properties.summary.duration / 60;
            console.log("Distancia: " + distanciakm + " kilómetros.");
            console.log("Duración: " + tiempomin + " minutos.");
        });
}

distance();

// Limitantes del plan estándar: https://openrouteservice.org/plans/.
// 2,000 request al día y 40 por minuto.