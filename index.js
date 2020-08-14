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

console.log(addExpenses.toLowerCase().split(","));

// 5) Удалить из кода переменную budgetMonth

/* let expAmnt = amnt1 + amnt2;
console.log(expAmnt);
let budgetMonth = (money - (expAmnt));
console.log("Monthly Income: " + budgetMonth);
let periodMission = Math.ceil(mission / budgetMonth);
let getStatusIncome = budgetMonth / 30;

console.log("Daily Budget: " + Math.floor(getStatusIncome));
 console.log("Goal will be achieved in: " + periodMission);
*/

// 1) Объявить функцию getExpensesMonth.
const getExpensesMonth = function() {
    return amnt1 + amnt2;
};
console.log("Функция возвращает сумму всех обязательных расходов за месяц: " + getExpensesMonth());

// 2) Объявить функцию getAccumulatedMonth.
const getAccumulatedMonth = function() {
  return money - getExpensesMonth();
};
console.log("Накопления за месяц: " + getAccumulatedMonth());

// 3) Объявить переменную accumulatedMonth
let accumulatedMonth = getAccumulatedMonth();

// 4) Объявить функцию getTargetMonth.
const getTargetMonth = function() {
    return mission / accumulatedMonth
};
console.log("за какой период будет достигнута цель: " + getTargetMonth());

// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
let getStatusIncome = accumulatedMonth / 30;
console.log("высчитываем исходя из значения месячного накопления: " + Math.ceil(getStatusIncome));

if (getStatusIncome < 300) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if(getStatusIncome <= 800) {
    console.log("У вас средний уровень дохода");
}else{
    console.log("У вас высокий уровень дохода");
}

// 7)- вызовы функции showTypeOf
const showTypeof = function(item){
    console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);