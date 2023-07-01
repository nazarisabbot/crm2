import {renderGoods} from './modules/render.js';
import declarationOfVar from './modules/declarationOfVar.js';
import {totalGoods} from './modules/totalGoods.js';
import formControl from './modules/formControl.js';
import switchScript from './modules/switchScript.js';
import {serverHttpRequest} from './modules/serverHttpRequest.js';
import {errorWindow} from './modules/errorWindow.js';
import {handlerModalWindow} from './modules/handlerModalWindow.js';
import {createFormMarkup} from './modules/createFormMarkup.js';

const {
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
} = declarationOfVar;

const {
  deleteRow,
  checkedControl,
  addNewRowFromApi,
  totalInnerGoods,
  controlSizeImage,
} = formControl;

const {closeErrorWindowFoo, closeFormFoo, openFormFoo} = switchScript;

const init = () => {
  /* Render */
  const myHttp = serverHttpRequest();
  myHttp.get(API_GOODS, renderGoods, errorWindow, totalGoods);
  /* End */

  /* Open modal function */
  handlerModalWindow(createFormMarkup);
  /* end */
};

init();
