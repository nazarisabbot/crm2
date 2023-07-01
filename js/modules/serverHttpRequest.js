import declarationOfVar from './declarationOfVar.js';

const {windowTotalMount} = declarationOfVar;

let totalPrice = null;

export function serverHttpRequest() {
  return {
    get(url, cb, cbError, countPrice) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 2) !== 100) {
            document.body.insertAdjacentHTML('afterbegin', cbError(xhr.status));
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(response);
          totalPrice = `${countPrice(response)}`;
          windowTotalMount.textContent = Number(totalPrice).toLocaleString();
        });

        xhr.addEventListener('error', () => {
          cbError(`Error. Status code: ${xhr.status}`);
        });

        xhr.send();
      } catch (error) {
        cbError(error);
      }
    },
    post(url, body, headers, cb, cbError) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 2) !== 100) {
            cbError(`Error. Status code: ${xhr.status}`);
            const blockError = document.querySelector('.form-card__error');
            blockError.classList.add('active');
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb([response]);
          document.body.firstChild.remove();

          let digitsTotalPrice = Number(totalPrice);
          digitsTotalPrice += response.count * response.price;
          windowTotalMount.textContent = digitsTotalPrice.toLocaleString();
        });

        xhr.addEventListener('error', () => {
          cbError(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cbError(error);
      }
    },
  };
}
