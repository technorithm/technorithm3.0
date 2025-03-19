function toggleDropdown(event) {
    event.preventDefault();
    let menu = document.getElementById("dropdown-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  }
  
  // Close dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdownMenu = document.getElementById("dropdown-menu");
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        }
    }
  };
  
  // Alert for Upcoming Events
  document.getElementById("upcoming-event").addEventListener("click", function(event) {
    event.preventDefault();
    Swal.fire({
        title: "Coming Soon!",
        html: "<p style='font-size: 1.5rem;'>🚀 Something BIG is on the way! Stay tuned for mind-blowing events! 🎉</p>",
        icon: "info",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#333",
        confirmButtonColor: "#007bff",
        showClass: { popup: "animate__animated animate__bounceIn" },
        hideClass: { popup: "animate__animated animate__bounceOut" }
    });
    
  });
  


  