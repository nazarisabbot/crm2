import formControl from './formControl.js';

const {totalInnerGoods, controlSizeImage} = formControl;

function createFormElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = textContent;
  return element;
}

export const createFormMarkup = (data = {}) => {
  const {
    category = '',
    count = '',
    description = '',
    discount = '',
    id = '',
    price = '',
    title = '',
    units = '',
  } = data;

  const formDiv = createFormElement('div', 'form');
  const formContainerDiv = createFormElement('div', 'form-container');
  const formCardSection = createFormElement('section', 'form-card');

  const formCardErrorDiv = createFormElement('div', 'form-card__error');
  const closeErrorButton = createFormElement('button', 'form-card__close');
  closeErrorButton.id = 'closeError';
  closeErrorButton.type = 'button';
  formCardErrorDiv.appendChild(closeErrorButton);

  const formCardContainDiv = createFormElement('div', 'form-card__contain');
  const errorImg = createFormElement('img', 'form-card__redcross');
  errorImg.src = 'img/error_cross.png';
  errorImg.width = '90';
  errorImg.height = '90';
  errorImg.alt = 'Красный крест, означающий ошибку';
  const errorText = createFormElement('p', null, 'Что-то пошло не так');
  formCardContainDiv.appendChild(errorImg);
  formCardContainDiv.appendChild(errorText);
  formCardErrorDiv.appendChild(formCardContainDiv);

  const formCardTitleDiv = createFormElement(
    'div',
    'form-card__title form-card__title_form',
  );
  const actionHeading = createFormElement(
    'h2',
    'form-card__action',
    title ? 'редактирование товара' : 'добавить товар',
  );

  const idParagraph = createFormElement('p', 'form-card__id');
  const idNameSpan = createFormElement('span', 'form-card__name');
  idNameSpan.textContent = 'id:';
  const idNumberSpan = createFormElement('span', 'form-card__number');
  idNumberSpan.textContent = id;
  idParagraph.appendChild(idNameSpan);
  idParagraph.appendChild(idNumberSpan);
  const closeFormButton = createFormElement(
    'button',
    'form-card__close form-card__form',
  );
  closeFormButton.id = 'closeForm';
  closeFormButton.type = 'button';
  formCardTitleDiv.appendChild(actionHeading);
  formCardTitleDiv.appendChild(idParagraph);
  formCardTitleDiv.appendChild(closeFormButton);

  const formElement = createFormElement('form', 'form-card__form');
  formElement.id = 'form';

  const formCardBodyFieldset = createFormElement('fieldset', 'form-card__body');
  const formCardLeftFieldset = createFormElement('fieldset', 'form-card__left');
  const nameLabel = createFormElement(
    'label',
    'form-card__label',
    'наименование',
  );
  nameLabel.setAttribute('for', 'name');

  const nameInput = createFormElement('input', 'form-card__input');
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.type = 'text';
  nameInput.required = true;
  nameInput.value = title;

  const categoryLabel = createFormElement(
    'label',
    'form-card__label',
    'категория',
  );
  categoryLabel.setAttribute('for', 'category');

  const categoryInput = createFormElement('input', 'form-card__input');
  categoryInput.id = 'category';
  categoryInput.name = 'category';
  categoryInput.type = 'text';
  categoryInput.required = true;
  categoryInput.value = category;

  const measurementsLabel = createFormElement(
    'label',
    'form-card__label',
    'eдиницы измерения',
  );
  measurementsLabel.setAttribute('for', 'measurements');

  const measurementsInput = createFormElement('input', 'form-card__input');
  measurementsInput.id = 'measurements';
  measurementsInput.name = 'measurements';
  measurementsInput.type = 'text';
  measurementsInput.required = true;
  measurementsInput.value = units;

  const formCardCustomFieldset = createFormElement(
    'fieldset',
    'form-card__custom',
  );
  const formCardCustomCheckboxFieldset = createFormElement(
    'fieldset',
    'form-card__custom-checkbox',
  );

  const discountCheckbox = createFormElement('input', 'form-card__checkbox');
  discountCheckbox.id = 'discount';
  discountCheckbox.name = 'discount';
  discountCheckbox.type = 'checkbox';
  discountCheckbox.checked = discount;

  const discountLabel = createFormElement(
    'label',
    'form-card__label',
    'дисконт',
  );
  discountLabel.setAttribute('for', 'discount');

  const commitInput = createFormElement(
    'input',
    'form-card__input form-card__input_commit',
  );
  commitInput.id = 'commit';
  commitInput.name = 'commit';
  commitInput.type = 'text';
  commitInput.disabled = true;

  discountCheckbox.addEventListener('change', () => {
    if (discountCheckbox.checked === false) {
      commitInput.setAttribute('disabled', 'disabled');
    }

    if (discountCheckbox.checked === true) {
      commitInput.removeAttribute('disabled');
    }
  });

  formCardCustomCheckboxFieldset.appendChild(discountCheckbox);
  formCardCustomCheckboxFieldset.appendChild(discountLabel);
  formCardCustomCheckboxFieldset.appendChild(commitInput);
  formCardCustomFieldset.appendChild(formCardCustomCheckboxFieldset);

  const formCardRedFieldset = createFormElement('fieldset', 'form-card__red');
  const redLemitLeftParagraph = createFormElement(
    'p',
    'form-card__lemit form-card__lemit_left',
  );
  redLemitLeftParagraph.textContent =
    'Изображение не должно превышать размер 1 Мб';
  formCardRedFieldset.appendChild(redLemitLeftParagraph);

  formCardLeftFieldset.appendChild(nameLabel);
  formCardLeftFieldset.appendChild(nameInput);
  formCardLeftFieldset.appendChild(categoryLabel);
  formCardLeftFieldset.appendChild(categoryInput);
  formCardLeftFieldset.appendChild(measurementsLabel);
  formCardLeftFieldset.appendChild(measurementsInput);
  formCardLeftFieldset.appendChild(formCardCustomFieldset);
  formCardLeftFieldset.appendChild(formCardRedFieldset);

  const formCardRightFieldset = createFormElement(
    'fieldset',
    'form-card__right',
  );

  const descriptionLabel = createFormElement(
    'label',
    'form-card__label',
    'описание',
  );
  descriptionLabel.setAttribute('for', 'description');

  const descriptionInput = createFormElement(
    'input',
    'form-card__input form-card__input_description',
  );
  descriptionInput.id = 'description';
  descriptionInput.name = 'description';
  descriptionInput.type = 'text';
  descriptionInput.required = true;
  descriptionInput.value = description;

  const countLabel = createFormElement(
    'label',
    'form-card__label',
    'количество',
  );
  countLabel.setAttribute('for', 'count');

  const countInput = createFormElement(
    'input',
    'form-card__input form-card__input_count',
  );
  countInput.id = 'count';
  countInput.name = 'count';
  countInput.type = 'number';
  countInput.min = '0';
  countInput.required = true;
  countInput.value = count;

  const priceLabel = createFormElement('label', 'form-card__label', 'цена');
  priceLabel.setAttribute('for', 'price');

  const priceInput = createFormElement(
    'input',
    'form-card__input form-card__input_margin form-card__input_price',
  );
  priceInput.id = 'price';
  priceInput.name = 'price';
  priceInput.type = 'number';
  priceInput.min = '0';
  priceInput.required = true;
  priceInput.value = price;

  const addImageLabel = createFormElement(
    'label',
    'form-card__add',
    'Добавить изображение',
  );
  const addImageInput = createFormElement('input', 'form-card__addfile');
  addImageInput.type = 'file';
  addImageInput.name = 'file';
  addImageInput.id = 'file';
  addImageLabel.appendChild(addImageInput);
  const formCardRedRightFieldset = createFormElement(
    'fieldset',
    'form-card__red',
  );
  const redLemitRightParagraph = createFormElement(
    'p',
    'form-card__lemit form-card__lemit_right',
  );
  redLemitRightParagraph.textContent =
    'Изображение не должно превышать размер 1 Мб';
  formCardRedRightFieldset.appendChild(redLemitRightParagraph);

  formCardRightFieldset.appendChild(descriptionLabel);
  formCardRightFieldset.appendChild(descriptionInput);
  formCardRightFieldset.appendChild(countLabel);
  formCardRightFieldset.appendChild(countInput);
  formCardRightFieldset.appendChild(priceLabel);
  formCardRightFieldset.appendChild(priceInput);
  formCardRightFieldset.appendChild(addImageLabel);
  formCardRightFieldset.appendChild(formCardRedRightFieldset);

  const formCardProductFieldset = createFormElement(
    'fieldset',
    'form-card__product',
  );
  const formCardDeleteDiv = createFormElement('div', 'form-card__delete');
  formCardDeleteDiv.innerHTML = '<span></span>';
  const formCardImage = createFormElement('img', 'form-card__image');
  formCardImage.src = '';
  formCardImage.alt = 'Фото добавляемого товара';
  formCardProductFieldset.appendChild(formCardDeleteDiv);
  formCardProductFieldset.appendChild(formCardImage);

  formCardBodyFieldset.appendChild(formCardLeftFieldset);
  formCardBodyFieldset.appendChild(formCardRightFieldset);
  formCardBodyFieldset.appendChild(formCardProductFieldset);

  controlSizeImage(addImageLabel, formCardProductFieldset);

  const formCardTotalFieldset = createFormElement(
    'fieldset',
    'form-card__total form-card__total_form',
  );

  const countParagraph = createFormElement(
    'p',
    'form-card__count',
    'Итоговая стоимость: ',
  );
  const paragraphSpan = createFormElement(
    'span',
    'form-card_innertotal',
    `$ ${count * price}`,
  );

  countParagraph.appendChild(paragraphSpan);

  const submitButton = createFormElement('button', 'form-card__btn');
  submitButton.type = 'submit';
  const submitSpan = createFormElement(
    'span',
    'form-card__submit',
    'добавить товар',
  );

  totalInnerGoods(paragraphSpan, formElement);

  submitButton.appendChild(submitSpan);
  formCardTotalFieldset.appendChild(countParagraph);
  formCardTotalFieldset.appendChild(submitButton);

  formElement.appendChild(formCardBodyFieldset);
  formElement.appendChild(formCardTotalFieldset);

  formCardSection.appendChild(formCardErrorDiv);
  formCardSection.appendChild(formCardTitleDiv);
  formCardSection.appendChild(formElement);

  formContainerDiv.appendChild(formCardSection);
  formDiv.appendChild(formContainerDiv);

  return formDiv;
};
