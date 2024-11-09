"use strict";

document.getElementById("btn").onclick = function () {
  // alert('Hello World!');
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;

  console.log(typeof data1);
  console.log(isNaN(data1));

  console.log(data1);
  console.log(data2);
  console.log(data3);

  var msg = "";
  if (data1 == "" || data2 == "" || data3 == "") {
    msg = "PLease enter all values!";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "All fields should contain numbers!";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "All values should be positive!";
  } else {
    var p = Number(data1);
    var r = parseInt(data2);
    var t = parseInt(data3);

    var emi = (p * r * t) / 100;
    var totalPaid = emi;

    emi = Math.round(emi);
    totalPaid = Math.round(totalPaid);

    document.getElementById("y1").innerHTML = p;
    document.getElementById("y2").innerHTML = totalPaid;
  }
};
