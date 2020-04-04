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

        loop: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            // when window width is >= 480px
            576: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 768px
            990: {
                slidesPerView: 3,
                spaceBetween: 35
            },
            // when window width is >= 768px
            1024: {
                slidesPerView: 4,
                spaceBetween: 15
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

    //Добавляем класс


    //Мобильное меню

    var menuMob = $('.mobile-menu__wrap'),
        menuMobBtn = $('[data-toggle=open-menu]'),
        closeBtn = $('.mobile-menu__close');

    menuMobBtn.on('click', function () {
        menuMob.toggleClass('mobile-menu--visible');
    });

    closeBtn.on('click', function () {
        menuMob.toggleClass('mobile-menu--visible');
    });



    /*Закрытие по фону*/

    $(document).click(function (e) {
        if ($(e.target).is('.mobile-menu')) {
            menuMob.toggleClass('mobile-menu--visible');
        }
    });

    /*Закрытие по кнопке*/

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            menuMob.toggleClass('mobile-menu--visible');
        }
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

    //Модальное окно

    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    fenetre = $('.thanks'),
        fenetreBtn = $('[data-toggle=thanks]'),
        closeFenetreBtn = $('.thanks__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    //Окно благодарности

    fenetreBtn.on('click', function () {
        fenetre.toggleClass('thanks--visible');
    });

    closeFenetreBtn.on('click', function () {
        fenetre.toggleClass('thanks--visible');
    });


    /*Закрытие по фону*/

    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });

    /*Закрытие по кнопке*/

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            modal.toggleClass('modal--visible');
        }
    });

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



    //Валидация форм

    //Модальное окно
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 8
            },
            // правило-объект (блок)
            userEmail: {
                required: true,
                email: true
            },
            policyCheckbox: {
                required: true
            },
            userQuestion: "required"

        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Врёшь, сволочь!",
                maxlength: "Чувак, у тебя залипла клава!"
            },
            userPhone: {
                required: "Тэляфон тожэ обызатэлэн!!!",
                minlength: "Добавь циферек, жалко что ли ?"
            },
            userEmail: {
                required: "Заполните поле",
                email: "Введите что-то типа name@domain.ru"
            },
            policyCheckbox: {
                required: "Поставь галку, редиска!"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log(modal);
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    fenetre.toggleClass('thanks--visible');
                }
            });
        }
    });


    //Секция "Записаться на бесплатный визит"

    $('.service-record__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 8
            },
            controlCheckbox: {
                required: true
            },
        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Врёшь, сволочь!",
                maxlength: "Чувак, у тебя залипла клава!"
            },
            userPhone: {
                required: "Телефон обязателен. Всё обязательно!",
                minlength: "Добавь циферек, жалко что ли ?"
            },
            controlCheckbox: {
                required: "Ничё не забыл?"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    fenetre.toggleClass('thanks--visible');
                }
            });
        }
    });


    //Футер

    $('.footer__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило {required:true}
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 7
            },
            // правило-объект (блок)
            footerCheckbox: {
                required: true
            },
            userQuestion: "required"

        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Врёшь, сволочь!",
                maxlength: "Чувак, у тебя залипла клава!"
            },
            userPhone: {
                required: "Телефон обязателен. Всё обязательно!",
                minlength: "Добавь циферек, жалко что ли ?",
            },
            userQuestion: {
                required: "Хотел спросить - спрашивай!"
            },
            footerCheckbox: {
                required: "Не забудь поставить галочку!)",
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    fenetre.toggleClass('thanks--visible');
                }
            });
        }
    });


    // маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {
        placeholder: "+7 (__) ___-__-__"
    });
    $('[type=tel2]').mask('+7(000) 000-00-00', {
        placeholder: "Ваш номер телефона"
    });
});