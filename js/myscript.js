! function ($) {
    "use strict";
    $(window).load(function () {
        $(document).find('body').addClass('loaded');
    });

    $(document).ready(function () {
        $('.show_text').on('click', function () {
            if ($(this).prev().is(':visible')) {
                $(this).text('Подробнее');
                $(this).prev().hide('slow');
            } else {
                $(this).text('Скрыть подробности');
                $(this).prev().show('fast');
            }
        });



        $('.btn_f').on('click', function () {
            if ($(this).prev().is(':visible')) {
                $(this).text('Читать далее');
                $(this).prev().hide('slow');
            } else {
                $(this).text('Скрыть подробности');
                $(this).prev().show('fast');
            }
        });

        $('.btn_m').on('click', function () {
            if ($(this).prev().is(':visible')) {
                $(this).text('Читать далее');
                $(this).prev().hide('slow');
            } else {
                $(this).text('Скрыть подробности');
                $(this).prev().show('fast');
            }
        });
        /*Кнопка прокрутки - стандартная*/
        $(window).scroll(function () {
            if ($(window).scrollTop() > 140) {
                $('#scroll_top').fadeIn();
             //   $('#scroll_top').fadeIn().css('display', 'flex');
            } else {
                $('#scroll_top').fadeOut();
            }
        });

        $('#scroll_top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        /*Кнопка прокрутки - боковое меню "Виды Животных"*/
        $(window).scroll(function () {
            if ($(window).scrollTop() > 160) {
                $('#scroll_top_castom').show();
            } else {
                $('#scroll_top_castom').hide();
            }
        });

        $('#scroll_top_castom').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        //Скролинг кнопок на странице Континент

        $(".left").on('click', function () {
            $('html,body').animate({
                scrollTop: $('.kont-row3').offset().top + "px"
            }, 600);
        });


        // Плавный скролинг для страницы "Виды Животных"

        $("#animals-menu").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top - 100;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({
                scrollTop: top
            }, 800);
        });

        //Страница "Виды животных" - кнопка "В начало"

        $('.animals-button-top').on('click', function () {
            $('html,body').animate({
                scrollTop: $('#top').offset().top + "px"
            }, 1300);
        });

        //Общеее решение по плавным скроллам по странице с якорными ссылками
        //$("a").click(function () {
        //    var elementClick = $(this).attr("href");
        //  var destination = $(elementClick).offset().top;
        //  $('html, body').animate({ scrollTop: destination }, 600);
        //  return false;
        //});



    });

}(jQuery);







// Плавный скролинг для кнопок страницы "Континент"

// $(document).ready(function () {
// $("#randomid").on("click", "a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
//   event.preventDefault();
//забираем идентификатор блока с атрибута href
//  var id = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
//      top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
//  $('body,html').animate({
//      scrollTop: top
//  }, 1000);
// });
//});