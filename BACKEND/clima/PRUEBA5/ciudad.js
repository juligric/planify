process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const http = require('http');
const fetch = require('node-fetch'); // Asegúrate de tener esta dependencia instalada: npm install node-fetch

const apiKey = '8bf54ab6c5f08ef8bc5a6b39cd7a3e3a';

// Función para obtener el clima de la ciudad
const axios = require('axios');

async function getWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric',
                lang: 'es'
            }
        });
        const data = response.data;
        if (data.cod === 200) {
            return data.weather[0].description;
        }
    } catch (error) {
        console.error('Error al obtener el clima:', error.message);
    }
}


// Función para recomendar planes según el clima
function recommendPlans(weatherDescription) {
  let plans;

  // Propuestas de planes según el clima
  if (weatherDescription.includes('lluvia')) {
    plans = ['Ir al cine', 'Ir a un centro comercial'];
  } else if (weatherDescription.includes('nubes')) {
    plans = ['Ir a caminar por un parque', 'Andar en bici'];
  }
    else if (weatherDescription.includes('muy nuboso')) {
        plans = ['Ir a caminar por un parque', 'Andar en bici'];

  } else if (weatherDescription.includes('soleado') || weatherDescription.includes('cielo claro')) {
    plans = ['Ir a la playa', 'Visitar un jardín botánico'];
  } else if (weatherDescription.includes('nieve')) {
    plans = ['Ir a patinar sobre hielo', 'Hacer una batalla de bolas de nieve'];
  } else {
    plans = ['Hacer una visita guiada por la ciudad', 'Probar la comida local en algún restaurante'];
  }

  console.log('Planes sugeridos según el clima:');
  plans.forEach(plan => console.log(plan));
}


function planes (){
    return (plans);
}
onEvent ("planes", planes)



// Realizar la solicitud a la API de IP
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    ip = ip.toString();  // Convierte el buffer a string
    console.log('IP:', ip);

    // Obtener la ubicación usando la IP
    http.get({'host': 'ip-api.com', 'port': 80, 'path': '/json/' + ip}, function(resp) {
      let body = '';
      resp.on('data', function(chunk) {
        body += chunk;
      });

      resp.on('end', async function() {
        const locationData = JSON.parse(body);
        console.log('Ubicación:', locationData.city);

        // Obtener el clima de la ciudad
        const weatherDescription = await getWeather(locationData.city);
        console.log('Descripción del clima:', weatherDescription);

        // Recomendar planes según el clima
        if (weatherDescription) {
          recommendPlans(weatherDescription);
        }
      });
    });
  });
});

