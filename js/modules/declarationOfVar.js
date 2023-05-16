const form = document.getElementById('form');
const commitArea = document.querySelector('.form-card__input_commit');
const buttonAddFile = document.querySelector('.form-card__add');
const previewImage = document.querySelector('.form-card__product');
const list = document.querySelector('.board__body');
const windowTotalMount = document.querySelector('#totalCart');
const innerTotal = document.querySelector('.form-card_innertotal');
const closeError = document.getElementById('closeError');
const blockError = document.querySelector('.form-card__error');
const openForm = document.getElementById('openForm');
const blockForm = document.querySelector('.form');

export default {
  form,
  commitArea,
  buttonAddFile,
  previewImage,
  list,
  windowTotalMount,
  innerTotal,
  closeError,
  blockError,
  openForm,
  blockForm,
};
