const sliderItems = document.querySelectorAll(".slider-item");
console.log(sliderItems);

sliderItems.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let currSlide = 0;

let maxSlides = sliderItems.length - 1;
console.log(maxSlides);
const nextSlide = document.getElementById("forward");
nextSlide.addEventListener("click", function () {
  if (currSlide === maxSlides) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  sliderItems.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
  });
});

const prevSlide = document.getElementById("back");

prevSlide.addEventListener("click", function () {
  if (currSlide === 0) {
    currSlide = maxSlides;
  } else {
    currSlide--;
  }

  sliderItems.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
  });
});
setInterval(() => {
  if (currSlide === maxSlides) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  sliderItems.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
  });
}, 5000);
