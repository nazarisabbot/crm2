export const restrictInputToCyrillicAndSpace = (inputElement) => {
  inputElement.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    const regex = /^[а-яА-Я\s]+$/;
    if (!regex.test(inputValue)) {
      event.target.value = inputValue.replace(/[^а-яА-Я\s]/g, '');
    }
  });
};

export const restrictInputToDigits = (inputElement) => {
  inputElement.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    const regex = /^\d*$/;
    if (!regex.test(inputValue)) {
      event.target.value = inputValue.replace(/\D/g, '');
    }
  });
};
