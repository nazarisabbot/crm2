import {goods} from './modules/data.js';
import {renderGoods} from './modules/render.js';
import declarationOfVar from './modules/declarationOfVar.js';
import {totalGoods} from './modules/totalGoods.js';
import formControl from './modules/formControl.js';
import switchScript from './modules/switchScript.js';
import {serverHttpRequest} from './modules/serverHttpRequest.js';
import {errorWindow} from './modules/errorWindow.js';

const {
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
  addNewRow,
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

  /* Form control */
  deleteRow(list, goods, windowTotalMount, totalGoods);
  checkedControl(form, commitArea);
  addNewRowFromApi(
    form,
    serverHttpRequest,
    API_GOODS,
    renderGoods,
    errorWindow,
  );
  totalInnerGoods(innerTotal, form);
  controlSizeImage(buttonAddFile, previewImage);
  /* End */

  /* Switch function */
  closeErrorWindowFoo(closeError, blockError);
  closeFormFoo(blockForm);
  openFormFoo(openForm, blockForm);
  /* End */
};

init();
