alert ("Hello Glo academy!");

console.log('hello world') 

let  today = new Date(),
     hourNow = today.getHours()
     greeting;

    if ( hourNow > 18 )  {
        greeting = 'Добрый Вечер Glo academy! ';
    }  else if ( hourNow > 12 ) {
        greeting = 'Добрый День Glo academy!' ;
    }  else if ( hourNow > 0 ) {
        greeting = 'Доброе утро Glo academy!' ;
    }   else {
        greeting = 'Hello world Glo academy!'
    }

    alert ( greeting ) ;
    console.log ( greeting );




