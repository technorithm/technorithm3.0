document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    checkVisibility("para1", 0);
    checkVisibility("para2", 500);
    checkVisibility("para3", 800);
    checkVisibility("btn", 1000);
    checkVisibility("img-box", 0);
    checkVisibility("mainImg", 0);
    checkVisibility("circle-spin", 0);
  });

  // Initial check in case elements are already in view
  checkVisibility("para1", 0);
  checkVisibility("para2", 200);
  checkVisibility("para3", 400);
  checkVisibility("btn", 600);
  checkVisibility("img-box", 0);
  checkVisibility("mainImg", 0);
  checkVisibility("circle-spin", 0);
});

function checkVisibility(id, delay) {
  let element = document.getElementById(id);
  if (!element) return;

  let rect = element.getBoundingClientRect();
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    setTimeout(() => {
      if (!element.classList.contains("slideUp")) {
        element.classList.add("slideUp");
      }
    }, delay);
  }
}


