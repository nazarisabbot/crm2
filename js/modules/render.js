import declarationOfVar from './declarationOfVar.js';

const {list} = declarationOfVar;

export const createRow = ({id, title, category, units, count, price}) => {
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

export const renderGoods = (arr) => {
  const arrForRender = arr;

  arrForRender.map((elem) => {
    list.prepend(createRow(elem));
  });
};
