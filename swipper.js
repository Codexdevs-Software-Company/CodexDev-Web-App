// Slider js code

const swiper = new Swiper('.swiper', {
    loop: true, // Infinite loop mode
    autoplay: {
        delay: 3000, // Slide auto-change every 3 seconds
        disableOnInteraction: false, // Click ya touch ke baad bhi autoplay chalta rahe
    },
    speed: 800, // Smooth transition speed (800ms)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Dots par click karne se slide change ho
    },
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    effect: 'fade', // Smooth fade transition (or use "slide" for normal)
});


const swiperContainer = document.querySelector('.swiper');

    swiperContainer.addEventListener('mouseenter', () => {
        swiper.autoplay.stop(); // Pause slide
    });

    swiperContainer.addEventListener('mouseleave', () => {
        swiper.autoplay.start(); // Resume slide
    });

// slider js code end