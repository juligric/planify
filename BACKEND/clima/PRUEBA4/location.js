const http = require('http');
const https = require('https'); // Para hacer solicitudes HTTPS
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server); // Para comunicación en tiempo real
const fetch = require('node-fetch');


const apiKey = '8bf54ab6c5f08ef8bc5a6b39cd7a3e3a';

// Sirve el archivo HTML
app.use(express.static('public'));

// Cuando el cliente se conecta
io.on('connection', (socket) => {
    console.log('Usuario conectado');

    // Obtener la IP del cliente
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, (resp) => {
        let ip = '';
        resp.on('data', (chunk) => {
            ip += chunk;
        });
        resp.on('end', () => {
            console.log('IP del usuario:', ip);
            
            // Obtener la localización basada en la IP
            http.get({'host': 'ip-api.com', 'port': 80, 'path': `/json/${ip}`}, (resp) => {
                let locationData = '';
                resp.on('data', (chunk) => {
                    locationData += chunk;
                });
                resp.on('end', async () => {
                    const location = JSON.parse(locationData);
                    const city = location.city;
                    console.log(`Ubicación: ${city}`);

                    // Obtener el clima según la ciudad
                    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`);
                    const weatherData = await weatherResponse.json();

                    const weatherDescription = weatherData.weather[0].description;
                    console.log(`Clima: ${weatherDescription}`);

                    // Enviar el clima y la descripción al cliente
                    socket.emit('weather', { weatherDescription, city });
                });
            });
        });
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
