const imageSlide = document.querySelectorAll(".imageSlide");

let slideIndex = 0;

document.querySelector(".nextSlide").addEventListener("click", () => {
  imageSlide[slideIndex].classList.remove("active");

  slideIndex = slideIndex === imageSlide.length - 1 ? 0 : slideIndex + 1;
  imageSlide[slideIndex].classList.add("active");
});
document.querySelector(".prevSlide").addEventListener("click", () => {
  imageSlide[slideIndex].classList.remove("active");

  slideIndex = slideIndex === 0 ? imageSlide.length - 1 : slideIndex - 1;
  imageSlide[slideIndex].classList.add("active");
});
