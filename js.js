'use strict'
let     money= prompt ("Ваш месячный доход?") ,
        addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую") ,
        costsFirst1= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
        costsFirst2= prompt ("Во сколько это обойдется?") ,
        costsFirst3= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
        costsFirst4= prompt ("Во сколько это обойдется?") ,
        income = 500, 
        deposit =confirm("Есть ли у вас депозит в банке?") ,
        mission = 10000,
        period = 6,
        budgetMonth,
        budgetDay;  

        console.log("месячный доход :" + Number(money));
        console.log (addExpenses.split(' '));

        console.log("депозит в банке :" + deposit);
       
        //console.log( "обязательные расходы :" + costsFirst1);
        //console.log( "стоимость обязательных расходов :" + Number(costsFirst2));
        //console.log( "обязательные расходы :" + costsFirst3);
        //console.log( "стоимость обязательных расходов :" + Number(costsFirst4));

        //budgetMonth = money - costsFirst2 - costsFirst4;
        //budgetDay = budgetMonth / 30;
        

        //console.log("месячный бюджет :" + Number(budgetMonth));
        //console.log("сколько до цели :" + Math.ceil(Number(budgetMonth / mission)));
        //console.log("дневной бюджет :" + Math.floor(budgetDay));








        let sum ;
            function getExpensesMonth () {
                sum = Number(costsFirst2) + Number(costsFirst4); 
        }
            getExpensesMonth(costsFirst2 + costsFirst4);
            console.log("сумма обязательных расходов :" + sum);
        
        let accumulatedMonth ;
            function getAccumulatedMonth () {
                accumulatedMonth = Number(money) + Number(income) - Number(sum);
                
          }
          getAccumulatedMonth(money+income - sum);
          console.log("накопления за месяц :" + accumulatedMonth);

        let getMonth ;
          function getTargetMonth () {
            getMonth = Number(mission) / Number(accumulatedMonth);

          }
          getTargetMonth(mission / accumulatedMonth);
          console.log("за какой период будет достигнута цель :" + Math.floor(getMonth) + " месяца");


        let showTypeOf = function (data) {
            console.log(data,typeof(data));
            
        }  
        showTypeOf(money);
        showTypeOf(income);
        showTypeOf(deposit);


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
            console.log(getStatusIncome());
