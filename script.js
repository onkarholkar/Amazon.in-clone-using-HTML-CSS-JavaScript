//New collections form local Shops
const leftbtn = document.querySelector(".left-btn");
const rightbtn = document.querySelector(".right-btn");

rightbtn.addEventListener("click", function (event) {
    const content = document.querySelector(".pro-slide");
    content.scrollLeft += 1200;
    event.preventDefault();
});

leftbtn.addEventListener("click", function (event) {
    const content = document.querySelector(".pro-slide");
    content.scrollLeft -= 1200;
    event.preventDefault();
});