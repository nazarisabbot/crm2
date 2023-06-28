const deleteRow = (mainElem, data, elemForTotal, totalFoo) => {
  mainElem.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.board__button_delete')) {
      const elemForDel = e.target.closest('.board__list');
      const idForDel = +elemForDel.firstElementChild.textContent;

      for (let i = 0; i < data.length; i++) {
        if (data[i].id === idForDel) {
          data.splice(i, 1);
        }
      }

      elemForTotal.textContent = `$ ${totalFoo(data).toLocaleString()}`;

      elemForDel.remove();

      console.log(data);
    }
  });
};

const checkedControl = (elemForm, inputCommit) => {
  elemForm.discount.addEventListener('change', () => {
    if (elemForm.discount.checked === false) {
      inputCommit.setAttribute('disabled', 'disabled');
    }

    if (elemForm.discount.checked === true) {
      inputCommit.removeAttribute('disabled');
    }
  });
};

const addNewRow = (elemForm, renderFoo, wTotal, totalFoo, blockf) => {
  elemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const objForm = Object.fromEntries(formData);

    const {
      category,
      commit: discont,
      count,
      description,
      name: title,
      measurements: units,
      price,
      file,
    } = objForm;

    const newObj = {
      id: Date.now(),
      title,
      price,
      description,
      category,
      discont,
      count,
      units,
      images: {
        small: file.name,
        big: file.name,
      },
    };

    data.push(newObj);

    renderFoo([newObj]);

    wTotal.textContent = `$ ${totalFoo(data).toLocaleString()}`;

    elemForm.reset();

    blockf.classList.remove('form_open');
  });
};

const addNewRowFromApi = (elemForm, requestApi, url, renderFoo, errorFoo) => {
  const addNewGoodApi = requestApi();

  elemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const objForm = Object.fromEntries(formData);

    const {
      category,
      commit: discont,
      count,
      description,
      name: title,
      measurements: units,
      price,
      file,
    } = objForm;

    const newObj = {
      title,
      price: Number(price),
      description,
      category,
      discont: +discont,
      count: +count,
      units,
      images: {
        small: file.name,
        big: file.name,
      },
    };

    addNewGoodApi.post(
      url,
      newObj,
      {
        'Content-type': 'application/json; charset=UTF-8',
      },
      renderFoo,
      errorFoo,
    );

    elemForm.reset();
  });
};

const totalInnerGoods = (elemForRender, formElem) => {
  const objEvent = {
    priceMount: 0,
    countMount: 0,
    resMount: 0,
    handleEvent(e) {
      if (e.target.closest('.form-card__input_price')) {
        this.priceMount = e.target.value;
      }
      if (e.target.closest('.form-card__input_count')) {
        this.countMount = e.target.value;
      }
      this.resMount = Number(this.priceMount) * Number(this.countMount);
      elemForRender.textContent = `$ ${this.resMount.toLocaleString()}`;
    },
  };

  formElem.addEventListener('change', objEvent);
};

const controlSizeImage = (mainButton, preview) => {
  mainButton.addEventListener('change', () => {
    const errorSize = document.querySelector('.form-card__red');
    const buttonDelNewImg = document.querySelector('.form-card__delete');
    const inputImg = document.querySelector('.form-card__image');

    const pathNewImg = URL.createObjectURL(file.files[0]);
    const sizeNewImg = file.files[0].size;

    if (sizeNewImg >= 100000) {
      errorSize.classList.add('form-card__red_active');
    } else {
      errorSize.classList.remove('form-card__red_active');
    }

    if (sizeNewImg <= 100000) {
      inputImg.setAttribute('src', pathNewImg);
    }

    preview.classList.add('active');

    buttonDelNewImg.addEventListener('click', () => {
      inputImg.removeAttribute('src');
    });
  });
};

export default {
  deleteRow,
  checkedControl,
  addNewRow,
  addNewRowFromApi,
  totalInnerGoods,
  controlSizeImage,
};
