$(document).ready(function () {


    //Слайдер секции "Hero"  на главной странице

    var heroSwiper = new Swiper('.slider-hero', {
        pagination: {
            el: '.swiper-pagination',
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
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });





    //Слайдер секции "Фотогалерея"  на главной странице

    var gallerySwiper = new Swiper('.slider-gallery', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            // nextEl: '.slider-gallery__next',
            //prevEl: '.slider-galler__prev',
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    //Общее для типовых слайдеров как в Hero

    var nextBtn = $('.swiper-button-next');
    var prevtBtn = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    nextBtn.css('left', prevtBtn.width() + 20 + bullets.width() + 20)
    bullets.css('left', prevtBtn.width() + 20)





    //Прежний файл

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

    //Слайдер секции Завершенные проекты


    var mySwiper = new Swiper('.slider-project', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.slider-project__next',
            prevEl: '.slider-project__prev',
        },
    });


    //Слайдер секции 6 шагов

    //часть 1
    var mySwiper2 = new Swiper('.slider-six-steps', {
        pagination: {
            el: '.swiper-six-top',
            type: 'fraction',
        },
    });
    //часть 2
    _ = new Swiper('.six-steps-second', {
        controller: {
            control: [mySwiper2]
        },
        pagination: {
            el: '.swiper-six-bottom',
        },
        navigation: {
            nextEl: '.swiper-six-steps-next',
            prevEl: '.swiper-six-steps-prev',
        },
    });

    var nextBtn = $('.swiper-button-next');
    var prevtBtn = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    nextBtn.css('left', prevtBtn.width() + 20 + bullets.width() + 20)
    bullets.css('left', prevtBtn.width() + 20)



    // var nextStepsBtn = $('.swiper-six-steps-next'),
    //     prevStepsBtn = $('.swiper-six-steps-prev'),
    //     bullets = $('.swiper-pagination');

    // nextStepsBtn.css('left', prevStepsBtn.width() + 20 + bullets.width() + 65)
    //  bullets.css('left', prevStepsBtn.width() + 20)



    //Слайдер 6 шагов переопределение



    var g = $(".swiper-six-steps-next"),
        C = $(".swiper-six-steps-prev"),
        w = $(".swiper-six-bottom");
    g.css("left", C.width() + 20 + w.width() + 20),
        w.css("left", C.width() + 20),
        getAllSteps = $(".slider-titles__block"),
        getAllSwipers = $(".swiper-six__content"),
        getPrevClick = $(".swiper-six-steps-prev"),
        getNextClick = $(".swiper-six-steps-next"),
        getNextClick.click(function () {

            for (getAllSteps.each(function (e, t) {
                    $(t).removeClass("active")
                }), i = 1; i < 7; i++)
                if (_.activeIndex === i) {
                    let e = _.activeIndex + 1;
                    $(".slider-titles__block--" + e).addClass("active")
                }
        }),

        getPrevClick.click(function () {
            for (getAllSteps.each(function (e, t) {
                    $(t).removeClass("active")
                }), i = 0; i < 6; i++)
                if (_.activeIndex === i) {
                    let e = _.activeIndex + 1;
                    $(".slider-titles__block--" + e).addClass("active")
                }
        }),


        $(".slider-titles__block--1").click(function () {
            getAllSteps.each(function (e, t) {
                $(t).removeClass("active")
            }), $(".slider-titles__block--1").addClass("active"), _.slideTo(0, 700)
        }),

        $(".slider-titles__block--2").click(function () {
            getAllSteps.each(function (e, t) {
                    $(t).removeClass("active")
                }),


                $(".slider-titles__block--2").addClass("active"), _.slideTo(1, 700)
        }), $(".slider-titles__block--3").click(function () {
            getAllSteps.each(function (e, t) {
                $(t).removeClass("active")
            }), $(".slider-titles__block--3").addClass("active"), _.slideTo(2, 700)
        }), $(".slider-titles__block--4").click(function () {
            getAllSteps.each(function (e, t) {
                $(t).removeClass("active")
            }), $(".slider-titles__block--4").addClass("active"), _.slideTo(3, 700)
        }), $(".slider-titles__block--5").click(function () {
            getAllSteps.each(function (e, t) {
                $(t).removeClass("active")
            }), $(".slider-titles__block--5").addClass("active"), _.slideTo(4, 700)
        }), $(".slider-titles__block--6").click(function () {
            getAllSteps.each(function (e, t) {
                $(t).removeClass("active")
            }), $(".slider-titles__block--6").addClass("active"), _.slideTo(5, 700)
        }),






        new WOW({
            mobile: false
        }).init();



    //*Анимация

    var block_show = false;

    function scrollTracking() {
        if (block_show) {
            return false;
        }

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.move').offset().top;
        var eh = $('.move').outerHeight();
        var dh = $(document).height();

        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            block_show = true;
            // Код анимации
            $('.move div:eq(0)').show('fast', function () {
                $(this).next().show('fast', arguments.callee);
            });
        }
    }

    // Валидация формы

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

    //Секция "Control"

    $('.control__form').validate({
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


    //Карта яндекса

    var design = $('.design');
    var designTop = design.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > designTop) {
            $('#map').html('<script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac8349320c5b8696fc833ab8e2145acf66c38daf3cbcff8715af920d84c4c320c&amp;width=900&amp;height=465&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind('scroll')
        }
    });

    // Плавный скролинг для верхнего меню

    $(document).ready(function () {
        $("#top-menu").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        });
    });

    // Плавный скролинг для кнопки "Листайте вниз"

    $(document).ready(function () {
        $("#scroll-down").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 800 мс
            $('body,html').animate({
                scrollTop: top
            }, 800);
        });
    });

    // Плавный скролинг для нижнего меню

    $(document).ready(function () {
        $("#bottom-menu").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 800 мс
            $('body,html').animate({
                scrollTop: top
            }, 800);
        });
    });

    //Ленивая загрузка изображений

    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });

});

//Ещё загрузка изображений

//document.addEventListener("DOMContentLoaded", function () {
//var e, r = document.querySelectorAll("img.lazyload");
// function o() {
//     e && clearTimeout(e), e = setTimeout(function () {
//         var e = window.pageYOffset;
//         r.forEach(function (r) {
//             r.offsetTop < window.innerHeight + e && (r.src = r.dataset.src, r.classList.remove//("lazyload"))
//         }), 0 == r.length && (document.removeEventListener("scroll", o),
//             window.removeEventListener("resize", o),
//             window.removeEventListener("orientationChange", o))
//     }, 20)
// }
// document.addEventListener("scroll", o),
//     window.addEventListener("resize", o),
//    window.addEventListener("orientationChange", o)
//})