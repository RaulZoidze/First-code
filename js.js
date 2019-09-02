'use strict'

// узнаем бюджет и валидность

let money,
    start = function () {
      while (isNaN(money) || money === '' || money === null){
        money = prompt("Ваш месячный доход?", 50000);
      };
    };
start();

let expensesAmount,
    accumulatedMonth,
    getMonth,
    costsFirst1,
    costsFirst3,     
    budgetMonth,// ДВЕ ПЕРЕМЕННЫЕ УДАЛИТЬ НА ХУЙ
    budgetDay;
    

    
    


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
          appData.addExpenses=addExpenses.toLowerCase().split(',');
          appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },
    getExpensesMonth:function () {
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
      } ,

    getAccumulatedMonth:function () {
        accumulatedMonth = money - expensesAmount;
      },

      //возвращаем период до цели

    getTargetMonth:function () {
       getMonth = appData.mission / accumulatedMonth;
      if (getMonth < 0) {
        return "цель не будет достигнута ";
    } else {
        return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
    }
  },

  //возвращаем уровень дохода
getStatusIncome:function () {

  if (budgetMonth >= 800) {
    return ("Высокий уровень дохода");
  } else if (budgetMonth <= 300 && budgetDay >= 800) {
    return ("Средний уровень дохода");
  } else {
    return ("Что то пошло не так");
  }
}

      
};

appData.asking();
expensesAmount=appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getTargetMonth();
appData.getStatusIncome();


budgetMonth = money - expensesAmount;
budgetDay = budgetMonth / 30;
//лог
console.log("сумма обязательных расходов :" + expensesAmount);
console.log("накопления за месяц :" + accumulatedMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log("месячный доход :", +money);
console.log("депозит в банке :" + appData.deposit);
