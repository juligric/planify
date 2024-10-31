

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
  
  
  
    // Obtener el plan ideal según las respuestas
    const cantidadPersonas = q1.value;
    const preferencia = q2.value;
  
    const planIdeal = planes[cantidadPersonas][preferencia];
  
  
   
    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `Tu plan ideal es: ${planIdeal}`;
  }
  