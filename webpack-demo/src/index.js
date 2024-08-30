// http://localhost:8888/webpack-demo/src/

// json-server --watch db.json --port 3001

import tabs from "./js/modules/tabs";
import modal from "./js/modules/modal";
import timer from "./js/modules/timer";
import calc from "./js/modules/calc";
import cards from "./js/modules/cards";
import forms from "./js/modules/forms";
import slider from "./js/modules/slider";

window.addEventListener("DOMContentLoaded", function () {
  timer();
  tabs();
  modal("[data-modal]", ".modal");
  calc();
  cards();
  forms();
  slider();
});
