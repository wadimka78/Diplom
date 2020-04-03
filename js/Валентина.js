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

    function i() {
        var i = 0,
            r = $(".services-swiper").parent().parent().width(),
            n = $(".services-slide").width(),
            t = e.params.spaceBetween,
            a = r - n - t;
        for (let e = 1; i <= a; e++) i = n * e + t * (e - 1);
        return i
    }
    
    $(window).resize(function () {
        $(".services-swiper").parent().width(i())
    }), 
    
    $(".services-swiper").parent().width(i());
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
    })
});