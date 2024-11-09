document.getElementById("btn").onclick = function () {
  //   alert("Button clicked!");
  //   confirm("Are you want to proceed?");
  // prompt("Enter your name:");
  // console.log(document.getElementById('x1'));
  var data = document.getElementById("x1").value;
  console.log(data);

  var msg = "";
  //   if (data == "") {
  //     msg = "Please enter pincode!";
  //   } else if (data.length != 6) {
  //     msg = "Invalid pincode!";
  //   } else {
  //     msg = "Pincode entered successfully!";
  //   }

  var msg =
    data == ""
      ? "Please enter pincode!"
      : data.length != 6
      ? "pincode should be 6!"
      : "Pincode entered successfully!";
  console.log(document.getElementById("result"));
  document.getElementById("result").innerHTML = msg;
};
