// Tu API Key de OpenWeatherMap
const apiKey = '8bf54ab6c5f08ef8bc5a6b39cd7a3e3a';

// Función para obtener el clima de la ciudad
async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`);
    const data = await response.json();
    
    if (data.cod === 200) {
        const description = data.weather[0].description;
        return description;
    } else {
        alert('No se encontró la ciudad, intenta de nuevo.');
        return null;
    }
}

// Función para recomendar planes según el clima
function recommendPlans(weatherDescription) {
    const plansList = document.getElementById('plans');
    plansList.innerHTML = ''; // Limpiamos la lista

    let plans;

    // Propuestas de planes según el clima
    if (weatherDescription.includes('lluvia')) {
        plans = [
            'Ir al cine',
            'Visitar un museo',
            'Disfrutar de una cafetería',
            'Ir a un centro comercial'
        ];
    } else if (weatherDescription.includes('nubes')) {
        plans = [
            'Ir a caminar por un parque',
            'Visitar una galería de arte',
            'Ir a una biblioteca',
            'Disfrutar de una clase de yoga en interiores'
        ];
    } else if (weatherDescription.includes('soleado')) {
        plans = [
            'Ir a la playa',
            'Hacer un picnic en el parque',
            'Salir a hacer senderismo',
            'Visitar un jardín botánico'
        ];
    } else if (weatherDescription.includes('nieve')) {
        plans = [
            'Ir a patinar sobre hielo',
            'Hacer una batalla de bolas de nieve',
            'Visitar una cabaña con chimenea',
            'Ver películas en casa con chocolate caliente'
        ];
    } else if (weatherDescription.includes('cielo claro')) {
        plans = [
            'Ir a la playa',
            'Hacer un picnic en el parque',
            'Salir a hacer senderismo',
            'Visitar un jardín botánico'
        ];
    
    }    else if (weatherDescription.includes('muy nuboso')) {
            plans = [
                'Ir a caminar por un parque',
                'Visitar una galería de arte',
                'Ir a una biblioteca',
                'Disfrutar de una clase de yoga en interiores'
            ];
    
    
         } else {
        plans = [
            'Explorar el centro de la ciudad',
            'Tomar fotos en lugares emblemáticos',
            'Hacer una visita guiada por la ciudad',
            'Probar la comida local en algún restaurante'
        ];
    }

    // Mostrar los planes en la lista
    plans.forEach(plan => {
        const li = document.createElement('li');
        li.textContent = plan;
        plansList.appendChild(li);
    });
}

// Configurar evento al hacer clic en el botón
document.getElementById('get-weather').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value;
    
    if (city) {
        const weatherDescription = await getWeather(city);
        
        if (weatherDescription) {
            document.getElementById('weather-description').textContent = weatherDescription;
            recommendPlans(weatherDescription);
        }
    } else {
        alert('Por favor, ingresa una ciudad.');
    }
});
