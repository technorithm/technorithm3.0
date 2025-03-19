const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".controls i:nth-child(1)");
const rightArrow = document.querySelector(".controls i:nth-child(2)");
const dotsWrapper = document.querySelector(".dots");
const dots = document.querySelectorAll(".dots span");
const reviewSection = document.querySelector(".review");

let slideIndex = 0;
const totalSlides = slides.length;
let autoSlideInterval = null; // To store the interval ID

const setIndex = () => {
  document.querySelector(".dots .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -12.5}%)`;
  dotsWrapper.children[slideIndex].classList.add("active");
};

// Function to start auto sliding
const startAutoSlide = () => {
  if (!autoSlideInterval) {
    autoSlideInterval = setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides;
      setIndex();
    }, 3000);
  }
};

// Function to stop auto sliding
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
};

// Click event listeners for dots
dots.forEach((dot, ind) => {
  dot.addEventListener("click", () => {
    slideIndex = ind;
    setIndex();
  });
});

// Left arrow click
leftArrow.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : totalSlides - 1;
  setIndex();
});

// Right arrow click
rightArrow.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  setIndex();
});

// Intersection Observer to detect when review section is in viewport
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      startAutoSlide(); // Start sliding when in viewport
    } else {
      stopAutoSlide(); // Stop sliding when out of viewport
    }
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

// Observe the review section
observer.observe(reviewSection);




