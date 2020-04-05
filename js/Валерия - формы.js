$(document).ready(function () {
    new Swiper(".promo-swiper", {
        effect: "fade",
        fadeEffect: {
            crossFade: !0
        },
        pagination: {
            el: ".promo-pagination",
            clickable: !0
        }
    });
    var e = new Swiper(".services-swiper", {
        slidesPerView: "auto",
        spaceBetween: 13,
        loop: !0,
        navigation: {
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev"
        }
    });

    function a() {
        var a = 0,
            i = $(".services-swiper").parent().parent().width(),
            r = $(".services-slide").width(),
            o = e.params.spaceBetween,
            n = i - r - o;
        for (let e = 1; a <= n; e++) a = r * e + o * (e - 1);
        return a
    }
    $(window).resize(function () {
        $(".services-swiper").parent().width(a())
    }), $(".services-swiper").parent().width(a());
    new Swiper(".gallery-swiper", {
        loop: !0,
        navigation: {
            nextEl: ".gallery-button-next",
            prevEl: ".gallery-button-prev"
        },
        pagination: {
            el: ".gallery-pagination",
            clickable: !0
        }
    });


    const i = $(".popup"),
        r = $(".popup-callback"),
        o = $(".popup-visit"),
        n = $(".popup-send"),
        s = $("[data-toggle=callback]"),
        t = $("[data-toggle=visit]"),
        l = $(".popup__close");



    function p(e) {
        e.toggleClass("popup--visible")
    }

    function c(e) {
        (function (e) {
            return e.hasClass("popup--visible")
        })(e) && p(e)
    }
    s.on("click", function () {
        p(r)
    }), 
    
    t.on("click", function () {
        p(o)
    }),
    
    l.on("click", function () {
        c(r), c(o), c(n)
    }), 
    
    $(document).keydown(function (e) {
        var a = e.key || e.keyCode;
        "Escape" !== a && "Esc" !== a && 27 !== a || (c(r), c(o), c(n))
    }),

     $(".popup").click(function (e) {
        $(e.target).hasClass("popup") && $(e.target).removeClass("popup--visible")
    }), 

    $("[type=tel]").mask("+7 (000) 000-00-00"), $("form").each(function () {
        $(this).validate({
            errorElement: "div",
            errorClass: "invalid",
            errorPlacement: function (e, a) {
                return !0
            },
            rules: {
                userName: {
                    required: !0
                },
                userPhone: {
                    required: !0,
                    minlength: 18
                },
                policyCheckbox: {
                    required: !0
                }
            },
            submitHandler: function (e) {
                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: $(e).serialize(),
                    success: function (a) {
                        var r = $(e);
                        return r[0].reset(), console.log(r), i.removeClass("popup--visible"), p(n), r.hasClass("visit-form") ? (ym(61633705, "reachGoal", "goal_visit"), !0) : r.hasClass("callback-form") ? (ym(61633705, "reachGoal", "goal_callback"), !0) : r.hasClass("card-form") ? (ym(61633705, "reachGoal", "goal_card"), !0) : void 0
                    }
                })
            }
        })
    })
});