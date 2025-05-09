// const tickets = document.querySelectorAll(".ticketImage");
//   const closeButtons = document.querySelectorAll(".closePopup");

//   tickets.forEach((ticket) => {
//     ticket.addEventListener("click", () => {
//         console.log("jajajajja")
//       const id = ticket.getAttribute("data-id");
//       const popUp = document.getElementById("desc-" + id);

//       if (
//         !popUp.classList.contains("active") &&
//         !popUp.classList.contains("closing")
//       ) {
//         popUp.classList.add("active");
//       }
//     });
//   });

//   closeButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const popUp = btn.closest(".ticketDescription");

//       if (popUp.classList.contains("closing")) return;

//       popUp.classList.add("closing");
//       popUp.classList.add("inactive");

//       popUp.addEventListener(
//         "animationend",
//         () => {
//           popUp.classList.remove("active", "inactive", "closing");
//         },
//         { once: true }
//       );
//     });
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.key === "Escape") {
//       document
//         .querySelectorAll(".ticketDescription.active")
//         .forEach((popUp) => {
//           if (popUp.classList.contains("closing")) return;

//           popUp.classList.add("closing");
//           popUp.classList.add("inactive");

//           popUp.addEventListener(
//             "animationend",
//             () => {
//               popUp.classList.remove("active", "inactive", "closing");
//             },
//             { once: true }
//           );
//         });
//     }
//   });