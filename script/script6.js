function dropdown() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show");
}

// Close menu when clicking outside, but NOT when clicking inside
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar");
  const menuIcon = document.getElementById("menu-icon");

  // फक्त बाहेर क्लिक केल्यावरच navbar बंद होईल
  if (window.innerWidth <= 670 && !menuIcon.contains(event.target) && !navbar.contains(event.target)) {
      navbar.classList.remove("show");
  }
});

// Prevent closing navbar when clicking on links inside it
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function (event) {
      event.stopPropagation(); // Click केल्यावर menu बंद होणार नाही
  });
});
