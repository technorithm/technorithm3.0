let nums = document.querySelectorAll(".num");
let container = document.querySelector(".about_2");
let test = false;

// Check if the section is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Start the counter animation
function startCounter() {
    nums.forEach((num) => {
        let start = 0;
        let end = parseInt(num.dataset.num);
        let increment = Math.ceil(end / 100);

        let count = setInterval(() => {
            start += increment;
            if (start >= end) {
                num.textContent = end;
                clearInterval(count);
            } else {
                num.textContent = start;
            }
        }, 50);
    });
}

// Listen for the scroll event
window.addEventListener("scroll", () => {
    if (isElementInViewport(container) && !test) {
        startCounter();
        test = true; // Ensure it runs only once
    }
});