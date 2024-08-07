document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        direction: 'horizontal', 
        centeredSlides: false,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        mousewheel: {
            invert: true,
        },
        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: [0, 0, -400],  
                opacity: 0.5,              
            },
            next: {
                translate: ['100%', 0, 0], 
                opacity: 0.8,              
            },
        },
        parallax: true,
        resizeObserver: true,
        roundLengths: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 3000,  
        },
        speed: 800, 
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            touchStart: function() {
                document.querySelectorAll('.swiper-slide').forEach(slide => {
                    slide.classList.add('grabbing');
                });
            },
            touchEnd: function() {
                document.querySelectorAll('.swiper-slide').forEach(slide => {
                    slide.classList.remove('grabbing');
                });
            },
            transitionEnd: function() {
                document.querySelectorAll('.swiper-slide').forEach(slide => {
                    slide.classList.remove('grabbing');
                });
            }
        }
    });

    // Estado global para o cursor
    let isGrabbing = false;

    var swiperSlides = document.querySelectorAll('.swiper-slide');

    swiperSlides.forEach(slide => {
        slide.addEventListener('mousedown', function() {
            isGrabbing = true;
            this.classList.add('grabbing');
        });

        slide.addEventListener('mouseup', function() {
            if (isGrabbing) {
                isGrabbing = false;
                this.classList.remove('grabbing');
            }
        });

        slide.addEventListener('mouseleave', function() {
            if (isGrabbing) {
                this.classList.remove('grabbing');
            }
        });
    });

    document.addEventListener('mouseup', function() {
        if (isGrabbing) {
            isGrabbing = false;
            document.querySelectorAll('.swiper-slide').forEach(slide => {
                slide.classList.remove('grabbing');
            });
        }
    });
});