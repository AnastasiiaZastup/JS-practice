(() => {
  var t = {
      263: (t) => {
        t.exports = function () {
          const t = document.querySelector(".calculating__result span");
          let e,
            n,
            o,
            s = "female",
            a = 1.375;
          function r(t, e) {
            document.querySelectorAll(t).forEach((t) => {
              t.classList.remove(e),
                t.getAttribute("id") === localStorage.getItem("sex") &&
                  t.classList.add(e),
                t.getAttribute("data-ratio") ===
                  localStorage.getItem("ratio") && t.classList.add(e);
            });
          }
          function i() {
            t.textContent =
              s && e && n && o && a
                ? "female" === s
                  ? Math.round((447.6 + 9.2 * n + 3.1 * e - 4.3 * o) * a)
                  : Math.round((88.36 + 13.4 * n + 4.8 * e - 5.7 * o) * a)
                : "0";
          }
          function c(t, e) {
            const n = document.querySelectorAll(t);
            n.forEach((t) => {
              t.addEventListener("click", (t) => {
                t.target.getAttribute("data-ratio")
                  ? ((a = +t.target.getAttribute("data-ratio")),
                    localStorage.setItem(
                      "ratio",
                      +t.target.getAttribute("data-ratio")
                    ))
                  : ((s = t.target.getAttribute("id")),
                    localStorage.setItem("sex", t.target.getAttribute("id"))),
                  n.forEach((t) => {
                    t.classList.remove(e);
                  }),
                  t.target.classList.add(e),
                  i();
              });
            });
          }
          function l(t) {
            const s = document.querySelector(t);
            s.addEventListener("input", () => {
              switch (
                (s.value.match(/\D/g)
                  ? (s.style.border = "1px solid red")
                  : (s.style.border = "none"),
                s.getAttribute("id"))
              ) {
                case "height":
                  e = +s.value;
                  break;
                case "weight":
                  n = +s.value;
                  break;
                case "age":
                  o = +s.value;
              }
              i();
            });
          }
          localStorage.getItem("sex")
            ? (s = localStorage.getItem("sex"))
            : ((s = "female"), localStorage.setItem("sex", "female")),
            localStorage.getItem("ratio")
              ? (a = localStorage.getItem("ratio"))
              : ((a = 1.375), localStorage.setItem("ratio", 1.375)),
            r("#gender div", "calculating__choose-item_active"),
            r(
              ".calculating__choose_big div",
              "calculating__choose-item_active"
            ),
            i(),
            c("#gender div", "calculating__choose-item_active"),
            c(
              ".calculating__choose_big div",
              "calculating__choose-item_active"
            ),
            l("#height"),
            l("#weight"),
            l("#age");
        };
      },
      503: (t) => {
        t.exports = function () {
          class t {
            constructor(t, e, n, o, s, a, ...r) {
              (this.src = t),
                (this.alt = e),
                (this.title = n),
                (this.descr = o),
                (this.price = s),
                (this.classes = r),
                (this.parent = document.querySelector(a)),
                (this.transfer = 27),
                this.changeToUAH();
            }
            changeToUAH() {
              this.price = this.price * this.transfer;
            }
            render() {
              const t = document.createElement("div");
              0 === this.classes.length
                ? ((this.classes = "menu__item"), t.classList.add(this.classes))
                : this.classes.forEach((e) => t.classList.add(e)),
                (t.innerHTML = `\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Price:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> uan/day</div>\n                </div>\n            `),
                this.parent.append(t);
            }
          }
          (async (t) => {
            const e = await fetch(t);
            if (!e.ok)
              throw new Error(`Could not fetch ${t}, status: ${e.status}`);
            return await e.json();
          })("http://localhost:3001/menu").then((e) => {
            e.forEach(({ img: e, altimg: n, title: o, descr: s, price: a }) => {
              new t(e, n, o, s, a, ".menu .container").render();
            });
          });
        };
      },
      111: (t) => {
        t.exports = function () {
          const t = this.document.querySelectorAll("form");
          t.forEach((t) => {
            var o;
            (o = t).addEventListener("submit", (t) => {
              t.preventDefault();
              let s = document.createElement("img");
              (s.src = "img/form/spinner.svg"),
                (s.style.cssText =
                  "\n      display: block;\n      margin: 0 auto;\n    "),
                o.insertAdjacentElement("afterend", s);
              const a = new FormData(o),
                r = JSON.stringify(Object.fromEntries(a.entries()));
              e("http://localhost:3001/requests", r)
                .then((t) => {
                  console.log(t), n("Everything fine"), s.remove();
                })
                .catch(() => {
                  n("Oops...I did it again...");
                })
                .finally(() => {
                  o.reset();
                });
            });
          });
          const e = async (t, e) => {
            const n = await fetch(t, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: e,
            });
            return await n.json();
          };
          function n(t) {
            const e = document.querySelector(".modal__dialog");
            e.classList.add("hide"), openModal();
            const n = document.createElement("div");
            n.classList.add("modal__dialog"),
              (n.innerHTML = `\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${t}</div>\n            </div>\n        `),
              document.querySelector(".modal").append(n),
              setTimeout(() => {
                n.remove(),
                  e.classList.add("show"),
                  e.classList.remove("hide"),
                  closeModal();
              }, 4e3);
          }
        };
      },
      877: (t) => {
        t.exports = function () {
          const t = document.querySelectorAll("[data-modal]"),
            e = document.querySelector(".modal");
          function n() {
            e.classList.add("hide"),
              e.classList.remove("show"),
              (document.body.style.overflow = "");
          }
          function o() {
            e.classList.add("show"),
              e.classList.remove("hide"),
              (document.body.style.overflow = "hidden"),
              clearInterval(s);
          }
          t.forEach((t) => {
            t.addEventListener("click", o);
          }),
            e.addEventListener("click", (t) => {
              (t.target !== e && "" != t.target.getAttribute("data-close")) ||
                n();
            }),
            document.addEventListener("keydown", (t) => {
              "Escape" === t.code && e.classList.contains("show") && n();
            });
          const s = setTimeout(o, 3e5);
          window.addEventListener("scroll", function t() {
            window.pageYOffset + document.documentElement.clientHeight >=
              document.documentElement.scrollHeight &&
              (o(), window.removeEventListener("scroll", t));
          });
        };
      },
      223: (t) => {
        t.exports = function () {
          const t = document.querySelectorAll(".offer__slide"),
            e = document.querySelector(".offer__slider-prev"),
            n = document.querySelector(".offer__slider-next"),
            o = document.querySelector("#total"),
            s = document.querySelector("#current"),
            a = document.querySelector(".offer__slider-wrapper"),
            r = document.querySelector(".offer__slider-inner"),
            i = window.getComputedStyle(a).width,
            c = document.querySelector(".offer__slider");
          let l = 1,
            d = 0;
          t.length < 10
            ? ((o.textContent = `0${t.length}`), (s.textContent = `0${l}`))
            : ((o.textContent = t.length), (s.textContent = l)),
            (r.style.width = 100 * t.length + "%"),
            (r.style.display = "flex"),
            (r.style.transition = "0.5s all"),
            (a.style.overflow = "hidden"),
            t.forEach((t) => {
              t.style.width = i;
            }),
            (c.style.position = "relative");
          const u = document.createElement("ol"),
            m = [];
          u.classList.add("carousel-indicators"),
            (u.style.cssText =
              "\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n  "),
            c.append(u);
          for (let e = 0; e < t.length; e++) {
            const t = document.createElement("li");
            t.setAttribute("data-slide-to", e + 1),
              (t.style.cssText =
                "\n      box-sizing: content-box;\n      flex: 0 1 auto;\n      width: 30px;\n      height: 6px;\n      margin-right: 3px;\n      margin-left: 3px;\n      cursor: pointer;\n      background-color: #fff;\n      background-clip: padding-box;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      opacity: .5;\n      transition: opacity .6s ease;\n    "),
              0 == e && (t.style.opacity = 1),
              u.append(t),
              m.push(t);
          }
          function h(t) {
            return +t.replace(/\D/g, "");
          }
          n.addEventListener("click", () => {
            d == h(i) * (t.length - 1) ? (d = 0) : (d += h(i)),
              (r.style.transform = `translateX(-${d}px)`),
              l == t.length ? (l = 1) : l++,
              t.length < 10 ? (s.textContent = `0${l}`) : (s.textContent = l),
              m.forEach((t) => (t.style.opacity = ".5")),
              (m[l - 1].style.opacity = 1);
          }),
            e.addEventListener("click", () => {
              0 == d ? (d = h(i) * (t.length - 1)) : (d -= h(i)),
                (r.style.transform = `translateX(-${d}px)`),
                1 == l ? (l = t.length) : l--,
                t.length < 10 ? (s.textContent = `0${l}`) : (s.textContent = l),
                m.forEach((t) => (t.style.opacity = ".5")),
                (m[l - 1].style.opacity = 1);
            }),
            m.forEach((e) => {
              e.addEventListener("click", (e) => {
                const n = e.target.getAttribute("data-slide-to");
                (l = n),
                  (d = h(i) * (n - 1)),
                  (r.style.transform = `translateX(-${d}px)`),
                  t.length < 10
                    ? (s.textContent = `0${l}`)
                    : (s.textContent = l),
                  m.forEach((t) => (t.style.opacity = ".5")),
                  (m[l - 1].style.opacity = 1);
              });
            });
        };
      },
      466: (t) => {
        t.exports = function () {
          let t = document.querySelectorAll(".tabheader__item"),
            e = document.querySelectorAll(".tabcontent"),
            n = document.querySelector(".tabheader__items");
          function o() {
            e.forEach((t) => {
              t.classList.add("hide"), t.classList.remove("show", "fade");
            }),
              t.forEach((t) => {
                t.classList.remove("tabheader__item_active");
              });
          }
          function s(n = 0) {
            e[n].classList.add("show", "fade"),
              e[n].classList.remove("hide"),
              t[n].classList.add("tabheader__item_active");
          }
          o(),
            s(),
            n.addEventListener("click", function (e) {
              const n = e.target;
              n &&
                n.classList.contains("tabheader__item") &&
                t.forEach((t, e) => {
                  n == t && (o(), s(e));
                });
            });
        };
      },
      473: (t) => {
        t.exports = function () {
          function t(t) {
            return t >= 0 && t < 10 ? `0${t}` : t;
          }
          !(function () {
            const e = document.querySelector(".timer"),
              n = e.querySelector("#days"),
              o = e.querySelector("#hours"),
              s = e.querySelector("#minutes"),
              a = e.querySelector("#seconds"),
              r = setInterval(i, 1e3);
            function i() {
              const e = (function (t) {
                let e, n, o, s;
                const a = Date.parse(t) - Date.parse(new Date());
                return (
                  a <= 0
                    ? ((e = 0), (n = 0), (o = 0), (s = 0))
                    : ((e = Math.floor(a / 864e5)),
                      (n = Math.floor((a / 36e5) % 24)),
                      (o = Math.floor((a / 1e3 / 60) % 60)),
                      (s = Math.floor((a / 1e3) % 60))),
                  { total: a, days: e, hours: n, minutes: o, seconds: s }
                );
              })("2024-11-11");
              (n.innerHTML = t(e.days)),
                (o.innerHTML = t(e.hours)),
                (s.innerHTML = t(e.minutes)),
                (a.innerHTML = t(e.seconds)),
                e.total <= 0 && clearInterval(r);
            }
            i();
          })();
        };
      },
    },
    e = {};
  function n(o) {
    var s = e[o];
    if (void 0 !== s) return s.exports;
    var a = (e[o] = { exports: {} });
    return t[o](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      var t = n(466),
        e = n.n(t),
        o = n(877),
        s = n.n(o),
        a = n(473),
        r = n.n(a),
        i = n(263),
        c = n.n(i),
        l = n(503),
        d = n.n(l),
        u = n(111),
        m = n.n(u),
        h = n(223),
        g = n.n(h);
      window.addEventListener("DOMContentLoaded", function () {
        e()(), s()(), r()(), c()(), d()(), m()(), g()();
      });
    })();
})();
