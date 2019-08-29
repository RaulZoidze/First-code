'use strict'
    let money ,
        addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую") ,
        costsFirst1,
        costsFirst3,
        income = "фриланс", 
        deposit =confirm("Есть ли у вас депозит в банке?") ,
        mission = 10000,
        period = 6,
        budgetMonth,
        budgetDay,
        expensesAmount; 
        budgetMonth = money - expensesAmount;
        budgetDay = budgetMonth / 30;
                
        // узнаем бюджет и валидность
        let   start = function () {
         do {
          money= +prompt ("Ваш месячный доход?",50000 );
         }
         while(isNaN (money) || money === '' || money === null) {}
         };
         start();


        // возвращаем обязательные расходы + валидность
        let getExpensesMonth = function () {
        let sum=0;
          for (let i = 0; i < 2;i++) {
            if (i === 0) {
              costsFirst1= prompt ("Какие обязательные ежемесячные расходы у вас есть?");
           }
            if (i === 1) {
              costsFirst3= prompt ("Какие обязательные ежемесячные расходы у вас есть?");
           }
           }
            do { 
              sum += +prompt ("Во сколько это обойдется?")
              sum += +prompt ("Во сколько это обойдется?")
           }
            while (isNaN (sum) || sum === null ) {};
           return sum;
            }
           expensesAmount = getExpensesMonth();
           console.log("сумма обязательных расходов :" + expensesAmount);

            //возвращаем накопления за месяц
        let accumulatedMonth ;

            function getAccumulatedMonth () {
           accumulatedMonth = money - expensesAmount;                
           }
           getAccumulatedMonth();
           console.log("накопления за месяц :" + accumulatedMonth);
        let getMonth ;
            //возвращаем период до цели

            function getTargetMonth () {
           getMonth = mission / accumulatedMonth;
            if (getMonth < 0) {
           console.log("цель не будет достигнута ")
           }
            else {
           console.log("цель будет достигнута за  :" + Math.floor(getMonth) + " месяца");}
           }
           getTargetMonth();
          

      

          //возвращаем уровень дохода
        let  getStatusIncome = function () {

            if (budgetMonth >= 800){  
           return  ("Высокий уровень дохода")  ;     
           }
            else if (budgetMonth <= 300 && budgetDay >= 800 ) {
           return  ("Средний уровень дохода") ;
           }
            else  {
           return  ("Что то пошло не так");
           }
           };

       

           if (budgetDay < 0  ) {
          console.log("дневной бюджет :Что-то пошло не так")
           }
           else {
          console.log("дневной бюджет :" + Math.floor(budgetDay));
           };
     
        //возвращаем тип данных
        let showTypeOf = function (data) {
           console.log(data,typeof(data));                        
           }  
            showTypeOf(money);
            showTypeOf(income);
            showTypeOf(deposit);
            //лог
           console.log(getStatusIncome()); 
           console.log("месячный доход :" + +money);
           console.log (addExpenses.split(' '));
           console.log("депозит в банке :" + deposit);
