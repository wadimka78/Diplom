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
//Добавляем класс
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
    spaceBetween: 15,
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