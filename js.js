'use strict'

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additIncomeItem = document.querySelectorAll('.additional_income_item'),
    depBox = document.querySelector('#deposit_check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additIncomValue = document.getElementsByClassName('additional_income-value')[0],
    additExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    targetAmount = document.querySelector('target-amount'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additExpenses = document.querySelector('additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additExpensesItem = document.querySelector('.additional_expenses-item');
    
let expensesAmount,
    accumulatedMonth,
    getMonth,
    costsFirst1,
    costsFirst3,     
    budgetMonth,
    budgetDay,
    itemIncome,
    cashIncome,
    addExpenses,
    count;

      
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
    budget:0,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    start: function () {
     if (salaryAmount.value === ''){
       alert('Ошибка! Введите данные!');
       return;
     }
       appData.budget = salaryAmount.value;
       appData.getExpenses();
       appData.getAddExpenses();
       appData.getExpensesMonth();
       appData.getBudget();
       appData.getAddIncome();
      // appData.getTargetMonth();
      // appData.getStatusIncome();
      // appData.getInfoDeposit();
       appData.showResult();
    },
    //результат вычислений дневной бюджет.месячный.и сумма расходов
    showResult: function() {
      budgetMonthValue.value = +appData.budgetMonth;
      budgetDayValue.value = +appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additExpensesValue.value = appData.addExpenses.join(', ');
      additIncomValue.value = appData.addIncome.join(', ');

    },
    //блок добавляющий поле ввода для "обязательные расходы"
    addExpensesBlock: function () {
      
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems,expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
          expensesPlus.style.display = 'none';
        }
      
    },
    //блок расходов и цены
    getExpenses: function () {
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
          if (itemExpenses !== '' && cashExpenses !== '') {
            appData.expenses[itemExpenses] = cashExpenses;
          }
        
      }
      )},
    getAddExpenses: function() {
        let addExpenses = additExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
              item = item.trim();
              if (item !== '' ) {
                appData.addExpenses.push(item);
              }
            })
    },
    getAddIncome: function() {
        additIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            appData.addIncome.push(itemValue)
        }

      })
    },

    asking: function(){
      //вопросы 
          if (confirm("Есть ли у вас дополнительный заработок?")) {

            do {itemIncome = prompt("Какой у вас дополнительный заработок?");}
              while (Number(itemIncome) || itemIncome === '' ||  itemIncome === null)

            do {cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?");}  
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null){
          };
      
            appData.income[itemIncome] = cashIncome;
          }
          //возможные доходы
      
            do {addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");}
            while(Number(addExpenses) || addExpenses === '' || addExpenses === null)  
            appData.addExpenses=addExpenses.trim().toUpperCase().split(',');
            appData.deposit = confirm("Есть ли у вас депозит в банке?");
      let str;
      } , //считает сумму обязательных расходов
    getExpensesMonth:function () {
          for (var key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
          };
          },
          //считает (должно считать) бюджет в день || бюджет в месяц
    getBudget:function() {
            appData.budgetMonth = +appData.budget,
            appData.budget- +appData.expensesMonth,
            appData.budgetDay = +appData.budgetMonth /30;
      },

          //возвращаем период до цели

    getTargetMonth:function () {
            accumulatedMonth = appData.budget - appData.expensesMonth;     //накопления за месяц 
            getMonth = appData.mission / accumulatedMonth;
          if (getMonth < 0) {
            return "цель не будет достигнута ";
      }   else {
            return "цель будет достигнута за  :" + Math.floor(getMonth) + " месяца";
      }
      },
          //возвращаем уровень дохода

    getStatusIncome:function () {
          if (appData.budgetMonth >= 800) {
            return ("Высокий уровень дохода");
      }   else if (appData.budgetMonth >= 300 && appData.budgetMonth < 800) {
            return ("Средний уровень дохода"); 
      }
          else if (appData.budgetMonth < 300 && appData.budgetMonth <= 0) {  
            return ("Низкий уровень дохода");               //!!!!!
      }   else { 
            return ("Что то пошло не так");
      }
      },
          //депозит 
    getInfoDeposit: function () {
          if (appData.deposit ) {  
          do {appData.percentDeposit = prompt("Какой годовой процент?", "10"); } 
                  while ( isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null )
          do {appData.moneyDeposit = prompt ("Какая сумма заложена ?" ," 10000");} 
                  while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null)
      }
      },
    calcSavedMoney :function () {
          return appData.budgetMonth * appData.period;
      }
      };
          expensesPlus.addEventListener('click', appData.addExpensesBlock);
          start.addEventListener('click', appData.start);

    //for (let key in appData) {
        // console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]) 
    //}
  
