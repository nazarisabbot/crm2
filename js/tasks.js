//hw 4:3.2
const rain = Math.round(Math.random(0, 1));

if (rain == 1) {
  console.log("Пошёл дождь. Возьмите зонт!");
} else {
  console.log("Дождя нет!");
}

//hw 4:3.3
const subjectMat = +prompt("Введите кол-во баллов по математике");
const subjectLang = +prompt("Введите кол-во баллов по русскому языку");
const subjectInfo = +prompt("Введите кол-во баллов по информатике");

const summary = subjectMat + subjectLang + subjectInfo;

if (summary >= 265) {
  console.log("Поздравляю, вы поступили на бюджет!");
} else {
  console.log("Тебе нужно еще потрудиться");
}

//hw 4:3.4
const requestMoney = +prompt("Какую сумму вы хотели бы снять?");

if (requestMoney % 2 == 0 && requestMoney >= 100) {
  console.log("Идет подсчет денег, не забудьте забрать свою карту");
} else {
  console.log(
    "Введите четное число пожалуйста, а так же число должно быть равное или больше 100"
  );
}
