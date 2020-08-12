'use strict';

let money = +prompt("Ваш месячный доход?", 9900);
let income;
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 40000;
let period = 4;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
// console.log(income.length);
// console.log(typeof(mission));
// console.log(typeof addExpenses);

let exp1 = prompt("Введите обязательную статью расходов?", "School expenses");
let amnt1 = +prompt("Во сколько это обойдется?", 3200);
let exp2 = prompt("Введите обязательную статью расходов?", "College Expenses");
let amnt2 = +prompt("Во сколько это обойдется?", 4700);

console.log("Period " + + " of month");
console.log(`Goal to earn ${mission} USDOllars`);
console.log(addExpenses.toLowerCase().split(","));

let expAmnt = amnt1 + amnt2;
console.log(expAmnt);
let budgetMonth = (money - (expAmnt));
console.log("Monthly Income: " + budgetMonth);
let periodMission = Math.ceil(mission / budgetMonth);
let budgetDay = budgetMonth / 30;

console.log("Daily Budget: " + Math.floor(budgetDay));
console.log("Goal will be achieved in: " + periodMission);

if (budgetDay < 300) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if(budgetDay <=800) {
    console.log("У вас средний уровень дохода");
}else{
    console.log("У вас высокий уровень дохода");
}