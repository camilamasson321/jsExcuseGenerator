/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const message = "OMG! You will not believe me but...";
  document.body.innerHTML =
    "<h1>" +
    message +
    "</h1><p>" +
    who[getRandomInt(4)] +
    " " +
    action[getRandomInt(4)] +
    " " +
    what[getRandomInt(3)] +
    " " +
    when[getRandomInt(5)] +
    "</p>";
};
