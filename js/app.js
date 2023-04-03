"use strict";

//hw 4:1
const product = "Стиральная машина LG";
const quantityProduct = 5;
const categoryProduct = "Техника для дома";
const priceProduct = 1500;

const res = quantityProduct * priceProduct;

console.log(product);
console.log(res);

//hw 4:2
/* (function () {
  const nameRequest = {
    name: "Картофель",
    category: "",
    quantity: null,
    price: null,

    set requestName(value) {
      this.name = String(value);
    },
    set requestСategory(value) {
      this.category = String(value);
    },
    set requestQuantity(value) {
      this.quantity = Number(value);
    },
    set requestPrice(value) {
      this.price = Number(value);
    },
    get total() {
      return this.quantity * this.price;
    },
  };

  nameRequest.requestName = prompt("Укажите пожалуйста наименование товара");
  nameRequest.requestСategory = prompt("Укажите пожалуйста категорию товара");
  nameRequest.requestQuantity = prompt("Укажите пожалуйста количество товара");
  nameRequest.requestPrice = prompt("Укажите пожалуйста стоимость товара");

  console.table(nameRequest);

  console.log(
    `На складе ${nameRequest.quantity} единицы товара ${nameRequest.name} на сумму ${nameRequest.total} деревянных`
  );
})();
 */
