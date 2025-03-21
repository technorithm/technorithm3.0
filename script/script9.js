function toggleDropdown(event) {
  event.preventDefault();
  let menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Close dropdown when clicking outside

document.addEventListener("click", function (event) {
  let dropdownMenu = document.getElementById("dropdown-menu");
  let dropbtn = document.querySelector(".dropbtn");

  // Check if the click is outside the dropdown menu and button
  if (dropdownMenu && dropbtn) {
    if (
      !dropbtn.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  }
});

// Alert for Upcoming Events
// document
//   .getElementById("upcoming-event")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     Swal.fire({
//       title: "Coming Soon!",
//       html: "<p style='font-size: 1.5rem;'>🚀 Something BIG is on the way! Stay tuned for mind-blowing events! 🎉</p>",
//       icon: "info",
//       confirmButtonText: "OK",
//       background: "#fff",
//       color: "#333",
//       confirmButtonColor: "#007bff",
//       showClass: { popup: "animate__animated animate__bounceIn" },
//       hideClass: { popup: "animate__animated animate__bounceOut" },
//     });
//   });

document
  .getElementById("upcoming-event")
  .addEventListener("click", function (event) {
    event.preventDefault();
    Swal.fire({
      imageUrl: "image/event-img.jpg", // Replace with your image URL
      imageAlt: "Upcoming Event",
      imageWidth: 500, // Increased width
      background: "#fff",
      showConfirmButton: false, // Hides the OK button
      customClass: {
        popup: "custom-swal-popup", // Apply custom styles
        image: "custom-swal-image", // Apply border to image
      },
      showClass: { popup: "animate__animated animate__bounceIn" },
      hideClass: { popup: "animate__animated animate__bounceOut" },
    });
  });

