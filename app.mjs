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
            console.log("Distancia: " + data.features[0].properties.summary.distance / 1000 + " kilómetros.");
            console.log("Duración: " + data.features[0].properties.summary.duration / 60 + " minutos.");
        });
}

distance();