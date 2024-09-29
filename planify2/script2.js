document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Evita que el enlace redirija
      const submenu = this.nextElementSibling;
      
      // Si el submenú está visible, lo oculta, si no, lo muestra
      submenu.classList.toggle('show-submenu');
    });
  });