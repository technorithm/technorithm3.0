document.querySelectorAll(".explore-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const event = this.getAttribute("data-event");
    window.location.href = `explore.html?event=${event}`;
  });
});

document.querySelectorAll(".register-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const event = this.getAttribute("data-event");
    window.location.href = `register.html?event=${event}`;
  });
});
