(()=>{
    "use strict";
    var e = {
        795: (e,t,n)=>{
            n.r(t),
            n.d(t, {
                default: ()=>r
            });
            const r = n.p + "CV.pdf"
        }
        ,
        854: (e,t,n)=>{
            n.r(t)
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var s = t[r] = {
            exports: {}
        };
        return e[r](s, s.exports, n),
        s.exports
    }
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var t = n.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var r = t.getElementsByTagName("script");
            r.length && (e = r[r.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        n.p = e
    }
    )(),
    (()=>{
        var e;
        n(854),
        (e = n(795)) && e.__esModule,
        n(854);
        for (var t = gsap.utils.toArray(".yy"), r = 0; r < t.length; r++) {
            var o = .3 + r / 9;
            gsap.from(t[r], {
                opacity: 0,
                delay: o,
                y: -54,
                duration: o
            })
        }
        gsap.from(".pOne", {
            opacity: 0,
            delay: .8,
            y: 54,
            duration: .8
        }),
        gsap.from(".pDos", {
            opacity: 0,
            delay: .9,
            y: 50,
            duration: .9
        }),
        gsap.from(".pTres", {
            opacity: 0,
            delay: 1,
            y: 50,
            duration: 1
        }),
        gsap.from(".pCuatro", {
            opacity: 0,
            delay: 1.1,
            y: 50,
            duration: 1.1
        }),
        gsap.from(".pCinco", {
            opacity: 0,
            delay: 1.2,
            y: 50,
            duration: 1.2
        }),
        window.onscroll = function() {
            var e = document.querySelector(".header")
              , t = window.scrollY;
            t <= this.scrollPs ? (this.scrollPs = t,
            e.setAttribute("style", "transform: translateY(0);")) : (this.scrollPs = t,
            e.setAttribute("style", "transform: translateY(-25%);"))
        }
        ;
        var s = gsap.utils.toArray(".nss")
          , a = gsap.utils.toArray(".jobsss")
          , i = document.getElementById("barra");
        function l(e, t) {
            var n = 0
              , r = 100 * (t = t || 1);
            e.classList.contains("desdeIzquierda") ? (n = -100,
            r = 0) : e.classList.contains("desdeDerecha") ? (n = 100,
            r = 0) : e.classList.contains("desdeDeAbajo") ? (n = 0,
            r = 100) : e.classList.contains("desdeDeArriba") && (n = 0,
            r = -100),
            e.style.transform = "translate(" + n + "px, " + r + "px)",
            e.style.opacity = "0",
            gsap.fromTo(e, {
                x: n,
                y: r,
                autoAlpha: 0
            }, {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "expo",
                overwrite: "auto"
            })
        }
        function c(e) {
            gsap.set(e, {
                autoAlpha: 0
            })
        }
        document.querySelectorAll(".nss").forEach((function(e, t) {
            e.addEventListener("click", (function() {
                if ("nss non" == e.getAttribute("class")) {
                    for (var n = 0; n < s.length; n++)
                        "nss active" == s[n].getAttribute("class") && (s[n].classList.remove("active"),
                        s[n].classList.add("non"),
                        a[n].classList.remove("active"),
                        a[n].classList.add("mo"),
                        ("uno" == i.getAttribute("class").split(" ")[1] || "dos" == i.getAttribute("class").split(" ")[1] || "tres" == i.getAttribute("class").split(" ")[1] || "cuatro" == i.getAttribute("class").split(" ")[1]) && (i.classList.remove(i.getAttribute("class").split(" ")[1]),
                        0 == (r = t) ? i.classList.add("uno") : 1 == r ? i.classList.add("dos") : 2 == r ? i.classList.add("tres") : 3 == r && i.classList.add("cuatro")));
                    a[t].classList.remove("mo"),
                    a[t].classList.add("active"),
                    e.classList.remove("non"),
                    e.classList.add("active")
                }
                var r
            }
            ))
        }
        )),
        new Swiper(".blog-slider",{
            spaceBetween: 30,
            effect: "fade",
            loop: !0,
            mousewheel: {
                invert: !1
            },
            pagination: {
                el: ".blog-slider__pagination",
                clickable: !0
            }
        }),
        document.addEventListener("DOMContentLoaded", (function() {
            gsap.registerPlugin(ScrollTrigger),
            gsap.utils.toArray(".gs_reveal").forEach((function(e) {
                c(e),
                ScrollTrigger.create({
                    trigger: e,
                    end: "110%",
                    onEnter: function() {
                        l(e)
                    },
                    onEnterBack: function() {
                        l(e, -1)
                    },
                    onLeave: function() {
                        c(e)
                    }
                })
            }
            ))
        }
        )),
        window.addEventListener("hashchange", (function() {
            router(window.location.hash)
        }
        )),
        $('a[href*="#"]').on("click", (function(e) {
            $("html,body").animate({
                scrollTop: $($(this).attr("href")).offset().top - 100
            }, 500),
            e.preventDefault()
        }
        ));
        var d = document.querySelector("#but_nav")
          , u = document.querySelector("#aside_de_nav")
          , p = document.querySelector("#boudy");
        d.addEventListener("click", (function() {
            d.classList.toggle("eCxtrN"),
            d.classList.toggle("eVRjg"),
            u.classList.toggle("dKogfI"),
            u.classList.toggle("dSbVSd"),
            p.classList.toggle("blur")
        }
        ));
        
      
        var v = document.querySelector("#project_sec_ul");
        window.onload = function() {
            fetch("https://api.github.com/users/cruzisaac51/repos?per_page=100").then((function(e) {
                return e.json()
            }
            )).then((function(e) {
                e.forEach((function(e) {
                    v.innerHTML += '\n            \n                <li class="projects__StyledProject-sc-1v1fime-1 dIMCBf">\n                        <div class="project-inner">\n                            <div style="width: 100%;">\n                                <div class="project-top">\n                                    <div class="folder">\n                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"\n                                            fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"\n                                            stroke-linejoin="round" class="feather feather-folder">\n                                            <title>Folder</title>\n                                            <path\n                                                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">\n                                            </path>\n                                        </svg>\n                                    </div>\n                                    <div class="project-links">\n                                        <a href="'.concat(e.html_url, '"\n                                            target="_blank" rel="noreferrer noopener" aria-label="External Link"\n                                            class="external">\n                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"\n                                                fill="none" stroke="currentColor" stroke-width="2"\n                                                stroke-linecap="round" stroke-linejoin="round"\n                                                class="feather feather-github">\n                                                <title>GitHub</title>\n                                                <path\n                                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">\n                                                </path>\n                                            </svg>\n                                        </a>\n                                        <a href="').concat(e.homepage, '"\n                                            style="display: ').concat(e.homepage ? "block" : "none", ';"\n                                            target="_blank" rel="noreferrer noopener" aria-label="External Link"\n                                            class="external"><svg xmlns="http://www.w3.org/2000/svg" role="img"\n                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\n                                                stroke-linecap="round" stroke-linejoin="round"\n                                                class="feather feather-external-link">\n                                                <title>External Link</title>\n                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">\n                                                </path>\n                                                <polyline points="15 3 21 3 21 9"></polyline>\n                                                <line x1="10" y1="14" x2="21" y2="3"></line>\n                                            </svg></a>\n                                    </div>\n                                </div>\n                                <h3 class="project-title">\n                                    <a href="').concat(e.html_url, '" aria-label="External Link"\n                                        target="_blank" rel="noreferrer noopener">').concat(e.name, '</a>\n                                </h3>\n                                <div class="project-description">\n                                    <p>\n                                        ').concat(e.description ? e.description : "Sin descripción", "\n                                    </p>\n                                </div>\n                            </div>\n                    </li>\n            \n            ")
                }
                ))
            }
            ))
        }
        ;
        var h = document.querySelector(".view_more");
        h.addEventListener("click", (function() {
            h.style = "display: none;",
            document.querySelector(".cover_projects").classList.toggle("desactive"),
            v.classList.toggle("oculto")
        }
        ))
    }
    )()
}
)();
(async () => {
    await loadStarsPreset(tsParticles); 
    await   tsParticles.load("tsparticles", {
        fpsLimit: 60,
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: { enable: true, mode: "repulse" },
            onhover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: false, force: 2, smooth: 10 }
            },
            resize: true
          },
          modes: {
            bubble: { distance: 200, duration: 2, opacity: 0, size: 0, speed: 3 },
            grab: { distance: 400, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 400, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#ffffff" },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 600 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 0.3,
            straight: false
          },
          number: { density: { enable: true, value_area: 800 }, value: 600 },
          opacity: {
            anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
            random: {
              enable: true,
              minimumValue: 0.3
            },
            value: 0.6
          },
          shape: {
            type: "circle"
          },
          size: {
            anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
            random: false,
            value: 1
          }
        },
        retina_detect: true
      });
    })();    
