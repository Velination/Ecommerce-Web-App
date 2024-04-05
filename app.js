"use strict";
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "img/air.png" },
      {
        code: "darkblue",
        img: "img/air2.png",
      },
    ],
  },
];

// for making the front page slide through
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translatex(${-100 * index}vw)`;
  });
});
