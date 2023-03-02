
'use strict';
// Пример №1
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических 
// операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 7 + 2,
// 7 - 3,
// 2 * 4,
// 4 / 2,
// поместив результат каждого выражения в соответствующую 
// переменную. Например, let a1 = 7 + 2. Результаты переменных вывести в console.log();
let a1 = 7+2; // 9
let a2 = 7-3;// 4
let a3 = 2*4;// 8
let a4 = 4/2;// 2
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

// Пример №2
// Напишите скрипт, который находит площадь прямоугольника высота 23см. 
// (в числовую переменную height), шириной 10см (в числовую переменную width), 
// значение площади должно хранится в числовой переменной s. (S=a*b);
let height = 23;
let width = 10;
let s;
s = height * width;
console.log(`S = ${s}`);

// Пример №3
// Создайте переменную str и присвойте ей значение 'qwerty'. Обращаясь к отдельным 
// символам этой строки выведите на экран символ 'q', символ 'w', символ 'r'.
let str = 'qwerty';
console.log(str[0]);
console.log(str[1]);
console.log(str[3]);

// Пример №4
// Напишите скрипт, который считает количество секунд в часе.
console.log(60 * 60);

// Пример №5
// Переделайте приведенный код так, чтобы в нем использовались операции 
// +=, -=, *=, /=, ++, --. 
// Количество строк кода при этом не должно измениться. Код для переделки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// console.log(num);
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --; 
console.log(num);

// ДОМАШНЕЕ ЗАДАНИЕ

// Пример №1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// Результаты переменных вывести в console.log();
let b1 = 5%3;
let b2 = 3%5;
let b3 = 5 + '3';
let b4 = '5' - 3;
let b5 = 75 + 'кг';
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);

// Пример №2 
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и 
// диаметром основания 4м (dC), результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let v;
v = heightC * dC;
console.log(`V = ${v}`);

// Пример №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
    let a = 10;
    let b = 2;
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);

// Пример №4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//  Выведите на экран значение переменной result.
    let c = 15;
    let d = 2;
    let result = (c + d);
    console.log(result);

// Пример №5
//  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
    let a = 10;
    let b = 2;
    let c = 4;
    console.log(a + b + c);

// Пример №6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
//  запишите в переменную result. Выведите на экран значение переменной result.
let a=17;
let b=10;
let c=(a - b);
let d=7;
let result=(c + d);
console.log(result);

// Пример №7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.
let name = 'Наталия';
console.log(`Привет, ${name}!`);

// Пример №8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.
let age = 36;
console.log('Мне ' + age + ' лет' + '!');

// Пример №9
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите 
// на экран символ 'a', символ 'c', символ 'e'.
let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

//Пример №10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
    console.log(60 * 60);
    console.log(60 * 60 * 24);
    console.log(60 * 60 * 24 * 30);

//Пример №11
//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. 
// Количество строк кода при этом не должно измениться.
// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// console.log(num);
    let num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    console.log(num);

// Пример №12
// Переделайте этот код так, чтобы в нем использовались операции ++ и --. 
// Количество строк кода при этом не должно измениться.
// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// console.log(num);
    let num = 10;
    num ++;
    num ++;
    nim --;
    console.log(num);



    // Домашнее задание
// Условия
// Пример 1
// В переменной minute лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую).
let minute = 59; 
if (minute > 0 && minute <=14) {
console.log(‘1 quarter’);
} else if (minute > 14 && minute <=29) {
console.log(‘2 quarter’); 
} else if (minute > 29 && minute <=44) {
console.log(‘3 quarter’);
} else if (minute > 44 && minute <= 59) {
console.log(‘4 quarter’); }



// Пример 2
// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr 
// запишем массив дней недели на русском языке, 
// а если имеет значение 'en' – то на английском. 
// для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

let lang;
let arr;
if (lang === ‘ru’) {
arr = 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс';
}
else if (lang === ‘en’) {
arr = 'mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn';
}
console.log(arr);


// Пример 3 
// Напишите код, который предлагает пользователю ввести целое 
// число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, 
// "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, 
// двузначным или трехзначным и более.

let num;
if (num > 0) {
    let result = ("число " + num + " однозначное положительное");
    console.log(result);
}


// Пример 4
// Создаются переменные red и yellow для красного и 
// жёлтого сигналов светофора соответственно.
// В том случае, если переменным red или yellow присвоены 
// значения "нет", горит зелёный сигнал светофора и 
// выводиться сообщение, разрешающее переходить дорогу.
let red;
let yellow;
if (red === ‘нет’ || yellow === 'нет') {
    let green;
    console.log(‘go!’)
}

// Циклы
// Пример 5
// Выведите столбец чисел от 1 до 12.
let i = 1;
while (i <= 12) {
console.log(i);
i++;
}

// Пример 6
// Выведите столбец чисел от 5 до 13.
let i = 5;
while (i <= 13) {
console.log(i);
i++;
}

// Пример 7
// Выведите столбец четн. bых чисел в промежутке от 0 до 16.
for (let i = 0; i <= 16; i++) {
if (i % 2 === 0) {
console.log(i);
}
}

// Пример 8 
// С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]
let result  = 0;
let arr = [2,5,8,3,6];
for (let i = 0; i < arr.length; i++) {
 result = result + arr[i];
} console.log(result);



'use strict';
// function calculateArea(r){
//     let area;
//     if(r<=0){
//         return 0;
//     }else{
//         area = Math.PI * r *r;
//         return area;
//     }
// }
// let radius = 2.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.
// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));

// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let txt = 'js';
// console.log(txt.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
let txt = 'я люблю JS!';
console.log(txt.length);

// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: myDog, years, guests,   
// Функции: dogYears, makeTea
// Встроенные функции: secret
// Аргументы: myDog, 4, guests, 'Earl Grey'
// Параметры: dogname, age, cups, tea, 
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();



// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txt = 'JS';
console.log(txt.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let txt = 'Я люблю JS!';
console.log(txt.slice(-9, -1));

let txt = 'Я люблю JS!';
console.log(txt.substring(2, 10));

let txt = 'Я люблю JS!';
console.log(txt.substr(2, 8));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let txt = 'Я люблю JS!';
console.log(txt.indexOf('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt;
let n;
let result;
if (txt.length > n) {
result = text.substr(n) + '...';
} else {
    result = txt;
}
console.log(result);

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let txt = 'Я-люблю-JS!';
console.log(txt.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let txt = 'я люблю JS';
console.log(txt.split(''));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let txt = 'привет мир';
console.log(txt.split(''));

'use strict';
// Используя литерал объекта создайте пустой объект cat.
// Добавьте свойство name со значением "Roxy".
// Добавьте свойство lags со значением 4.
// Добавьте свойство color со значением "grey".
// Добавьте свойство full name со значением "Roxy, красивая кошка".
// Выведите full name через console.log().
// let cat = {};
// cat.name = "Roxy";
// cat.lags = 4;
// cat.color = "grey";
// cat["full name"] = "Roxy, красивая кошка";
// console.log(cat["full name"]);

// Напишите функцию-конструктор Person, которая принимает два параметра: 
// name (имя) и age (возраст).
// С помощью оператора new создайте объект person_1, передающий в 
// функцию-конструктор аргументы: имя "Andrey" и возраст 28.
// Выведите свойства объекта person_1 через console.log().
// Добавьте к шаблону объекта Person свойство specialty с помощью 
// prototype. Значением свойства будет "менеджер".
// Выведите свойство specialty объекта person_1 через console.log().
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let person_1 = new Person('Andrey', 28);
// console.log(person_1.name);
// console.log(person_1.age);
// console.log(person_1);

// Person.prototype.specialty = "менеджер";
// console.log(person_1.specialty);

// Используя литерал объекта создайте объект cat с тремя свойствами: 
// name, legs и color.
// С помощью Object.create() создайте объект kitten 
// объектом-прототипом которого будет cat.
// Выведите свойства объекта kitten через console.log().

// let cat = {
//     legs:4,
//     name : 'Roxy',
//     color: 'grey'
// }
// let kitten = Object.create(cat);
// console.log(kitten.name);
// console.log(kitten.legs);
// console.log(kitten.color);

// Реализуйте класс Worker (Работник), который будет иметь следующие 
// свойства: name (имя), surname (фамилия), rate (ставка за день работы), 
// days (количество отработанных дней). Также класс должен иметь метод 
// getSalary(), который будет выводить зарплату работника. Зарплата - 
// это произведение (умножение) ставки rate на количество отработанных 
// дней days.

class worker{
    constructor(name, surname, rate,days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
worker = new worker('Andrey', 'Makeenko', 100, 21);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getSalary());

//Домашнее задание
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.
    var city1 = {};
    city1.name = "ГородN";
    city1.population = 10000000;

// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
let city2 = {
    name = "ГородN";
    population: 1еб
};

// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.
function getName() { 
    return this.name; }
    city1.getName = getName;
    city2.getName = getName;

// Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.
function exportStr() {
    return this.name
}
function exportStr() { return `name=${this.name}\npopulation=${this.population}\n`; }
city1.exportStr = exportStr;
city2.exportStr = exportStr;

// Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..
function getObj() {
    return this;
}
function getCity() {
    return getObj.apply(this).getName();
}
city1.getCity = getCity;
city2.getCity = getCity;

console.log(city1.getCity());
console.log(city2.getCity());
console.log(city1.exportStr());
console.log(city2.exportStr());


// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
//let d1 = [45,78,10,3];
//d1[7] = 100;
//console.log(d1);
//console.log(d1[6],[7]);


// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.
//let d2 = [45,78,10,3];
//let sum2 = 0;
//for (i = 0; i < d2.length; i++) {
    //sum2 += d2[i];
//}
//console.log(sum2);

// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
//let d3 = [45,78,10,3];
//d3[7] = 100;
//let sum3 = 0;
//for (i = 0; i < d3.length; i++) {
    //sum3 += d3[i];
//}
//console.log(sum3);

// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
//let d4 = [45,78,10,3];
//d4.sort(function my(a,b) {
  //return b - a;
//});
//console.log(d4);




// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
//let d1 = [45,78,10,3];
//d1[7] = 100;
//console.log(d1);
//console.log(d1[6],[7]);



// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.
//let d2 = [45,78,10,3];
//let sum2 = 0;
//for (i = 0; i < d2.length; i++) {
    //sum2 += d2[i];
//}
//console.log(sum2);


// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
//let d3 = [45,78,10,3];
//d3[7] = 100;
//let sum3 = 0;
//for (i = 0; i < d3.length; i++) {
    //sum3 += d3[i];
//}
//console.log(sum3);


// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
//let d4 = [45,78,10,3];
//d4.sort(function my(a,b) {
  //return b - a;
//});
//console.log(d4);



