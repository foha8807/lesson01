'use strict';

let money1 = +prompt("Ваш месячный доход?");
let money2 = +prompt("Ваш месячный доход?");
let income;
var addExpenses1 = +prompt("Перечислите возможные расходы");
var addExpenses2 = +prompt("Перечислите возможные расходы");
let deposit;
let period;

// console.log(typeof(money));
// console.log(typeof(income));
// console.log(typeof(addExpenses));
// console.log(typeof(deposit));
// console.log(typeof(mission));
// console.log(typeof(period));

let mon1 = console.log('expenses1: ', money1);
let mon2 = console.log('expenses2: ', money2);
let exp1 = console.log('amount1: ', addExpenses1);
let exp2 = console.log('amount2: ', addExpenses2);
console.log(confirm("Есть ли у вас депозит в банке?"));
const budgetMonth = console.log('бюджет на месяц: ', ((money1+money2)-(addExpenses1+addExpenses2)));
const mission = Math.max(budgetMonth * 12);
console.log('за сколько месяцев', mission);
