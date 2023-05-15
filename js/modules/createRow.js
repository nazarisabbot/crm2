const goods = [
  {
    id: 253842678,
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 27000,
    description: 'Смартфон Xiaomi 11T – это представитель флагманской линейки.',
    category: 'mobile-phone',
    discont: false,
    count: 3,
    units: 'шт',
    images: {
      small: 'img/smrtxiaomi11t-m.jpg',
      big: 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    id: 296378448,
    title: 'Радиоуправляемый автомобиль Cheetan',
    price: 4000,
    description: 'Внедорожник на дистанционном управлении.',
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'img/cheetancar-m.jpg',
      big: 'img/cheetancar-b.jpg',
    },
  },
  {
    id: 215796548,
    title: 'ТВ приставка MECOOL KI',
    price: 12400,
    description: 'Быстрый и умный MECOOL KI PRO, прекрасно спроектированный',
    category: 'tv-box',
    discont: 15,
    count: 4,
    units: 'шт',
    images: {
      small: 'img/tvboxmecool-m.jpg',
      big: 'img/tvboxmecool-b.jpg',
    },
  },
  {
    id: 246258248,
    title: 'Витая пара PROConnect 01-0043-3-25',
    price: 22,
    description: 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем.',
    category: 'cables',
    discont: false,
    count: 420,
    units: 'v',
    images: {
      small: 'img/lan_proconnect43-3-25.jpg',
      big: 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const form = document.getElementById('form');
const commitArea = document.querySelector('.form-card__input_commit');
const buttonAddFile = document.querySelector('.form-card__add');
const previewImage = document.querySelector('.form-card__product');
const list = document.querySelector('.board__body');
const windowTotalMount = document.querySelector('#totalCart');
const innerTotal = document.querySelector('.form-card_innertotal');

const totalGoods = (arr) => {
  const resArr = arr.reduce((acc, item) => acc + item.price * item.count, 0);
  return resArr;
};

windowTotalMount.textContent = `$ ${totalGoods(goods).toLocaleString()}`;

const createRow = ({id, title, category, units, count, price}) => {
  const tr = document.createElement('tr');
  tr.className = 'board__list';

  const tds = `
  <td class="board__id">${id}</td>
  <td class="board__name">${title}</td>
  <td class="board__category">${category}</td>
  <td class="board__unit">${units}</td>
  <td class="board__quantity">${count}</td>
  <td class="board__price">${price}</td>
  <td class="board__total">${price * count}</td>
  <td>
    <button class="board__button board__button_noimage"></button>
    <button class="board__button board__button_edit"></button>
    <button class="board__button board__button_delete"></button>
  </td>`;

  tr.innerHTML = tds;

  return tr;
};

const renderGoods = (arr) => {
  const arrForRender = arr;

  arrForRender.map((elem) => {
    list.prepend(createRow(elem));
  });
};

renderGoods(goods);

list.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest('.board__button_delete')) {
    const elemForDel = e.target.closest('.board__list');
    const idForDel = +elemForDel.firstElementChild.textContent;

    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === idForDel) {
        goods.splice(i, 1);
      }
    }

    windowTotalMount.textContent = `$ ${totalGoods(goods).toLocaleString()}`;

    elemForDel.remove();

    console.log(goods);
  }
});

// Form control

form.discount.addEventListener('change', () => {
  if (form.discount.checked === false) {
    commitArea.setAttribute('disabled', 'disabled');
  }

  if (form.discount.checked === true) {
    commitArea.removeAttribute('disabled');
  }
});

form.addEventListener('submit', (e) => {
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

  goods.push(newObj);

  renderGoods([newObj]);

  windowTotalMount.textContent = `$ ${totalGoods(goods).toLocaleString()}`;

  form.reset();

  blockForm.classList.remove('form_open');
});

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
    innerTotal.textContent = `$ ${this.resMount.toLocaleString()}`;
  },
};

form.addEventListener('change', objEvent);

buttonAddFile.addEventListener('change', () => {
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

  previewImage.classList.add('active');

  buttonDelNewImg.addEventListener('click', () => {
    inputImg.removeAttribute('src');
  });
});
