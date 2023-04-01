"use strict";

function logTable(obj) {
  let res = [];
  res[0] = obj.name;
  res[1] = obj.quantity;
  res[2] = obj.price;
  res[3] = obj.total;
  return res;
}

const firstProporty = {
  id: 246016548,
  name: "Стиральная машина LG",
  quantity: 5,
  price: 1500,
  get total() {
    return this.quantity * this.price;
  },
  ttt: this.total,
};

const secondProporty = {
  id: 231548925,
  name: "Телевизор Samsung",
  quantity: 2,
  price: 1250,
  get total() {
    return this.quantity * this.price;
  },
};

const thirdProporty = {
  id: 2548965326,
  name: "Холодильник LG",
  quantity: 5,
  price: 750,
  get total() {
    return this.quantity * this.price;
  },
};

const fourthProporty = {
  id: 856478257,
  name: "Морозильная камера Gorenje",
  quantity: 9,
  price: 850,
  get total() {
    return this.quantity * this.price;
  },
};

console.table(logTable(firstProporty));
console.table(logTable(secondProporty));
console.table(logTable(thirdProporty));
console.table(logTable(fourthProporty));
