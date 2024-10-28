const swiper = new Swiper('.mySwiper', {
    effect: 'cards', 
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function calcularPlan() {
    // Obtener las respuestas seleccionadas
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
  
    // Verificar que se hayan respondido todas las preguntas
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      document.getElementById('resultado').innerHTML = 'Por favor, responde todas las preguntas.';
      return;
    }
  
    // Definir planes según cantidad de personas y preferencias
    const planes = {
      '2': {
        'a': 'Cine (relajado)',
        'b': 'Pilates (activo)',
        'c': 'Museo (curioso)',
        'd': 'Cerámica (creativo)'
      },
      '4-6': {
        'a': 'Cine (relajado)',
        'b': 'Parque de diversiones (activo)',
        'c': 'Escape room (curioso)',
        'd': 'Pintar remeras (creativo)'
      },
      '6-8': {
        'a': 'Bowling (relajado)',
        'b': 'Paintball (activo)',
        'c': 'Zoológico (curioso)',
        'd': 'Competencia de cocina (creativo)'
      },
      '8+': {
        'a': 'Picnic (relajado)',
        'b': 'Fútbol (activo)',
        'c': 'Guía turística (curioso)',
        'd': 'Búsqueda del tesoro (creativo)'
      }
    };
  
    // Definir recomendaciones similares
    const recomendaciones = {
      'Cine (relajado)': ['Teatro', 'Concierto'],
      'Pilates (activo)': ['Yoga', 'Escalada'],
      'Museo (curioso)': ['Galería de arte', 'Exposición de ciencia'],
      'Cerámica (creativo)': ['Pintura', 'Taller de manualidades'],
      'Parque de diversiones (activo)': ['Karting', 'Mini golf'],
      'Escape room (curioso)': ['Casa del terror', 'Paseo virtual'],
      'Pintar remeras (creativo)': ['Taller de costura', 'Diseño de estampas'],
      'Bowling (relajado)': ['Billar', 'Cafetería con juegos'],
      'Paintball (activo)': ['Láser tag', 'Gimnasio'],
      'Zoológico (curioso)': ['Acuario', 'Parque natural'],
      'Competencia de cocina (creativo)': ['Taller de repostería', 'Clase de cocina internacional'],
      'Picnic (relajado)': ['Paseo por el parque', 'Juegos de mesa al aire libre'],
      'Fútbol (activo)': ['Voleibol', 'Carrera de relevos'],
      'Guía turística (curioso)': ['Visita a monumentos', 'Tour en bicicleta'],
      'Búsqueda del tesoro (creativo)': ['Competencia de arte', 'Taller de escritura creativa']
    };
  
    // Obtener el plan ideal según las respuestas
    const cantidadPersonas = q1.value;
    const preferencia = q2.value;
  
    const planIdeal = planes[cantidadPersonas][preferencia];
  
    // Obtener las recomendaciones similares
    const planesSimilares = recomendaciones[planIdeal];
  
    // Mostrar el resultado y las recomendaciones
    document.getElementById('resultado').innerHTML = `Tu plan ideal es: ${planIdeal}`;
    document.getElementById('recomendaciones').innerHTML = `Te recomendamos también: ${planesSimilares.join(" y ")}`;
  }
  