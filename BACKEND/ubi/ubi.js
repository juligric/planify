console.log(navigator.geolocation);


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("La geolocalización no está soportada por este navegador.");
  }
  
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    obtenerClima(latitude, longitude);
  }
  
  function error() {
    alert("No se pudo obtener tu ubicación.");
  }
  


function obtenerClima(lat, lon) {
    const apiKey = 'dabf29bcf8a4922e881f034063d58c6a';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => recomendarPlanes(data));
  }

  
  function recomendarPlanes(clima) {
    const temperatura = clima.main.temp;
    const descripcion = clima.weather[0].description;
  
    let plan1 = '';
    let plan2 = '';
  
    if (temperatura > 25) {
      plan1 = "Ir a la playa";
      plan2 = "Hacer una actividad al aire libre como andar en bicicleta";
    } else if (temperatura > 15 && temperatura <= 25) {
      plan1 = "Ir a un parque";
      plan2 = "Salir a caminar o hacer un picnic";
    } else {
      plan1 = "Visitar un museo";
      plan2 = "Ir al cine o a un centro comercial";
    }
  
    document.getElementById('planes').innerHTML = `
      <p>El clima es: ${descripcion}, ${temperatura}°C</p>
      <p>Te recomendamos: </p>
      <ul>
        <li>${plan1}</li>
        <li>${plan2}</li>
      </ul>
    `;
  }
  