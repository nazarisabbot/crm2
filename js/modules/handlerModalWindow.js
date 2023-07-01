import declarationOfVar from './declarationOfVar.js';
import formControl from './formControl.js';
import {renderGoods} from './render.js';
import {errorWindow} from './errorWindow.js';
import {serverHttpRequest} from './serverHttpRequest.js';

const {addNewRowFromApi} = formControl;
const {body, API_GOODS, list} = declarationOfVar;

export const handlerModalWindow = (createFoo) => {
  return new Promise((resolve, reject) => {
    body.addEventListener('click', async ({target}) => {
      try {
        if (target.closest('.tab__submit')) {
          const fooElement = createFoo();
          body.prepend(fooElement);

          const linkElement = document.createElement('link');
          linkElement.rel = 'stylesheet';
          linkElement.href = './css/modules/form.css';
          document.head.appendChild(linkElement);

          fooElement.addEventListener('click', ({target}) => {
            if (
              !target.closest('.form-card') ||
              target.closest('.form-card__close')
            ) {
              fooElement.remove();
            }
          });

          const form = fooElement.querySelector('#form');
          addNewRowFromApi(
            form,
            serverHttpRequest,
            API_GOODS,
            renderGoods,
            errorWindow,
          );

          resolve(fooElement);
        }

        if (target.closest('.board__button_edit')) {
          const elemForDel = target.closest('.board__list');
          const idForDel = +elemForDel.firstElementChild.textContent;

          const data = await fetch(`${API_GOODS}/${idForDel}`);
          const user = await data.json();

          const fooElementEdit = createFoo(user);
          body.prepend(fooElementEdit);

          const linkElement = document.createElement('link');
          linkElement.rel = 'stylesheet';
          linkElement.href = './css/modules/form.css';
          document.head.appendChild(linkElement);

          fooElementEdit.addEventListener('click', ({target}) => {
            if (
              !target.closest('.form-card') ||
              target.closest('.form-card__close')
            ) {
              fooElementEdit.remove();
            }
          });

          resolve(fooElementEdit);
        }
      } catch (error) {
        console.log(error);
      }
    });
  });
};
