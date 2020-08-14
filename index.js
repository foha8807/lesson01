'use strict';

let money = +prompt("Ваш месячный доход?", 9900);
let income;
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 40000;
let period = 4;

// console.log(income.length);
// console.log(typeof(mission));
// console.log(typeof addExpenses);

let exp1 = prompt("Введите обязательную статью расходов?", "School expenses");
let amnt1 = +prompt("Во сколько это обойдется?", 3200);
let exp2 = prompt("Введите обязательную статью расходов?", "College Expenses");
let amnt2 = +prompt("Во сколько это обойдется?", 4700);

console.log("Period " + period + " of month");
console.log(`Goal to earn ${mission} USDOllars`);
console.log(addExpenses.toLowerCase().split(","));

// let expAmnt = amnt1 + amnt2;
// console.log(expAmnt);
// let budgetMonth = (money - (expAmnt));
// console.log("Monthly Income: " + budgetMonth);
// let periodMission = Math.ceil(mission / budgetMonth);
// let getStatusIncome = budgetMonth / 30;

// console.log("Daily Budget: " + Math.floor(getStatusIncome));
// console.log("Goal will be achieved in: " + periodMission);

const getExpensesMonth = function() {
    return amnt1 + amnt2;
};
console.log("Функция возвращает сумму всех обязательных расходов за месяц: " + getExpensesMonth());
const getAccumulatedMonth = function() {
  return money - getExpensesMonth();
};
console.log("Get accumulated Month: " + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();
const getTargetMonth = function() {
    return mission / accumulatedMonth
};
console.log("TARGET Month: " + getTargetMonth());

let getStatusIncome = accumulatedMonth / 30;
console.log("etot den: " + Math.ceil(getStatusIncome));

if (getStatusIncome < 300) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if(getStatusIncome <= 800) {
    console.log("У вас средний уровень дохода");
}else{
    console.log("У вас высокий уровень дохода");
}


const showTypeof = function(item){
    console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);