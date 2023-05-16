export const totalGoods = (arr) => {
  const resArr = arr.reduce((acc, item) => acc + item.price * item.count, 0);
  return resArr;
};
