


//1
// let name = prompt('Как вас зовут?'),
//     age = prompt('Сколько вам лет?'),
//     city = prompt('В каком городе вы проживаете?'),
//     phone = prompt('Ваш номер телефона'),
//     email = prompt('Адрес вашей электронной почты'),
//     company = prompt('В какой организации вы работаете');

// document.write('Меня зовут ' + name,
//             ' мне ' + age + ' лет',
//             ' я проживаю в городе ' + city +
//             ' работаю в компании ' + company, 
//             ' Мои контактные данные ' + email+'\n' + phone  + "<br \/>");

//2

// document.write(name, ' родился ', 2021-age, ' году'); // доделать с датами


//3
// let a = 235652
// let b = 2+3+5
// let c = 6+5+2
// if(b==c){
//     console.log('Да')
// } else {
//     console.log('Нет') //надо добавить автодобор цифр
// }


//4

// let p = 1;
// if(p > 0){
//     console.log('Верно')
// } else{
//     console.log('Не верно')
// }


//5 

// let a5 = 10,
//     b5 = 2;
// document.write('Сумма =  ', a5+b5 + "<br \/>",'Разность = ', a5-b5 + "<br \/>",'Произведение = ', a5*b5 + "<br \/>",'Сумма =  ', a5/b5 + "<br \/>", 'Возведение суммы a и b в квадрат = ', (a5+b5)**2 + "<br \/>")


//6-1 // if (a5 > 2, a5 < 11, b5 >= 6, b5 < 14) 

// if(a5 < 2) {
//     console.log('Неверно')
// } else if(a5 > 11) {
//     console.log('Неверно')
// } else {
//     console.log('Верно')
// }

//6-2

// if(b5 <= 6 ) {
//     console.log('Неверно')
// } else if (b5 > 14) {
//     console.log('Неверно')
// } else {
//     console.log('Верно')
// }


//6-3

// if(a5 < 2) {
//     console.log('Неверно')
// } else if(a5 > 11) {
//     console.log('Неверно')
// } else if(b5 <= 6) {
//     console.log('Неверно')
// } else if(b5 > 14) {
//     console.log('Неверно')
// } else {
//     console.log('Верно')
// }

//7

// let n = prompt('Введите число от 1 до 59');

// if(n < 15) {
//     console.log('1 четверть')
// } else if (n >= 15 && n <30) {
//     console.log('2 четверть')
// } else if(n >= 30 && n < 45){
//     console.log('3 четверть')
// } else if(n >= 45 && n < 59){
//     console.log('4 четверть')
// } else {
//     console.log('Введены неверные данные')
// }


//8 

// let day = prompt('Введите число от 1 до 31');

// if (day > 0 && day < 10) {
//     alert('1 декада')
// } else if(day >= 10 && day < 20){
//     alert('2 декада')
// } else if(day >= 20 && day <= 31){
//     alert('3 декада')
// } else {
//     alert('Введены неверные данные')
// }

//8-2 нужно посмотреть и доделать

// switch (Math.round (day/10)) {
//     case 1:
//         alert('2 декада')
//     break;
//     case 2:
//         alert('3 декада')
//     break;
//     case 3:
//         alert('4 декада')
//     break;
//     default: alert('Введены неверные данные')
// }


//9

// let day2 = prompt('Введите количество дней');
//     year = day2/365,
//     month = day2/31,
//     week = day2/7,
//     watch = day2*24,
//     minutes = day2*1440,
//     second = day2*86400;
  
//     document.write('Заданно дней ' + day2 + '<br\/>',)

//     if(year > 1){
//         document.write('Лет ' + year + '<br\/>')
//     } else if(year){
//         document.write('Меньше одного года' + '<br\/>')
//     };
    
//     if(month > 1){
//         document.write('Месяцев ' + month + '<br\/>')
//     } else if(month){
//         document.write('Меньше одного месяца' + '<br\/>')
//     };
    
//     if(week > 1){
//         document.write('Недель ' + week + '<br\/>')
//     } else if(week){
//         document.write('Меньше одной недели' + '<br\/>')
//     };

//     document.write( 'Часов ' + watch + '<br\/>', 'Минут ' +  minutes + '<br\/>', 'Секунд ' + second);



//10 

// let day3 = prompt('Введите порядковый номер дня в году');



// if(day3 <= 30) {
//         alert('Январь')
//     } else if (day3 > 30 && day3 <= 60) {
//         alert('Февраль')
//     } else if(day3 > 60 && day3 <= 90){
//         alert('Март')
//     } else if(day3 > 90 && day3 <= 120){
//         alert('Артель')
//     } else if(day3 > 120 && day3 <= 150) {
//         alert('Май')
//     } else if (day3 > 150 && day3 <= 180) {
//         alert('Июнь')
//     } else if(day3 > 180 && day3 <= 210){
//         alert('Июль')
//     } else if(day3 > 210 && day3 <= 240){
//         alert('Аргуст')
//     } if(day3 > 240 && day3 <= 270) {
//         alert('Сентябрь')
//     } else if (day3 > 270 && day3 <= 300) {
//         alert('Октябрь')
//     } else if(day3 > 300 && day3 <= 330){
//         alert('Ноябрьрт')
//     } else if(day3 > 330 && day3 <= 360){
//         alert('Декабрь')
//     } else (day3 > 361)
       

//     switch (Math.round (day3/120)){
//         case 0:
//             alert ("Зима")
//             break;
//         case 1:
//             alert ("Весна")
//             break;
//         case 2:
//             alert ("Лето")
//             break;
//         case 3:
//             alert ("Осень")
//             break;
//         case 4:
//             alert ("Осень")
//             break}



   