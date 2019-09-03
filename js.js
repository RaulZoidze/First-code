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
    budgetMonth,
    budgetDay;    

let count;
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
      //вопросы 
      let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
          appData.addExpenses=addExpenses.toLowerCase().split(',');
          appData.deposit = confirm("Есть ли у вас депозит в банке?");

          let str;
              // цикл,задает вопрос:ответ 2 раза
          let sum = 0;
          for (let i = 0; i < 2; i++) {
           if (i === 0) {
             costsFirst1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
             str = costsFirst1;
           }
           if (i === 1) {
              costsFirst3 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
              str = costsFirst3;
            }
          
          do {
            count = prompt("Во сколько это обойдется?");
          }
          while (isNaN(count) || count == null || count == '');
          appData.expenses[str] = count;
          }
      } , //считает сумму обязательных расходов
      getExpensesMonth:function () {

        for (var key in appData.expenses) {
          appData.expensesMonth += +appData.expenses[key];
        };
      },
          //считает (должно считать) бюджет в день || бюджет в месяц
      getBudget:function() {
        appData.budgetMonth = money - appData.expenses,
        appData.budgetDay=appData.budgetMonth /30;
      },

      //возвращаем период до цели

      getTargetMonth:function () {
        accumulatedMonth = money - appData.expenses;     //накопления за месяц 
        getMonth = appData.mission / accumulatedMonth;
       if (getMonth < 0) {
         return "цель не будет достигнута ";
    }  else {
          return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
    }
  },

  //возвращаем уровень дохода
getStatusIncome:function () {

  if (budgetMonth >= 800) {
    return ("Высокий уровень дохода");
  } else if (budgetMonth <= 300 && budgetMonth > 800) {
    return ("Средний уровень дохода"); 
  }
    else if (budgetMonth < 300 && budgetMonth <= 0) {  
      return ("Низкий уровень дохода");               //!!!!!
  } else { 
    return ("Что то пошло не так");
  }
}

      
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();    //GETBUDGET
appData.getTargetMonth();
appData.getStatusIncome();
//лог
console.log(appData.expenses);// вывод вопрос:ответ (расходы)
console.log("сумма обязательных расходов :" + appData.expensesMonth);
console.log(appData.getExpenesMonth);
console.log("накопления за месяц :" + accumulatedMonth); //!!!!



console.log("budget month :" + appData.budgetMonth);
console.log("budget Day :" + appData.budgetDay);

//  Нет информации нужно ли это     console.log(appData.getTargetMonth);


console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log("месячный доход :", +money);
console.log("депозит в банке :" + appData.deposit);




