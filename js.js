'use strict'

// узнаем бюджет и валидность

let money,
    start = function () {
      do {
    money = +prompt("Ваш месячный доход?", 50000);
    }
      while (isNaN(money) || money === '' || money === null);
    };
start();

let appData = {
    income: {},
    addIncome: [],
    expenses:{},
    addExpenses:[],
    deposit: false,
    mission:50000,
    period:3,
    budget: money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function(){
      let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
          appData.addExpenses.split(',');
          appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },
  getExpensesMonth : function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        costsFirst1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
      }
      if (i === 1) {
        costsFirst3 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
      }
      let count;
      do {
        count = prompt("Во сколько это обойдется?");
      }
      while (isNaN(count) || count == null || count == '');
      sum += +count;
      }
    return sum;
      },

      budgetMonth: money - expensesAmount,
      budgetDay: budgetMonth / 30,
      
      //возвращаем накопления за месяц
      accumulatedMonth,
      
      getAccumulatedMonth:function () {
        accumulatedMonth = money - expensesAmount;
      },
      
      
    
      //возвращаем период до цели
      
      getTargetMonth:function () {
      let getMonth ;
        getMonth = mission / accumulatedMonth;
        if (getMonth < 0) {
          return "цель не будет достигнута ";
        } else {
          return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
        }
      },
      
      









     }