'use strict';

let isNum = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income = "Фриланс",
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?"),
    mission = 40000,
    period = 4;

let start = function(){
    money = prompt("Ваш месячный доход?");
    while (!isNum(money)){
        money = prompt("Ваш месячный доход?");
    }
};
start();


const showTypeof = function(item){
    console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let expenses =[];
console.log(addExpenses.toLowerCase().split(","));

let getExpensesMonth = function() {
    let sum = 0;

    for (let i=0; i<4; i++){
        expenses[i] = prompt("Введите обязательную статью расходов?");
        sum += +prompt("Во сколько это обойдется?");
    }
    console.log(expenses);
    return sum;
};
let expensesAmount = getExpensesMonth();
console.log("Расходы за месяц: " + expensesAmount);

const getAccumulatedMonth = function() {
  return money - expensesAmount;
};
console.log("Накопления за месяц: " + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function() {
    return mission / accumulatedMonth
};
console.log("за какой период будет достигнута цель: " + Math.floor(getTargetMonth()));

let getStatusIncome = accumulatedMonth / 30;
console.log("высчитываем исходя из значения месячного накопления: " + Math.ceil(getStatusIncome));

if (getStatusIncome < 300) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if(getStatusIncome <= 800) {
    console.log("У вас средний уровень дохода");
}else{
    console.log("У вас высокий уровень дохода");
};
