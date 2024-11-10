"use strict";

var category = ["Electronics", "Clothing", "Books", "Home Appliances"];
var products = [
  {
    name: "iphone 14 pro max",
    price: 5000,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAm1n7hOfhsDmTij1RjW-zv4l0t9HqYR9HQ&s",
  },
  {
    name: "iphone 15 pro max",
    price: 3900,
    path: " https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1725567599334",
  },
  {
    name: "iphone 16",
    price: 3900,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAm1n7hOfhsDmTij1RjW-zv4l0t9HqYR9HQ&s",
  },
  {
    name: "iphone 17",
    price: 2900,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAm1n7hOfhsDmTij1RjW-zv4l0t9HqYR9HQ&s",
  },
];

//short circuit for sorting

category &&
  category.length > 0 &&
  category.forEach(function (v, i) {
    console.log(v, i);

    var listtag = document.createElement("li");
    console.log(listtag);

    listtag.textContent = v;

    document.querySelector("ul").append(listtag);
  });
products &&
  products.length > 0 &&
  products.forEach(function (v, i) {
    console.log(v, i);

    var divtag = document.createElement("div");
    console.log(divtag);
    divtag.className = "col-xl-4 text-center";

    var imgtag = document.createElement("img");
    var h2tag = document.createElement("h2");
    var ptag = document.createElement("p");

    imgtag.src = v.path;
    imgtag.className = "img-fluid";
    h2tag.innerHTML = v.price;
    ptag.innerHTML = v.name;

    divtag.append(imgtag, h2tag, ptag);
    document.getElementById("row").append(divtag);
  });
