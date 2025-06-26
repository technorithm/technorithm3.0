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
document
  .getElementById("upcoming-event")
  .addEventListener("click", function (event) {
    event.preventDefault();
    Swal.fire({
      imageUrl:"./image/installation.jpg",
      imageWidth: 500,
      imageHeight: 500,
      imageAlt: "Event Image",
      showConfirmButton: false,
      background: "#fff",
      showClass: { popup: "animate__animated animate__bounceIn" },
      hideClass: { popup: "animate__animated animate__bounceOut" },
    });
  });

