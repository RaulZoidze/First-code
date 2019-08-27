'use strict'
let     COSTS1 ,
        COSTS2 ,
        COSTS3 ,
        COSTS4 ,
        money ,
        addExpenses  ,
        income = 50, 
        deposit ,
        mission = 1000,
        period = 6,
        output ,
        budgetMonth,
        budgetDay;  
        
        money= prompt ("Ваш месячный доход?");
        addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        

        console.log(money);
        console.log (addExpenses.split(' '));

        console.log( deposit = confirm("Есть ли у вас депозит в банке?"));
        console.log (typeof money);
        console.log (typeof income);
        console.log (typeof deposit);
        console.log( COSTS1 = prompt ("Какие обязательные ежемесячные расходы у вас есть?"));
        console.log( COSTS2 = prompt ("Во сколько это обойдется?"));
        console.log( COSTS3 = prompt ("Какие обязательные ежемесячные расходы у вас есть?"));
        console.log( COSTS4 = prompt ("Во сколько это обойдется?"));

      budgetMonth = money - COSTS2 - COSTS4;

      budgetDay = budgetMonth / 30;

        console.log(Number(budgetMonth));
        console.log(Math.ceil((Number(budgetMonth / mission))));
        console.log(Math.floor(budgetDay));

       

        if (budgetDay > 800){  
            output = "Высокий уровень дохода"  ;     
        }
        else if (budgetDay > 300 && budgetDay < 800 ) {
            output = "Средний уровень дохода" ;
        }
        else if (budgetDay > 0 && budgetDay < 300) {
            output = "Низкий уровень дохода" ;
        }
        else  {
            output = "Что то пошло не так";
        }
         console.log(output);
