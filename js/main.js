(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Main News carousel
    $(".main-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        center: true,
    });


    // Tranding carousel
    $(".tranding-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });


    // Carousel item 1
    $(".carousel-item-1").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // Carousel item 2
    $(".carousel-item-2").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Carousel item 3
    $(".carousel-item-3").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    

    // Carousel item 4
    $(".carousel-item-4").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
})(jQuery);

// Sliding Images
// let currentSlide = 0;

// function slide(direction) {
//     const sliderWrapper = document.querySelector('.slider-wrapper');
//     const slides = Array.from(document.querySelectorAll('.news-item')).slice(0, 8); // Limit to 8 slides
//     const totalSlides = slides.length;
//     const visibleSlides = 4; // Number of visible slides at a time
//     const maxSlides = totalSlides - visibleSlides;

//     console.log('Filtered Total Slides:', totalSlides);

//     currentSlide += direction;

//     if (currentSlide < 0) {
//         currentSlide = 0; // Prevent sliding back beyond the first slide
//     } else if (currentSlide > maxSlides) {
//         currentSlide = maxSlides; // Prevent sliding forward beyond the last slide
//     }

//     console.log('After sliding:');
//     console.log('Current Slide:', currentSlide);

//     const slideWidth = slides[0].clientWidth;
//     sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }

// // Add event listeners for the navigation buttons
// document.querySelector('.prev').addEventListener('click', () => slide(-1));
// document.querySelector('.next').addEventListener('click', () => slide(1));

// Sliding Images
function slide(direction, sliderId) {
    const sliderWrapper = document.querySelector(`#${sliderId} .slider-wrapper`);
    const slides = Array.from(document.querySelectorAll(`#${sliderId} .news-item`)).slice(0, 8); // Limit to 8 slides
    const totalSlides = slides.length;
    const visibleSlides = 4; // Number of visible slides at a time
    const maxSlides = totalSlides - visibleSlides;
    let currentSlide = sliderWrapper.dataset.currentSlide ? parseInt(sliderWrapper.dataset.currentSlide) : 0;

    console.log('Filtered Total Slides:', totalSlides);

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0; // Prevent sliding back beyond the first slide
    } else if (currentSlide > maxSlides) {
        currentSlide = maxSlides; // Prevent sliding forward beyond the last slide
    }

    console.log('After sliding:');
    console.log('Current Slide:', currentSlide);

    sliderWrapper.dataset.currentSlide = currentSlide;
    const slideWidth = slides[0].clientWidth;
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Add event listeners for the navigation buttons
document.querySelectorAll('.prev').forEach(button => {
    button.addEventListener('click', () => slide(-1, button.dataset.slider));
});
document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => slide(1, button.dataset.slider));
});
