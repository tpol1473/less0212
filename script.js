let a = 5;
a -= 3;
console.log(a);

const a = true;
console.log(a);


const b = 5;
const c = 5;
console.log(b == c); // true
console.log(b != c); // false

const b = 5;
const c = '5';
console.log(b == c); // true
console.log(b === c); // false
console.log(b != c); // false
console.log(b !== c); // true

const toBe = true;
const notToBe = false;
console.log(toBe && notToBe) // false  (logical and)
// console.log(toBe || notToBe) // false  (logical or)
console.log(toBe ! notToBe) // false  (logical not (!expr)
console.log(toBe ! notToBe)

!!true; // false
!!false; // true
!!5; // false

string(42); // convert to string
Number("42"); // convert to number

consol.log(typeof String(77)); // string
consol.log(typeof String(true)); // true
consol.log(typeof String({a: 5, b: 77})); // [object object]
consol.log(String(function(){console.log(5)})); // function(){ console.log(5) }
consol.log(typeof String([])); // 
consol.log(typeof String([1])); //
consol.log(typeof String([1, 2, 3, 4])); // 1,2,3,4 (massiv)

function doSmt(){
  let a = 5;
  const b = 10;
  a++;
  return a;
}
doSmt();
consol.log(String(doSmt())); // 

const a = 5;
const b = 10;
console.log(a && b) //
console.log(!a) // false
console.log(!!a) // true

const a = 0;
const b = 5;
console.log(a && b) //
console.log(!a) // true
console.log(!!a) // false
console.log(+a) // 0

const a = 'a';
const b = 5;
console.log(a + b) // 'a5'

const a = '4';
const b = {};
console.log(a + b) // 4[object object]

const a = '4';
const b = 3;
console.log(a - b) // 1

const a = '4';
const b = 3;
console.log(a + - b) // 4-3
console.log(a - - b) // 7

const a = '4';
const b = {};
console.log(a - b) // NaN

const a = '4';
const b = [];
console.log(a * b) // 0

const a = '4';
const b = ['9']; // '9'  // 9
console.log(a * b) // 36
console.log(typeof +a) // number
console.log(typeof +undefined) // NaN  number
