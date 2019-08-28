'use strict'
let     money= +prompt ("Ваш месячный доход?") ,
        addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую") ,
        costsFirst1= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
        costsFirst2= +prompt ("Во сколько это обойдется?") ,
        costsFirst3= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
        costsFirst4= +prompt ("Во сколько это обойдется?") ,
        income = фриланс, 
        deposit =confirm("Есть ли у вас депозит в банке?") ,
        mission = 10000,
        period = 6,
        budgetMonth,
        budgetDay;  
        // возвращаем обязательные расходы
        let sum;

        function getExpensesMonth() {
           sum = costsFirst2 + costsFirst4; 
        }
            getExpensesMonth();
          //возвращаем накопления за месяц
        let accumulatedMonth ;

        function getAccumulatedMonth () {
          accumulatedMonth = money - sum;     
          }
          getAccumulatedMonth();
          
        let getMonth ;
            //возвращаем период до цели
        function getTargetMonth () {
          getMonth = mission / accumulatedMonth;

          }
          getTargetMonth();
          
            //возвращаем тип данных
        let showTypeOf = function (data) {
            console.log(data,typeof(data));
            
        }  
        showTypeOf(money);
        showTypeOf(income);
        showTypeOf(deposit);

          //возвращаем уровень дохода
        let  getStatusIncome = function () {

        if (budgetDay <= 800){  
           return  ("Высокий уровень дохода")  ;     
        }
        else if (budgetDay <= 300 && budgetDay >= 800 ) {
           return  ("Средний уровень дохода") ;
        }
        else  {
           return  ("Что то пошло не так");
        }
        };
             
            //лог
            console.log("накопления за месяц :" + accumulatedMonth);
            console.log("за какой период будет достигнута цель :" + Math.floor(getMonth) + " месяца");
            console.log(getStatusIncome()); 
            console.log("сумма обязательных расходов :" + sum);
            console.log("месячный доход :" + +money);
            console.log (addExpenses.split(' '));
            console.log("депозит в банке :" + deposit);           
            console.log( "обязательные расходы :" + costsFirst1);
            console.log( "обязательные расходы :" + costsFirst3);
            console.log("месячный бюджет :" + Number(budgetMonth));
            console.log("сколько до цели :" + Math.ceil(Number(budgetMonth / mission)));
            console.log("дневной бюджет :" + Math.floor(budgetDay));
