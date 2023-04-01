/* Close error script */

const closeError = document.getElementById("closeError");
const blockError = document.querySelector(".form-card__error");

closeError.addEventListener("click", () => {
  blockError.style.display = "none";
});

/* Close / Open form card script */

const closeForm = document.getElementById("closeForm");
const openForm = document.getElementById("openForm");
const blockForm = document.querySelector(".form");

closeForm.addEventListener("click", () => {
  blockForm.style.display = "none";
});

openForm.addEventListener("click", () => {
  blockForm.style.display = "flex";
});
