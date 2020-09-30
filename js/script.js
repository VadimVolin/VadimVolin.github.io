document.addEventListener("DOMContentLoaded", function () {
  new Splide("#card-slider", {
    perPage: 3,
    autoplay: true,
    rewind: true,
    perMove: 1,
    interval: 3000,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  }).mount();
});

const anchors = document.querySelectorAll("a.scroll-to");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

document
  .getElementById("scroll-action")
  .addEventListener("click", function (event) {
    let blockID =
      "#" + document.querySelectorAll("section")[1].getAttribute("id");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
