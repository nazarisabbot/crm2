export const errorWindow = (txt) => {
  const cardError = `
  <div class="form-card__error active">
          <button class="form-card__close" id="closeError" type="button" ></button>
          <div class="form-card__contain">
            <img class="form-card__redcross" src="img/error_cross.png" width="90" height="90"
              alt="Крассный крест означающий ошибку">
            <p>Ошибка: ${txt}</p>
          </div>
  `;
  return cardError;
};
