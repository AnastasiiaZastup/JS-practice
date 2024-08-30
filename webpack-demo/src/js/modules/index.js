window.addEventListener("DOMContentLoaded", function () {
  const tabs = require("./modules/tabs");
  const modal = require("./modules/modal");
  const timer = require("./modules/timer");
  const calc = require("./modules/calc");
  const cards = require("./modules/cards");
  const forms = require("./modules/forms");
  const slider = require("./modules/slider");

  tabs();
  modal();
  timer();
  calc();
  cards();
  forms();
  slider();
});
