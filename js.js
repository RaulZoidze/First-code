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
    budgetDay,
    itemIncome,
    cashIncome;

let count;

      
let appData = {
    income: {},
    addIncome: [],
    expenses:{},
    addExpenses:[],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit:0,
    mission:50000,
    period:3,
    budget: money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function(){
      //вопросы 
          if (confirm("Есть ли у вас дополнительный заработок?")) {

            do {itemIncome = prompt("Какой у вас дополнительный заработок?");}
              while (Number(itemIncome) || itemIncome === null)
                
            do {cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?");}  
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null){
            };
            appData.income[itemIncome] = cashIncome;
          }

      let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
          appData.addExpenses=addExpenses.toUpperCase().split(',');
          appData.deposit = confirm("Есть ли у вас депозит в банке?");

      let str;
              // цикл,задает вопрос:ответ 2 раза
      let sum = 0;
          for (let i = 0; i < 2; i++) {
           if (i === 0) {

        do {costsFirst1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");}
            while (Number(costsFirst1) || costsFirst1 === null)
               str = costsFirst1;}
           if (i === 1) {
        do {costsFirst3 = prompt("Какие обязательные ежемесячные расходы у вас есть?");}
            while (Number(costsFirst3) || costsFirst3 === null)
               str = costsFirst3;}
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
        appData.budgetMonth = money - appData.expensesMonth,
        appData.budgetDay=appData.budgetMonth /30;
      },

      //возвращаем период до цели

      getTargetMonth:function () {
        accumulatedMonth = money - appData.expensesMonth;     //накопления за месяц 
        getMonth = appData.mission / accumulatedMonth;
       if (getMonth < 0) {
         return "цель не будет достигнута ";
    }  else {
          return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
    }
    
  },

  //возвращаем уровень дохода
      getStatusIncome:function () {

        if (appData.budgetMonth >= 800) {
          return ("Высокий уровень дохода");
      } else if (appData.budgetMonth >= 300 && appData.budgetMonth < 800) {
          return ("Средний уровень дохода"); 
      }
        else if (appData.budgetMonth < 300 && appData.budgetMonth <= 0) {  
          return ("Низкий уровень дохода");               //!!!!!
      } else { 
          return ("Что то пошло не так");
      }
   },

      getInfoDeposit: function () {
        if (appData.deposit ) {  
          do {appData.percentDeposit = prompt("Какой годовой процент?", "10"); } 
                  while ( isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null )
          do {appData.moneyDeposit = prompt ("Какая сумма заложена ?" ," 10000");} 
                  while (Number(appData.moneyDeposit) || appData.moneyDeposit === null)
            
      }
   },

      calcSavedMoney :function () {
          return appData.budgetMonth * appData.period;
      }
      
   };

appData.asking();
appData.getExpensesMonth();
appData.getBudget();    //GETBUDGET
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
//лог
console.log(appData.getTargetMonth());
console.log(appData.expenses);// вывод вопрос:ответ (расходы)
console.log("сумма обязательных расходов :" + appData.expensesMonth);
console.log(appData.getStatusIncome());
console.log(appData.addExpenses);

    for (let key in appData) {
         console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key])
}



