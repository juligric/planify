// get city from localStorage

// get clima from that city

// for clima: get planes from that specific type of clima 

// Obtener la ciudad de Local Storage
let ciudad = sessionStorage.getItem("ciudad");
function obtenerClima(ciudad) {
    const apiKey = '8bf54ab6c5f08ef8bc5a6b39cd7a3e3a'; // Coloca tu API Key aquí
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const clima = {
                lluvia: data.weather.some(w => w.main === 'Rain'),
                nubes: data.clouds.all > 50,
                soleado: data.weather.some(w => w.main === 'Clear'),
                cieloClaro: data.weather.some(w => w.main === 'Clear') && data.clouds.all < 20,
                muyNubloso: data.clouds.all > 70,
                nieve: data.weather.some(w => w.main === 'Snow'),
            };

            // Aquí puedes usar el clima para recomendar planes
            console.log(clima);
        })
        .catch(error => console.error('Error al obtener el clima:', error));
}

// Llamada a la función con la ciudad obtenida de Local Storage
ciudad = sessionStorage.getItem("ciudad");
if (ciudad) {
    obtenerClima(ciudad);
} else {
    console.log("No se encontró la ciudad en Local Storage");
}
