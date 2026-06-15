
// MENU

const menuBtn = document.getElementById("menuBtn");
const menuText = document.getElementById("menuText");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

function openMenu() {
    sideMenu.classList.add("active");
}

function closeMenu() {
    sideMenu.classList.remove("active");
}

menuBtn.addEventListener("click", openMenu);
menuText.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// block

document.querySelectorAll(".blocks").forEach(block => {

    const video = block.querySelector(".hover-video");

    block.addEventListener("mouseenter", () => {
        video.play();
    });

    block.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // starts from beginning next hover
    });

});


//image slider
const images1 = [
  "https://a.storyblok.com/f/322327/2616x712/bb2da0d0ae/718-boxster-side.png/m/1200x327/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt",
  "https://a.storyblok.com/f/322327/2616x712/e030f0d430/cm24n3jix0001-718-cayman-gt-4-rs-side.png/m/1200x327/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt",
  "https://a.storyblok.com/f/322327/2616x712/cb6730108c/bx24i3cix0008-718-boxster-s-side.png/m/1200x327/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt",
  "https://a.storyblok.com/f/322327/2616x712/5a02fea4bc/cm24n3bix0001-718-cayman-side.png/m/1200x327/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt"
];
const names718 =[
    "718 Cayman",
    "718 Cayman GT4 RS",
    "718 Boxster",
    "718 Spyder RS"
];

let currentIndex = 0;
const slide = document.getElementById("slide");
const model_name = document.getElementById("model-name");

function showImage() {
   slide.style.opacity = "0";

    setTimeout(() => {
        slide.src = images1[currentIndex];
        model_name.textContent = names718[currentIndex];
        slide.style.opacity = "1";
    }, 200);
}

function nextSlide1() {
  currentIndex = (currentIndex + 1) % images1.length;
  showImage();
}

function prevSlide1() {
  currentIndex = (currentIndex - 1 + images1.length) % images1.length;
  showImage();
}







const slide2 = document.getElementById("slide2");
const model_name2 = document.getElementById("model-name2");

const images2 = [
  "https://a.storyblok.com/f/322327/2616x712/5d81165a01/cz25w01ix0010911-carrera-side.png/m/1800x490/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt",
  "https://a.storyblok.com/f/322327/2616x712/405da5745e/cz25w02ix0010-911-carrera-cabrio-side.png/m/1800x490/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt",
  "https://a.storyblok.com/f/322327/2616x712/b0a7afb093/cz26w07ix0010-911-targa-4s-side.png/m/1800x490/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt",
  "https://a.storyblok.com/f/322327/2616x712/d6633ff9e2/911-gt3-side.png/m/1800x490/smart/filters:format(avif)?dpl=dpl_2cFQ7bYMGg3Gwix2c1kR1XCEMGNt"
];

const names2 =[
    "911 Carrera",
    "911 Carrera Cabriolet",
    "911 Targa 4S",
    "911 GT3"
];


function showImage2() {
   slide.style.opacity = "0";

    setTimeout(() => {
        slide2.src = images2[currentIndex];
        model_name2.textContent = names2[currentIndex];
        slide2.style.opacity = "1";
    }, 200);
}

function nextSlide2() {
  currentIndex = (currentIndex + 1) % images2.length;
  showImage2();
}

function prevSlide2() {
  currentIndex = (currentIndex - 1 + images2.length) % images2.length;
  showImage2();
}