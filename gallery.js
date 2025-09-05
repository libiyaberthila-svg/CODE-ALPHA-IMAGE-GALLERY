const images = ["NATURE1.jpg", "flower.jpg", "tb.jpeg", "teddy.jpeg"];
let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
});
