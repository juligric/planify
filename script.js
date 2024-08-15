// Inicialización del Swiper con las opciones requeridas
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,          // Muestra 5 imágenes a la vez
    spaceBetween: 10,          // Espacio entre las imágenes en píxeles
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,               // Desactiva el loop (puedes activarlo si lo deseas)
    freeMode: false,           // Elimina el modo libre para un desplazamiento fijo
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        }
    }
});
