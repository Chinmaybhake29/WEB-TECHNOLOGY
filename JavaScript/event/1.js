"use strict";
console.log(document);
console.log(typeof document);
console.log(document.getElementById("x1"));
console.log(document.getElementById("x2"));

//DOM Event Handling

document.getElementById("x1").onclick = function () {
  console.log(document.body);
  document.body.style.background = "white";
  document.body.style.color = "black";
};

document.getElementById("x2").onclick = function () {
  console.log(document.body);
  document.body.style.background = "black";
  document.body.style.color = "white";
};
