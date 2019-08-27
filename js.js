'use strict'
let     money= prompt ("Ваш месячный доход?") ,
        addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую") ,
        costsFirst1= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
        costsFirst2= prompt ("Во сколько это обойдется?") ,
        costsFirst3= prompt ("Какие обязательные ежемесячные расходы у вас есть?") ,
        costsFirst4= prompt ("Во сколько это обойдется?") ,
        income = 50, 
        deposit ,
        mission = 1000,
        period = 6,
        output ,
        budgetMonth,
        budgetDay;  
        
        
        
        
        budgetMonth = money - costsFirst2 - costsFirst4;

        budgetDay = budgetMonth / 30;


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




        console.log(money);
        console.log (addExpenses.split(' '));

        console.log( deposit = confirm("Есть ли у вас депозит в банке?"));
        console.log (typeof money);
        console.log (typeof income);
        console.log (typeof deposit);
        console.log( costsFirst1);
        console.log( costsFirst2);
        console.log( costsFirst3);
        console.log( costsFirst4);


       
        console.log(Number(budgetMonth));
        console.log(Math.ceil((Number(budgetMonth / mission))));
        console.log(Math.floor(budgetDay));

