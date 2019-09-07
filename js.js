'use strict'
//перемещение элементов на странице
let books1 = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');
books1[0].insertBefore(book[0],book[2]),
books1[0].insertBefore(book[4],book[2]),
books1[0].insertBefore(book[3],book[2]),
books1[0].insertBefore(book[5],book[2]);

     //Изменяем фон index.html
let fon = document.querySelector('body');
    fon.setAttribute('style', 'background-image: url(./image/adv.jpg)');

//изменяем заголовок книги №3
let heading3 = document.getElementsByTagName('h2')[2].textContent='Книга 3. this и Прототипы Объектов';
//удаляем рекламу
let noAdv = document.querySelectorAll('body'),
    chil = document.querySelectorAll('div')
noAdv[0].removeChild(chil[6]);//шах и мат реклама
//восстановление порядка в главах и во всем мире в перспективе 
let chapter = document.querySelectorAll('ul'),
    level = document.querySelectorAll('li');
    //книга 2
chapter[1].insertBefore(level[12],level[10]);
chapter[1].insertBefore(level[14],level[10]);
console.log(chapter,level);
    //книга 5
chapter[4].insertBefore(level[45],level[38]);
chapter[4].insertBefore(level[39],level[38]);
chapter[4].insertBefore(level[40],level[38]);
    //книга 6
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //добавляем главу книге 6
let clone = level[56].cloneNode();
    chapter[5].appendChild(clone).textContent='Глава 8: За пределами ES6';
//....
