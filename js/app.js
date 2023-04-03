"use strict";

//hw 4:1
// const product = "Стиральная машина LG";
// const quantityProduct = 5;
// const categoryProduct = "Техника для дома";
// const priceProduct = 1500;

// const res = quantityProduct * priceProduct;

// console.log(product);
// console.log(res);

//hw 4:2
// const productName = prompt("Укажите пожалуйста наименование товара");
// const productСategory = prompt("Укажите пожалуйста категорию товара");
// const productQuantity = +prompt("Укажите пожалуйста количество товара");
// const productPrice = +prompt("Укажите пожалуйста стоимость товара");

// console.log(typeof productName);
// console.log(typeof productСategory);
// console.log(typeof productQuantity);
// console.log(typeof productPrice);

// console.log(
//   `На складе ${productQuantity} единицы товара ${productName} на сумму
//   ${productQuantity * productPrice} деревянных`
// );

//hw 4:3.1
const productName = prompt("Укажите пожалуйста наименование товара");
const productСategory = prompt("Укажите пожалуйста категорию товара");
const productQuantity = +prompt("Укажите пожалуйста количество товара");
const productPrice = +prompt("Укажите пожалуйста стоимость товара");

if (!Number.isInteger(productQuantity)) {
  console.log("Вы ввели некорректные данные");
} else if (!Number.isInteger(productPrice)) {
  console.log("Вы ввели некорректные данные");
} else {
  console.log(
    `На складе ${productQuantity} единицы товара ${productName} на сумму
      ${productQuantity * productPrice} деревянных`
  );
}
