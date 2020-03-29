$(document).ready(function () {
    let e = $(".modal"),
        t = $("[data-toggle=modal]"),
        s = $(".modal__close"),
        a = $(".scrollup"),
        l = $(".modal-success__close"),
        o = $(".modal-success"),
        r = $(".modal__title"),
        n = $(".modal__form"),
        c = $(".modal__success-message");
    [].forEach.call(document.querySelectorAll("img[data-src]"), function (e) {
        e.setAttribute("src", e.getAttribute("data-src")), e.onload = function () {
            e.removeAttribute("data-src")
        }
    }), (new WOW).init();
    const d = $(".header");
    $(".nav__item").click(function (e) {
        e.preventDefault();
        var t = $(this);
        $("html, body").animate({
            scrollTop: $(t.attr("href")).position().top - d.outerHeight()
        }, 1e3)
    });
    const m = $(".hero__scroll-down");

    function p() {
        $(".modal__form")[0].reset(), c.hasClass("modal__success-message--visible") && c.removeClass("modal__success-message--visible"), r.hasClass("modal__title--hidden") && r.removeClass("modal__title--hidden"), n.hasClass("modal__form--hidden") && n.removeClass("modal__form--hidden"), e.toggleClass("modal--visible")
    }
    m.click(function (e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: $(m.attr("href")).position().top - d.outerHeight()
        }, 1e3)
    }), $(".logo").click(function (e) {
        e.preventDefault();
        var t = $(this);
        $("html, body").animate({
            scrollTop: $(t.attr("href")).position().top - d.outerHeight()
        }, 1e3)
    }), t.click(function () {
        e.toggleClass("modal--visible")
    }), s.click(function () {
        p()
    }), l.click(function () {
        o.removeClass("modal-success--visible")
    }), $(document).keydown(function (e) {
        o.hasClass("modal-success--visible") && 27 == e.which && o.removeClass("modal-success--visible")
    }), o.click(function (e) {
        o.is(e.target) && 0 === o.has(e.target).length && o.removeClass("modal-success--visible")
    }), $(document).keydown(function (t) {
        e.hasClass("modal--visible") && 27 == t.which && p()
    }), e.click(function (t) {
        e.is(t.target) && 0 === e.has(t.target).length && p()
    }), $(window).scroll(function () {
        window.matchMedia("(max-width: 992px)").matches ? a.removeClass("scrollup--visible") : $(this).scrollTop() > 150 ? (a.addClass("scrollup--visible"), a.fadeIn()) : (a.fadeOut(), a.removeClass("scrollup--visible"))
    }), a.click(function () {
        $("html").animate({
            scrollTop: 0
        }, 900)
    }), $(function () {
        $("#modal-user-phone").data("holder", $("#modal-user-phone").attr("placeholder")), $("#modal-user-phone").focusin(function () {
            $("#modal-user-phone").mask("+7(000) 000-00-00", {
                placeholder: "+7 (___) ___-__-__"
            }), $(this).attr("placeholder", "+7 (___) ___-__-__")
        }), $("#modal-user-phone").focusout(function () {
            $(this).attr("placeholder", $(this).data("holder")), $("#modal-user-phone").cleanVal()
        })
    }), $(function () {
        $("#control-user-phone").data("holder", $("#control-user-phone").attr("placeholder")), $("#control-user-phone").focusin(function () {
            $("#control-user-phone").mask("+7(000) 000-00-00", {
                placeholder: "+7 (___) ___-__-__"
            }), $(this).attr("placeholder", "+7 (___) ___-__-__")
        }), $("#control-user-phone").focusout(function () {
            $(this).attr("placeholder", $(this).data("holder")), $("#control-user-phone").cleanVal()
        })
    }), $(function () {
        $("#sample-user-phone").data("holder", $("#sample-user-phone").attr("placeholder")), $("#sample-user-phone").focusin(function () {
            $("#sample-user-phone").mask("+7(000) 000-00-00", {
                placeholder: "+7 (___) ___-__-__"
            }), $(this).attr("placeholder", "+7 (___) ___-__-__")
        }), $("#sample-user-phone").focusout(function () {
            $(this).attr("placeholder", $(this).data("holder")), $("#sample-user-phone").cleanVal()
        })
    }), $(function () {
        $("#footer-user-phone").data("holder", $("#footer-user-phone").attr("placeholder")), $("#footer-user-phone").focusin(function () {
            $("#footer-user-phone").mask("+7(000) 000-00-00", {
                placeholder: "+7 (___) ___-__-__"
            }), $(this).attr("placeholder", "+7 (___) ___-__-__")
        }), $("#footer-user-phone").focusout(function () {
            $(this).attr("placeholder", $(this).data("holder")), $("#footer-user-phone").cleanVal()
        })
    });




    new Swiper(".swiper1", {
        pagination: {
            el: ".swiper-pagination",
            type: "bullets"
        },


        navigation: {
            nextEl: ".swiper1__next",
            prevEl: ".swiper1__prev"
        }
    });


    var u = new Swiper(".swiper2", {
            fadeEffect: {
                crossFade: !0
            },
            effect: "fade",
            pagination: {
                el: ".pagination-top",
                type: "fraction"
            }
        }),



        _ = new Swiper(".swiper3", {
            controller: {
                control: [u]
            },
            fadeEffect: {
                crossFade: !0
            },
            effect: "fade",
            pagination: {
                el: ".pagination-bottom"
            },
            navigation: {
                nextEl: ".swiper2-next",
                prevEl: ".swiper2-prev"
            }
        }),


        h = (new Swiper(".swiper4", {
            fadeEffect: {
                crossFade: !0
            },
            effect: "fade",
            navigation: {
                nextEl: ".swiper4__next",
                prevEl: ".swiper4__prev"
            }
        }), 
        

        
        $(".swiper-button-next")),
        f = $(".swiper-button-prev"),
        v = $(".swiper-pagination");
    h.css("left", f.width() + 20 + v.width() + 20), v.css("left", f.width() + 20);




    var g = $(".swiper2-next"),
        C = $(".swiper2-prev"),
        w = $(".pagination-bottom");
    g.css("left", C.width() + 20 + w.width() + 20),
     w.css("left", C.width() + 20),
      getAllSteps = $(".steps-content__step"),
       getAllSwipers = $(".swiper2__item"),
        getPrevClick = $(".swiper2-prev"), 
        getNextClick = $(".swiper2-next"), 
        getNextClick.click(function () {

        for (getAllSteps.each(function (e, t) {
                $(t).removeClass("active")
            }), i = 1; i < 7; i++)
            if (_.activeIndex === i) {
                let e = _.activeIndex + 1;
                $(".steps-content__step--" + e).addClass("active")
            }
    }),
    
    getPrevClick.click(function () {
        for (getAllSteps.each(function (e, t) {
                $(t).removeClass("active")
            }), i = 0; i < 6; i++)
            if (_.activeIndex === i) {
                let e = _.activeIndex + 1;
                $(".steps-content__step--" + e).addClass("active")
            }
    }), $(".steps-content__step--1").click(function () {
        getAllSteps.each(function (e, t) {
            $(t).removeClass("active")
        }), $(".steps-content__step--1").addClass("active"), _.slideTo(0, 700)
    }), $(".steps-content__step--2").click(function () {
        getAllSteps.each(function (e, t) {
            $(t).removeClass("active")
        }), $(".steps-content__step--2").addClass("active"), _.slideTo(1, 700)
    }), $(".steps-content__step--3").click(function () {
        getAllSteps.each(function (e, t) {
            $(t).removeClass("active")
        }), $(".steps-content__step--3").addClass("active"), _.slideTo(2, 700)
    }), $(".steps-content__step--4").click(function () {
        getAllSteps.each(function (e, t) {
            $(t).removeClass("active")
        }), $(".steps-content__step--4").addClass("active"), _.slideTo(3, 700)
    }), $(".steps-content__step--5").click(function () {
        getAllSteps.each(function (e, t) {
            $(t).removeClass("active")
        }), $(".steps-content__step--5").addClass("active"), _.slideTo(4, 700)
    }), $(".steps-content__step--6").click(function () {
        getAllSteps.each(function (e, t) {
            $(t).removeClass("active")
        }), $(".steps-content__step--6").addClass("active"), _.slideTo(5, 700)
    }),
    
    
    
    
    
    
    
    
    $(".control__form").validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            controlUserName: {
                required: !0,
                minlength: 2
            },
            controlUserPhone: {
                required: !0,
                minlength: 17
            },
            controlCheckbox: {
                required: !0
            }
        },
        messages: {
            controlUserName: {
                required: "Заполните поле",
                minlength: "Введите не менее 2 символов"
            },
            controlUserPhone: {
                required: "Заполните поле",
                minlength: "Введите не менее 10 цифр"
            },
            controlCheckbox: "Подтвердите соглашение"
        },
        submitHandler: function (e) {
            $.ajax({
                type: "POST",
                url: "controlSend.php",
                data: $(e).serialize(),
                success: function (t) {
                    return $(e)[0].reset(), o.addClass("modal-success--visible"), ym("61237666", "reachGoal", "broadcast"), !0
                }
            })
        }
    }), $(".modal__form").validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            modalUserName: {
                required: !0,
                minlength: 2
            },
            modalUserPhone: {
                required: !0,
                minlength: 17
            },
            modalUserEmail: {
                required: !0,
                email: !0
            },
            modalCheckbox: {
                required: !0
            }
        },
        messages: {
            modalUserName: {
                required: "Заполните поле",
                minlength: "Введите не менее 2 символов"
            },
            modalUserPhone: {
                required: "Заполните поле",
                minlength: "Введите не менее 10 цифр"
            },
            modalUserEmail: {
                required: "Заполните поле",
                email: "Введите корректный email"
            },
            modalCheckbox: "Подтвердите соглашение"
        },
        submitHandler: function (e) {
            $.ajax({
                type: "POST",
                url: "modalSend.php",
                data: $(e).serialize(),
                success: function (t) {
                    return $(e)[0].reset(), r.addClass("modal__title--hidden"), n.addClass("modal__form--hidden"), c.addClass("modal__success-message--visible"), ym("61237666", "reachGoal", "callback"), !0
                }
            })
        }
    }), $(".sample__form").validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            sampleUserName: {
                required: !0,
                minlength: 2
            },
            sampleUserPhone: {
                required: !0,
                minlength: 17
            },
            sampleUserEmail: {
                required: !0,
                email: !0
            },
            sampleCheckbox: {
                required: !0
            }
        },
        messages: {
            sampleUserName: {
                required: "Заполните поле",
                minlength: "Введите не менее 2 символов"
            },
            sampleUserPhone: {
                required: "Заполните поле",
                minlength: "Введите не менее 10 цифр"
            },
            sampleUserEmail: {
                required: "Заполните поле",
                email: "Введите корректный email"
            },
            sampleCheckbox: "Подтвердите соглашение"
        },
        submitHandler: function (e) {
            $.ajax({
                type: "POST",
                url: "sampleSend.php",
                data: $(e).serialize(),
                success: function (t) {
                    return $(e)[0].reset(), o.addClass("modal-success--visible"), ym("61237666", "reachGoal", "request"), !0
                }
            })
        }
    }), $(".footer__form").validate({
        errorElement: "div",
        errorClass: "invalid",
        ignore: ":disabled",
        rules: {
            footerUserName: {
                required: !0,
                minlength: 2
            },
            footerUserPhone: {
                required: !0,
                minlength: 17
            },
            footerUserText: {
                required: !0
            },
            footerCheckbox: {
                required: !0
            }
        },
        messages: {
            footerUserName: {
                required: "Заполните поле",
                minlength: "Введите не менее 2 символов"
            },
            footerUserPhone: {
                required: "Заполните поле",
                minlength: "Введите не менее 10 цифр"
            },
            footerUserText: {
                required: "Заполните поле"
            },
            footerCheckbox: "Подтвердите соглашение"
        },
        submitHandler: function (e) {
            $.ajax({
                type: "POST",
                url: "footerSend.php",
                data: $(e).serialize(),
                success: function (t) {
                    return $(e)[0].reset(), o.addClass("modal-success--visible"), ym("61237666", "reachGoal", "questions"), !0
                }
            })
        }
    });
    let b = $(".gallary"),
        k = $(".implement__list-item");

    function x(e) {
        e.target.playVideo()
    }
    k.click(function () {
        for (k.removeClass("implement__list-item--active"), $(this).addClass("implement__list-item--active"), b.fadeOut(500), b.addClass("gallary--hidden"), i = 1; i < 12; i++) $(this).hasClass("item-" + i) && ($(".gallary-" + i).fadeIn(500), $(".gallary-" + i).removeClass("gallary--hidden"))
    }), $(".video__play").click(function () {
        new YT.Player("player", {
            height: "465",
            width: "100%",
            videoId: "cu_l1JNB5ds",
            events: {
                onReady: x
            }
        })
    });
    let q = $(".footer__map--big");
    q.click(function () {
        q.html('<iframe class="testmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.621762225179!2d39.72301357360925!3d47.24468603957375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b47a7e7029%3A0x9e8cb546a10601cc!2z0KLQpiAi0JTQtdC60L7RgNGD0Lwi!5e0!3m2!1sru!2sde!4v1584657018474!5m2!1sru!2sde" width="100%" height="465"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>')
    });
    let y = $(".footer__map--small");
    y.click(function () {
        y.html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.621762225179!2d39.72301357360925!3d47.24468603957375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b47a7e7029%3A0x9e8cb546a10601cc!2z0KLQpiAi0JTQtdC60L7RgNGD0Lwi!5e0!3m2!1sru!2sde!4v1584657018474!5m2!1sru!2sde" width="100%" height="255"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>')
    })
});