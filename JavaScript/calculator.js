"use strict";

document.getElementById("add").onclick = function () {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;

  console.log(data1);
  console.log(data2);

  if (data1 == "" || data2 == "") {
    msg = "PLease enter all values!";
  } else if (isNaN(data1) || isNaN(data2)) {
    msg = "All fields should contain numbers!";
  } else {
    var n1 = Number(data1);
    var n2 = Number(data2);
    var result = n1 + n2;
    document.getElementById("y1").innerHTML = result;
  }
  document.getElementById("result").innerHTML = msg;
};

document.getElementById("sub").onclick = function () {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;

  console.log(data1);
  console.log(data2);

  if (data1 == "" || data2 == "") {
    msg = "PLease enter all values!";
  } else if (isNaN(data1) || isNaN(data2)) {
    msg = "All fields should contain numbers!";
  } else {
    var n1 = Number(data1);
    var n2 = Number(data2);
    var result = n1 - n2;
    document.getElementById("y1").innerHTML = result;
  }
  document.getElementById("result").innerHTML = msg;
};

document.getElementById("mul").onclick = function () {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;

  console.log(data1);
  console.log(data2);

  if (data1 == "" || data2 == "") {
    msg = "PLease enter all values!";
  } else if (isNaN(data1) || isNaN(data2)) {
    msg = "All fields should contain numbers!";
  } else {
    var n1 = Number(data1);
    var n2 = Number(data2);
    var result = n1 * n2;
    document.getElementById("y1").innerHTML = result;
  }
  document.getElementById("result").innerHTML = msg;
};

document.getElementById("div").onclick = function () {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;

  console.log(data1);
  console.log(data2);

  if (data1 == "" || data2 == "") {
    msg = "PLease enter all values!";
  } else if (isNaN(data1) || isNaN(data2)) {
    msg = "All fields should contain numbers!";
  } else {
    var n1 = Number(data1);
    var n2 = Number(data2);
    var result = n1 / n2;
    document.getElementById("y1").innerHTML = result;
  }
  document.getElementById("result").innerHTML = msg;
};
