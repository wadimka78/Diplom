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

//Кнопка "Выбрать клуб"

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("select--toggle");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.select__button')) {

        var dropdowns = document.getElementsByClassName("select__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('select--toggle')) {
                openDropdown.classList.remove('select--toggle');
            }
        }
    }
}
//Добавляем класс в верхнюю кнопку "Выбор клуба"
$('.top-header__select').click(function () {
    if (!$(this).is('.top-header__ouvert')) {
        $(this).addClass('top-header__ouvert');
        //    $(this).find('.select__dropdown-content').slideDown(300);
    } else {
        $(this).removeClass('top-header__ouvert');
        //    $(this).find('.select__dropdown-content').slideUp(300);
    }
});
//  $('.new-adr .item').click(function(){
//   $(this).parents('.new-adr').addClass("active");
//   $(this).parents('.new-adr').find('.ins').html($(this).html());
//   $.ajax({
//     url: '/ajax/save_city.php',
//     type: 'GET',
//   data: {'CITY_ID': $(this).attr('data-id')},
//   success: function(responce){
//       window.location.href = window.location.href.split('?')[0];
//   }
//});
//  });

//Слайдеры ГЛАВНОЙ страницы

//Слайдер секции "Hero"

var heroSwiper = new Swiper('.slider-hero', {
    loop: true,
    pagination: {
        el: '.slider-hero__pagination',
        clickable: true,
        //  type: 'bullets',
    },
});

//Слайдер секции "Фотогалерея" 



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

// Слайдер  - секция "Наши услуги"

var serviceSwiper = new Swiper('.slider-service', {
  //  slidesPerView: 5,
   // spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 768px
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 62.857rem
        1200: {
            slidesPerView: 5,
            spaceBetween: 15
        }
    },
    navigation: {
        nextEl: '.slider-service__next',
        prevEl: '.slider-service__prev',
    },
    pagination: {
        el: '.slider-service__pagination',
        clickable: true,
    },
});







//Слайдеры страницы ЩЁЛКОВО

//Слайдер секции "Hero-Щёлково"  на главной странице



var shelkovoSwiper = new Swiper('.shelkovo-gallery', {
    loop: true,
    pagination: {
        el: '.shelkovo-gallery__pagination',
        clickable: true,
    },
});


//Форма секции "Выбор карты на сколько-то месяцев"


$('.club-cards__form label[for*="select-month-"]').click(function () {
    $('.club-cards__form label[for*="select-month-"]').removeClass("active-month");
    $(this).toggleClass("active-month");
})



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

//Карта яндекса - Щёлково

var service = $('.service');
var serviceTop = service.offset().top;
$(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > serviceTop) {
        $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aedf6c7282a79306d65c4ffbd9a5456f5848ecb3a26dd480eca749a350882b286&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false"></script>')
        $(window).unbind('scroll')
    }
});

//Карта яндекса - Мозаика

var service = $('.abonement--one');
var serviceTop = service.offset().top;
$(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > serviceTop) {
        $('#map-mozaika').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af52a2a80ed81730f62111b8ba628c62f4ab3931be3e7063533c360f9cc789ba0&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false"></script>')
        $(window).unbind('scroll')
    }
});




//Отключаем прокрутку

//  myMap.behaviors.disable('scrollZoom')
//  myMap.events.add('click', function () {
//     myMap.behaviors.enable('scrollZoom')
//  })


//Пробуем убрать рамку при клике
jQuery(document).ready(function () {
    jQuery("input").focus(
        function () {
            this.blur();
        });
});