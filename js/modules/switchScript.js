const closeErrorWindowFoo = (closeElem, mainElem) => {
  closeElem.addEventListener('click', () => {
    mainElem.style.display = 'none';
  });
};

const closeFormFoo = (mainElem) => {
  mainElem.addEventListener('click', (e) => {
    const target = e.target;

    if (target === mainElem || target.classList.contains('form-card__form')) {
      mainElem.classList.remove('form_open');
    }
  });
};

const openFormFoo = (oForm, mainElem) => {
  oForm.addEventListener('click', () => {
    mainElem.classList.add('form_open');
  });
};

export default {
  closeErrorWindowFoo,
  closeFormFoo,
  openFormFoo,
};
