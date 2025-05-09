const tickets = document.querySelectorAll(".ticketImage");
const closeButtons = document.querySelectorAll(".closePopup");

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".ticketDescription.active").forEach((popUp) => {
      if (popUp.classList.contains("closing")) return;

      popUp.classList.add("closing");
      popUp.classList.add("inactive");

      popUp.addEventListener(
        "animationend",
        () => {
          popUp.classList.remove("active", "inactive", "closing");
        },
        { once: true }
      );
    });
  }
});
