// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line



// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Чтобы получить последнюю букву строки, вы можете вычесть единицу из длины строки.
//Например, если const firstName = "Ada"вы можете получить значение последней буквы строки, используя firstName[firstName.length - 1].
//Пример:
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line


//Например, вы можете получить значение предпоследней буквы const firstName = "Augusta"строки, используяfirstName[firstName.length - 3]
//Пример:
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];

//построить новую строку, используя предоставленные переменные
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line


//Вы также можете вкладывать массивы в другие массивы, как показано ниже:
const teams = [["Bulls", 23], ["White Sox", 45]];
//Это также называется многомерным массивом .


//Мы можем получить доступ к данным внутри массивов с помощью индексов .
//Индексы массива записываются в той же скобке, что и строки, за исключением того, что вместо 
//указания символа они указывают запись в массиве. Как и строки, массивы используют индексацию 
//с отсчетом от нуля , поэтому первый элемент в массиве имеет индекс 0.
/Пример
const array = [50, 60, 70];
array[0];
const data = array[1];
array[0]сейчас 50и dataимеет значение 60.
//Примечание. Между именем массива и квадратными скобками не должно быть пробелов, например array [0]. 
//Хотя JavaScript может обрабатывать это правильно, это может сбить с толку других программистов, читающих ваш код.
//В отличие от строк, записи массивов изменяемы и могут быть изменены, даже если массив был объявлен с помощью const.
//Пример

const ourArray = [50, 40, 30];
ourArray[0] = 15;
//ourArrayтеперь имеет значение [15, 40, 30].

//Один из способов представить себе многомерный массив - это массив массивов . 
//Когда вы используете скобки для доступа к вашему массиву, первый набор скобок 
//относится к записям в самом внешнем (первом уровне) массиве, а каждая дополнительная 
//пара скобок относится к следующему уровню записей внутри.
//Пример

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
//arr[3]есть [[10, 11, 12], 13, 14], arr[3][0]есть [10, 11, 12]и arr[3][0][1]есть 11.


//Управление массивами с помощью push ()
//Простой способ добавить данные в конец массива - использовать push()функцию.
//.push()принимает один или несколько параметров и «помещает» их в конец массива.
//Примеры:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
//arr1теперь имеет ценность [1, 2, 3, 4]и arr2ценность ["Stimpson", "J", "cat", ["happy", "joy"]].

//Управление массивами с помощью pop ()
//Другой способ изменить данные в массиве - использовать .pop()функцию.
//.pop()используется для извлечения значения из конца массива. Мы можем сохранить это всплывающее
//значение, присвоив его переменной. Другими словами, .pop()удаляет последний элемент из массива и возвращает этот элемент.
//Любой тип записи может быть извлечен из массива - числа, строки, даже вложенные массивы.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//Первый console.logбудет отображать значение 6, а второй - значение [1, 4].

//.shift()пригодится. Он работает точно так же .pop(), за исключением того, что удаляет первый элемент вместо последнего.
//Пример:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
//removedFromOurArrayбудет иметь значение строки Stimpsonи ourArrayбудет иметь ["J", ["cat"]].

//Управление массивами с помощью unshift ()
//Вы можете не только shiftэлементы в начале массива, вы также можете unshiftэлементы в начале массива, то есть добавлять элементы перед массивом.
//.unshift()работает точно так же .push(), но вместо добавления элемента в конец массива unshift()добавляет элемент в начало массива.
//Пример:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
//После shift, ourArray будет иметь значение ["J", "cat"]. После unshift, ourArray будет иметь значение ["Happy", "J", "cat"].


//JavaScript с функциями
//В JavaScript мы можем разделить наш код на многоразовые части, называемые функциями .
//Вот пример функции:

function functionName() {
  console.log("Hello World");
}
functionName();
//Вы можете вызвать или вызвать эту функцию, используя ее имя, за которым следует круглые скобки,
//например: functionName();Каждый раз, когда функция вызывается, она будет распечатывать сообщение 
//Hello Worldна консоли разработчика. Весь код между фигурными скобками будет выполняться каждый раз при вызове функции.

//Вот функция с двумя параметрами param1и param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun();

function ourFunctionWithArgs(a, b) {
console.log(a + b);
}
ourFunctionWithArgs(10, 5); // Outputs 5


//Вернуть значение из функции с возвратом
//Мы можем передавать значения в функцию с аргументами . Вы можете использовать returnинструкцию для отправки значения обратно из функции.
//Пример

function plusThree(num) {
  return num + 3;
}
const answer = plusThree(5);  //answerимеет ценность 8.
//plusThreeпринимает аргумент для numи возвращает значение, равное num + 3.

function timesFive(num) {
  return num * 5;
}
const answer = timesFive(5);
console.log(answer);


//область видимости относится к видимости переменных. Переменные, которые определены вне функционального блока, 
//имеют глобальную область действия. Это означает, что их можно увидеть повсюду в вашем коде JavaScript.
//Переменные, объявленные без ключевых слов letили const, автоматически создаются в области globalвидимости. 
//Это может привести к непредвиденным последствиям в другом месте вашего кода или при повторном запуске функции. 
//Вы всегда должны объявлять свои переменные с помощью letили const.

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//Переменные, объявленные внутри функции, а также параметры функции имеют локальную область видимости. 
//Это означает, что они видны только внутри этой функции.
//Вот функция myTestс локальной переменной loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
//myTest()Вызов функции отображения строки fooв консоли. console.log(loc)Линия будет выдавать ошибку, так как locне определена вне функции.
function myLocalScope() {
  // Only change code below this line
  let myVar = 68;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
  let myVar = 6;
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


function myLocalScope() {
  // Only change code below this line
  const myVar = 68;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


//Возможно наличие как локальных, так и глобальных переменных с одним и тем же именем. 
//Когда вы это делаете, локальная переменная имеет приоритет над глобальной.
//В этом примере:
const someVar = "Hat";
function myFun() {
  const someVar = "Head";
  return someVar;
}
//Функция myFunвернет строку, Head потому что присутствует локальная версия переменной.


//Функция может включать returnоператор, но это не обязательно. 
//В случае, если у функции нет return оператора, при ее вызове функция 
//обрабатывает внутренний код, но возвращается значение undefined.
//Пример
let sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
//addSum это функция без return оператора. Функция изменит глобальную sumпеременную, но возвращаемое значение функции будет undefined.

let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum = sum + 5;
}
addThree();
addFive();


//Если вы помните из нашего обсуждения сохранения значений с помощью оператора присваивания ,
//все, что находится справа от знака равенства, разрешается до присвоения значения. 
//Это означает, что мы можем взять возвращаемое значение функции и присвоить его переменной.
//Предположим, мы предварительно определили функцию, sumкоторая складывает два числа вместе, тогда:
ourSum = sum(5, 12);
//вызовет sum функцию, которая возвращает значение 17и присваивает его ourSum переменной.
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);  
console.log(processed);  // 2


//Стоять в очереди
//В информатике очередь - это абстрактная структура данных, 
//в которой элементы хранятся в порядке. Новые элементы могут 
//быть добавлены в конце очереди, а старые элементы удалены из передней части очереди.
//Напишите функцию, nextInLineкоторая принимает в качестве аргументов массив ( arr) и число ( item).
//Добавьте число в конец массива, затем удалите первый элемент массива.
//Затем nextInLineфункция должна вернуть удаленный элемент.

function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Понимание логических значений
//Другой тип данных - логический . Логические значения могут иметь только одно из двух значений:
//true или false. По сути, это маленькие переключатели, где true включено и false выключено.
//Эти два состояния исключают друг друга.

function welcomeToBooleans() {
  return !false; // return only true
}

//Использование условной логики с операторами if
//if операторы используются для принятия решений в коде. Ключевое слово if указывает
//JavaScript выполнить код в фигурных скобках при определенных условиях, определенных 
//в скобках. Эти условия известны как Booleanусловия, и они могут быть только trueили false.
//Когда условие оценивается как true, программа выполняет оператор внутри фигурных скобок.
//Когда логическое условие имеет значение false, оператор в фигурных скобках не будет выполняться.

//Псевдокод

if ( условие истинно ) {
  инструкция выполняется
}

//Пример
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
test(true);
test(false);

//test(true) возвращает строку It was true
//и test(false) возвращает строку It was false.

//Когда test вызывается со значением true, if оператор оценивает, myCondition есть это tru eили нет. 
//Поскольку это так true, функция возвращается It was true. Когда мы вызываем test со значением false,
//myCondition is not, true и оператор в фигурных скобках не выполняется, и функция возвращается It was false.

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue)  {
    return "Yes, that was true";
  }
  return "No, that was false";
}
trueOrFalse(true);
trueOrFalse(false);

//операторs сравнения . 
//Все эти операторы возвращают логическое значение true или false значение.
//Самый простой оператор - это оператор равенства ==. 
//Оператор равенства сравнивает два значения и возвращает, true если они эквивалентны
//или false нет. Обратите внимание, что равенство отличается от assignment ( =), 
//который присваивает значение справа от оператора переменной слева.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
//Если myVal равно 10, оператор равенства возвращается true, поэтому код в фигурных скобках будет выполнен,
//и функция вернется Equal. В противном случае функция вернется Not Equal. Чтобы JavaScript мог сравнить два 
//разных типа данных (например, numbersи strings), он должен преобразовать один тип в другой. Это называется 
//принуждением типа. Однако как только это произойдет, он сможет сравнить термины следующим образом:

1   ==  1
1   ==  2
1   == '1'
"3" ==  3
//Для того, эти выражения будут вычисляться true, false, true, и true.

function testEqual(val) {
  if (val == 12) { // 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(12);


//Сравнение с оператором строгого равенства
//Строгое равенство ( ===) является эквивалентом оператора равенства ( ==). 
//Однако, в отличие от оператора равенства, который пытается преобразовать 
//оба сравниваемых значения в общий тип, оператор строгого равенства не выполняет преобразование типа.

//Если сравниваемые значения имеют разные типы, они считаются неравными, и оператор строгого равенства вернет false.

//Примеры

3 ===  3
3 === '3'
// Эти условия вернутся true и false соответственно. Во втором примере 3- это Number тип и '3'это String тип.

function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(7);

function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");  // if === then false

//Сравнение с оператором неравенства
//Оператор неравенства ( !=) противоположен оператору равенства. 
//Это означает, что не равно, и возвращается false tуда, где возвращается равенство, true и наоборот.
//Как и оператор равенства, оператор неравенства преобразует типы данных значений при сравнении.

//Примеры
1 !=  2  // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false

function testNotEqual(val) {
  if (val != 99) { // 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);


//Сравнение с оператором строгого неравенства
//Оператор строгого неравенства ( !==) является логической противоположностью оператора строгого равенства. 
//Это означает «Строго не falseравно » и возвращается там, где вернется строгое равенство, trueи наоборот . 
//Оператор строгого неравенства не преобразует типы данных.

//Примеры
3 !==  3 //false
3 !== '3' //true
4 !==  3 //true

function testStrictNotEqual(val) {
  if (val !== 17) { // 
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);


//Сравнение с оператором Greater Than
//Оператор "больше" ( >) сравнивает значения двух чисел. Если число слева больше числа справа, оно возвращается true. 
//В противном случае возвращается false.
//Как и оператор равенства, оператор «больше» преобразует типы данных в значения при сравнении.
//Примеры
5   >  3   //true
7   > '3'  //true
2   >  3  //false
'1' >  9  //false

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);


// Сравнение с оператором "больше или равно"
// Оператор больше или равно ( >=) сравнивает значения двух чисел. Если число слева больше или равно числу справа, оно возвращается true. 
//В противном случае возвращается false.
// Как и оператор равенства, оператор больше или равно преобразует типы данных при сравнении.
// Примеры
6   >=  6  //true
7   >= '3'  //true
2   >=  3  //false
'7' >=  9  //false

function testGreaterOrEqual(val) {
  if (val >= 20) {  // 
    return "20 or Over";
  }
  if (val >= 10) {  // 
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);


// Сравнение с оператором "меньше"
// Оператор «меньше» ( <) сравнивает значения двух чисел. Если число слева меньше числа справа, 
// оно возвращается true. В противном случае возвращается false. Как и оператор равенства, оператор «меньше» преобразует типы данных при сравнении.

//Примеры
2   < 5  //true
'3' < 7  //true
5   < 5  //false
3   < 2  //false
'8' < 4  //false

function testLessThan(val) {
  if (val < 25) {  // 
    return "Under 25";
  }
  if (val < 55) {  // 
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);


//Сравнение с оператором «меньше или равно»
//Оператор меньше или равно ( <=) сравнивает значения двух чисел. Если число слева меньше или равно числу справа,
//оно возвращается true. Если число слева больше числа справа, оно возвращается false. Как и оператор равенства, 
//оператор «меньше или равно» преобразует типы данных.

//Примеры
4   <= 5  //true
'7' <= 7  //true
5   <= 5  //true
3   <= 2  //false
'8' <= 4  //false

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

//Сравнение с логикой и оператором
//Иногда вам нужно будет тестировать сразу несколько вещей. 
//В логических и оператор ( &&) возвращает trueтогда и только тогда , когда операнды слева и справа от него истинны.

//Такого же эффекта можно добиться, вложив оператор if в другой if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
//вернется, только Yesесли numбольше 5или меньше 10. Эту же логику можно записать как:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

function testLogicalAnd(val) {
  if (val >= 25) {
    if (val <= 50) {
      return "Yes";
    }
  }
  return "No";
}
testLogicalAnd(10);

function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
      return "Yes";
  }
return "No";
}
testLogicalAnd(10);


//Сравнение с логическим оператором ИЛИ
//Логический или оператор ( ||) возвращает , trueесли любой из операндов является true. В противном случае возвращается false.
//Логический или оператор состоит из двух символов труб: ( ||). Обычно его можно найти между клавишами Backspace и Enter.
//Схема ниже должна выглядеть знакомой по предыдущим путевым точкам:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
//вернется, Yes только если num находится между 5 и 10(включая 5 и 10). Эту же логику можно записать как:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
      return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);


//Представляем остальные утверждения
//Когда условие для ifоператора истинно, выполняется следующий за ним блок кода. 
//Что насчет того, когда это условие ложно? Обычно ничего не происходит. 
//С помощью elseоператора может быть выполнен альтернативный блок кода.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

//Представляем операторы Else If
//Если у вас есть несколько условий, которые необходимо решить, вы можете связать if операторы вместе с else if операторами.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}


function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  }
 else {
  return "Between 5 and 10";
 }
}
testElseIf(7);

//Логический порядок в операторах If Else
//Очередность важна в if, else ifзаявлении.
//Функция выполняется сверху вниз, поэтому вы должны быть осторожны с тем, какой оператор будет первым.
//Возьмем для примера эти две функции.
//Вот первое:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
//А второй просто меняет порядок операторов:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
//Хотя эти две функции выглядят почти одинаково, если мы передадим им число, мы получим разные результаты.

foo(0)
bar(0)
// foo(0) вернет строку Less than one и bar(0)вернет строку Less than two.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  }
   else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);
