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
const formContainer = document.querySelector(".form-container");

blockForm.addEventListener("click", (e) => {
  const target = e.target;

  if (target === blockForm || target.classList.contains("form-card__form")) {
    blockForm.classList.remove("form_open");
  }
});

openForm.addEventListener("click", () => {
  blockForm.classList.add("form_open");
});

// Get Elements

const titleAction = document.querySelector(".form-card__action");
// Кнопка возле id, была определена выше называется closeError
const idProduct = document.querySelector(".form-card__number");
const formCard = document.querySelector(".form-card__form");
const checkBox = document.querySelector(".form-card__checkbox");
const inputCommitForDiscount = document.querySelector("#commit");
const totalCart = document.querySelector("#totalCart");
