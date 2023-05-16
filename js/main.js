import {goods} from './modules/data.js';
import {renderGoods} from './modules/render.js';
import declarationOfVar from './modules/declarationOfVar.js';
import {totalGoods} from './modules/totalGoods.js';
import formControl from './modules/formControl.js';
import switchScript from './modules/switchScript.js';

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
} = declarationOfVar;

const {
  deleteRow,
  checkedControl,
  addNewRow,
  totalInnerGoods,
  controlSizeImage,
} = formControl;

const {closeErrorWindowFoo, closeFormFoo, openFormFoo} = switchScript;

const init = () => {
  /* Render */
  renderGoods(goods);
  /* End */

  /* Count */
  windowTotalMount.textContent = `$ ${totalGoods(goods).toLocaleString()}`;
  /* End */

  /* Form control */
  deleteRow(list, goods, windowTotalMount, totalGoods);
  checkedControl(form, commitArea);
  addNewRow(form, goods, renderGoods, windowTotalMount, totalGoods, blockForm);
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
