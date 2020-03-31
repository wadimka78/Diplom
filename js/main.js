$(document).ready(function () {


    //Ленивая загрузка изображений

    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });


    new WOW({
        mobile: false
    }).init();

});

    //Слайдер секции "Hero"  на главной странице

    var heroSwiper = new Swiper('.slider-hero', {
        loop: true,
        pagination: {
            el: '.slider-hero__pagination',
            clickable: true,
            //  type: 'bullets',
        },
        navigation: {
            // nextEl: '.slider-gallery__next',
            //  prevEl: '.slider-galler__prev',
            //   nextEl: '.swiper-button-next',
            //  prevEl: '.swiper-button-prev',
        },
    });


    // Слайдер 1 экран - секция "Наши услуги"

    var serviceSwiper = new Swiper('.slider-service', {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,

        navigation: {
            nextEl: '.slider-service__next',
            prevEl: '.slider-service__prev',
        },
        pagination: {
            el: '.slider-service__pagination',
            clickable: true,
        },
    });



    //Слайдер секции "Фотогалерея"  на главной странице



    var gallerySwiper = new Swiper('.slider-gallery', {
        cssMode: true,
    //    loop: true,
        navigation: {
            nextEl: '.slider-gallery__next',
            prevEl: '.slider-gallery__prev',
        },
        pagination: {
          el: '.slider-gallery__pagination',    
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });


    //Общее для типовых слайдеров как в Hero


   // var nextBtn = $('.swiper-button-next');
   // var prevtBtn = $('.swiper-button-prev');
   // var bullets = $('.swiper-pagination');

    //nextBtn.css('left', prevtBtn.width() + 20 + bullets.width() + 20)
    //bullets.css('left', prevtBtn.width() + 20)




    /*Кнопка прокрутки*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });



