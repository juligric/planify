document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Evita que el enlace redirija
      const submenu = this.nextElementSibling;
      
      // Si el submenú está visible, lo oculta, si no, lo muestra
      submenu.classList.toggle('show-submenu');
    });
  });

  function mostrarInfo(opcion) {
    const quizDiv = document.querySelector('.quiz');
    let contenido = '';

    // Cambiar el contenido dependiendo de la opción seleccionada
    switch (opcion) {
        case 'infoParques':
            contenido = '<p>Información sobre Parques.</p>';
            break;
        case 'infoTrepar':
            contenido = '<p>Información sobre Trepar.</p>';
            break;
        case 'infoExperiencias':
            contenido = '<p>Información sobre Experiencias.</p>';
            break;
        case 'infoCine':
            window.location.href = 'cine.html'; // Redirige a otra página
            return; // Sale de la función para evitar el cambio de contenido
        default:
            contenido = '<p>Selecciona una opción válida.</p>';
    }

    // Actualiza el contenido de la sección "quiz"
    quizDiv.innerHTML = contenido;
}