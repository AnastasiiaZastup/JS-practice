// http://localhost:8888/webpack-demo/src/

// json-server --watch db.json --port 3001

import tabs from "./js/modules/tabs";
import modal from "./js/modules/modal";
import timer from "./js/modules/timer";
import calc from "./js/modules/calc";
import cards from "./js/modules/cards";
import forms from "./js/modules/forms";
import slider from "./js/modules/slider";
import { openModal } from "./js/modules/modal";

window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    50000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2024-11-11");
  cards();
  calc();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});
