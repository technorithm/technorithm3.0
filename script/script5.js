document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    checkVisibilityContact("sub-heading1", 100);
    checkVisibilityContact("sub-heading2", 200);
    checkVisibilitySequentially("info-details", 600, () => {
      checkVisibilityContact("social-icons", 100); // Now starts after info-details
    });
    checkVisibilityContact("illustration", 600);
  });

  // Initial check in case elements are already visible
  checkVisibilityContact("sub-heading1", 100);
  checkVisibilityContact("sub-heading2", 200);
  checkVisibilitySequentially("info-details", 600, () => {
    checkVisibilityContact("social-icons", 100); // Now starts after info-details
  });
  checkVisibilityContact("illustration", 600);
});

// Function for single elements
function checkVisibilityContact(id, delay) {
  let elementContact = document.querySelector(`.${id}`);
  if (!elementContact) return;

  let rectContact = elementContact.getBoundingClientRect();
  let windowHeightContact = window.innerHeight || document.documentElement.clientHeight;

  if (rectContact.top < windowHeightContact && rectContact.bottom >= 0) {
    setTimeout(() => {
      if (!elementContact.classList.contains("slideUpContact")) {
        elementContact.classList.add("slideUpContact");
      }
    }, delay);
  }
}

// Function for animating each child inside "info-details" one by one
function checkVisibilitySequentially(parentClass, delayStart, callback) {
  let parentElement = document.querySelector(`.${parentClass}`);
  if (!parentElement) return;

  let children = parentElement.children; // Selects <p> and all <li>
  let rectParent = parentElement.getBoundingClientRect();
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rectParent.top < windowHeight && rectParent.bottom >= 0) {
    Array.from(children).forEach((child, index) => {
      setTimeout(() => {
        if (!child.classList.contains("slideUpContact")) {
          child.classList.add("slideUpContact");
        }
        // If last child, trigger the callback
        if (index === children.length - 1 && typeof callback === "function") {
          setTimeout(callback, 300); // Wait 300ms after last animation
        }
      }, delayStart + index * 300);
    });
  }
}
