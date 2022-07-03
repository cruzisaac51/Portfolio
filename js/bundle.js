(() => {
    "use strict";
    var e = {
            795: (e, t, n) => {
                n.r(t), n.d(t, {
                    default: () => r
                });
                const r = n.p + "CV.pdf"
            }
            , 854: (e, t, n) => {
                n.r(t)
            }
        }
        , t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var s = t[r] = {
            exports: {}
        };

        return e[r](s, s.exports, n), s.exports
    }
    n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object
                .defineProperty(e, r, {
                    enumerable: !0
                    , get: t[r]
                })
        }
        , n.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n
        .r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object
                .defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }, (() => {
            var e;
            n.g.importScripts && (e = n.g.location + "");
            var t = n.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript
                    .src), !e)) {
                var r = t.getElementsByTagName("script");
                r.length && (e = r[r.length - 1].src)
            }
            if (!e) throw new Error(
                "Automatic publicPath is not supported in this browser"
                );
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(
                /\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
            var e;
            n(854), (e = n(795)) && e.__esModule, n(854);
            for (var t = gsap.utils.toArray(".yy"), r = 0; r < t
                .length; r++) {
                var o = .3 + r / 9;
                gsap.from(t[r], {
                    opacity: 0
                    , delay: o
                    , y: -54
                    , duration: o
                })
            }
            gsap.from(".pOne", {
                    opacity: 0
                    , delay: .8
                    , y: 54
                    , duration: .8
                })
                , gsap.from(".pDos", {
                    opacity: 0
                    , delay: .9
                    , y: 50
                    , duration: .9
                })
                , gsap.from(".pTres", {
                    opacity: 0
                    , delay: 1
                    , y: 50
                    , duration: 1
                })
                , gsap.from(".pCuatro", {
                    opacity: 0
                    , delay: 1.1
                    , y: 50
                    , duration: 1.1
                })
                , gsap.from(".pCinco", {
                    opacity: 0
                    , delay: 1.2
                    , y: 50
                    , duration: 1.2
                })
                , window.onscroll = function() {
                    var e = document.querySelector(".header")
                        , t = window.scrollY;
                    t <= this.scrollPs ? (this.scrollPs = t, e
                        .setAttribute("style",
                            "transform: translateY(0);")) : (this
                        .scrollPs = t, e.setAttribute("style",
                            "transform: translateY(-150%);"))
                };
            var s = gsap.utils.toArray(".nss")
                , a = gsap.utils.toArray(".jobsss")
                , i = document.getElementById("barra");

            function l(e, t) {
                var n = 0
                    , r = 100 * (t = t || 1);
                e.classList.contains("desdeIzquierda") ? (n = -100, r =
                        0) : e.classList.contains("desdeDerecha") ? (n =
                        100, r = 0) : e.classList.contains(
                        "desdeDeAbajo") ? (n = 0, r = 100) : e.classList
                    .contains("desdeDeArriba") && (n = 0, r = -100)
                    , e.style.transform = "translate(" + n + "px, " +
                    r + "px)"
                    , e.style.opacity = "0"
                    , gsap.fromTo(e, {
                        x: n
                        , y: r
                        , autoAlpha: 0
                    }, {
                        duration: 1.25
                        , x: 0
                        , y: 0
                        , autoAlpha: 1
                        , ease: "expo"
                        , overwrite: "auto"
                    })
            }

            function c(e) {
                gsap.set(e, {
                    autoAlpha: 0
                })
            }
            document.querySelectorAll(".nss").forEach((function(e, t) {
                    e.addEventListener("click", (function() {
                        if ("nss non" == e
                            .getAttribute("class")
                            ) {
                            for (var n = 0; n < s
                                .length; n++)
                                "nss active" == s[n]
                                .getAttribute(
                                    "class") && (s[
                                        n].classList
                                    .remove(
                                        "active"),
                                    s[n].classList
                                    .add("non"), a[
                                        n].classList
                                    .remove(
                                        "active"),
                                    a[n].classList
                                    .add("mo"), (
                                        "uno" == i
                                        .getAttribute(
                                            "class")
                                        .split(" ")[
                                            1] ||
                                        "dos" == i
                                        .getAttribute(
                                            "class")
                                        .split(" ")[
                                            1] ||
                                        "tres" == i
                                        .getAttribute(
                                            "class")
                                        .split(" ")[
                                            1] ||
                                        "cuatro" ==
                                        i
                                        .getAttribute(
                                            "class")
                                        .split(" ")[
                                            1]) && (
                                        i.classList
                                        .remove(i
                                            .getAttribute(
                                                "class"
                                                )
                                            .split(
                                                " "
                                                )[1]
                                            ), 0 ==
                                        (r = t) ? i
                                        .classList
                                        .add(
                                        "uno") :
                                        1 == r ? i
                                        .classList
                                        .add(
                                        "dos") :
                                        2 == r ? i
                                        .classList
                                        .add(
                                        "tres") :
                                        3 == r && i
                                        .classList
                                        .add(
                                            "cuatro"
                                            )));
                            a[t].classList.remove(
                                    "mo"), a[t]
                                .classList.add(
                                    "active"), e
                                .classList.remove(
                                    "non"), e
                                .classList.add(
                                    "active")
                        }
                        var r
                    }))
                }))
                , new Swiper(".blog-slider", {
                    spaceBetween: 30
                    , effect: "fade"
                    , loop: !0
                    , mousewheel: {
                        invert: !1
                    }
                    , pagination: {
                        el: ".blog-slider__pagination"
                        , clickable: !0
                    }
                }),

                document.addEventListener("DOMContentLoaded", (
                function() {
                    gsap.registerPlugin(ScrollTrigger)
                        , gsap.utils.toArray(".gs_reveal")
                        .forEach((function(e) {
                            c(e), ScrollTrigger.create({
                                trigger: e
                                , end: "110%"
                                , onEnter: function() {
                                    l(e)
                                }
                                , onEnterBack: function() {
                                    l(e, -1)
                                }
                                , onLeave: function() {
                                    c(e)
                                }
                            })
                        }))
                })),

                window.addEventListener("hashchange", (function() {
                    router(window.location.hash)
                })), $('a[href*="#"]').on("click", (function(e) {
                    $("html,body").animate({
                        scrollTop: $($(this).attr(
                                "href")).offset().top -
                            100
                    }, 500), e.preventDefault()
                }));
            var d = document.querySelector("#but_nav")
                , u = document.querySelector("#aside_de_nav")
                , p = document.querySelector("#boudy");
            d.addEventListener("click", (function() {
                d.classList.toggle("eCxtrN"), d.classList
                    .toggle("eVRjg"), u.classList.toggle(
                        "dKogfI"), u.classList.toggle(
                        "dSbVSd"), p.classList.toggle(
                        "blur")
            }));
            var g = document.querySelector(".pop_up_sobremi_cerrar")
                , f = document.querySelector(".pop_up_sobremi");
            g.addEventListener("click", (function() {
                document.querySelector(".price-section")
                    .classList.toggle("scale-out-bottom"),
                    setTimeout((function() {
                        f.classList.toggle(
                            "scale-out-horizontal"
                            )
                    }), 200), setTimeout((function() {
                        f.classList.toggle("active")
                    }), 710)
            }));
var h = document.querySelector(".view_more"); h.addEventListener("click", (
    function() {
        h.style = "display: none;"
            , document.querySelector(".cover_projects").classList
            .toggle("desactive")
            , v.classList.toggle("oculto")
    }))
})()
})();