const body = document.body;
const tabSubmit = document.querySelector('.tab__submit');
const formContainer = document.querySelector('.form-container');
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
const boardTotal = document.querySelectorAll('.board__total');
const API_GOODS = 'https://invited-comfortable-ox.glitch.me/api/goods';

export default {
  body,
  tabSubmit,
  formContainer,
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
  API_GOODS,
  boardTotal,
};
