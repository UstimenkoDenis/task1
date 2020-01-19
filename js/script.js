'use strict';

var money = prompt("Ваш бюджет на месяц?", "");
var time =  prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    Income: [],
    savings: false
};
var ques1 = prompt("Введите обязательную статью расходов в этом месяце?", "Payments");
var answr1 = prompt("Во сколько обойдется?", "10000");
var ques2 = prompt("Введите обязательную статью расходов в этом месяце?", "food");
var answr2 = prompt("Во сколько обойдется?", "20000");

appData.expenses = {
    ques1: answr1,
    ques2: answr2
};

alert("Бюджет на 1 день будет "+appData.budget/30);
