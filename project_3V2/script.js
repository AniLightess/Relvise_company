//
// var, let? cost
//
var a = 0; // do not use var, it is deprecated!

let b = "some text";
const c = 100;

b = "new text";
//c = 101; // error!

//
// types
//
let numberVariable = 1;
let bigNumberVariable = BigInt(100);
let bigNumberVariable1 = 100n;
let letterVariable = "a"; // symbol in strict languages
let stringVariable = "new text";
let booleanVariable = true;
let undefinedVariable;
let nullVariable = null;

console.log("====================");

console.log(numberVariable, typeof numberVariable);
console.log(bigNumberVariable, typeof bigNumberVariable);
console.log(bigNumberVariable1, typeof bigNumberVariable1);
console.log(letterVariable, typeof letterVariable);
console.log(stringVariable, typeof stringVariable);
console.log(booleanVariable, typeof booleanVariable);
console.log(undefinedVariable, typeof undefinedVariable);
console.log(nullVariable, typeof nullVariable, nullVariable === null);

console.log("====================");

// console.log(numberVariable + bigNumberVariable); // error!
console.log(stringVariable + letterVariable);

console.log(booleanVariable, !booleanVariable);
console.log(undefinedVariable, !undefinedVariable);
console.log(nullVariable, !nullVariable);
console.log(stringVariable, !stringVariable);
console.log("", !"");
console.log(1, !!1, Boolean(1), !1); // 1, false
console.log(0, !!0, Boolean(0), !0); // 0, true
console.log("1", !"1");
console.log("0", !"0");

console.log("====================");

const numberString = "123";
const stringNumber = 123;

console.log(numberString + stringNumber);
console.log(stringNumber + numberString);

console.log(+numberString + stringNumber);
console.log(stringNumber + Number(numberString));

console.log(numberString + ("" + stringNumber));
console.log(stringNumber.toString() + numberString);
console.log(String(stringNumber) + numberString);

console.log(numberString, stringNumber);

console.log("====================");

// equalization
const eqNumber = 1;
const eqString = "1";

console.log(eqNumber == eqString);
console.log(eqNumber === eqString);

console.log("====================");

//todo: test with other types (also null and undefined)

// conditions
let ifString = "News!!!";

const checkNews = (news) => {
  if (news) {
    console.log(news);
  } else {
    console.log("No news (((");
  }
};

checkNews(ifString);

ifString = "";

checkNews(ifString);

console.log("====================");

// todo: learn about js OR & AND (||, &&)

//
// cycles (while, do while, for)
//

let k = 0;
while (k < 11) {
  console.log(++k);
}

console.log("====================");

let i = 0;
while (i < 11) {
  console.log(i++);
}

console.log("====================");

let j = 0;
do {
  console.log((j += 2));
} while (j < 22);

console.log("====================");

let q = 0;
do {
  console.log(q);
  q += 2;
} while (q < 22);

console.log("====================");

for (let w = 0; w < 11; w++) {
  console.log(w);
}

console.log("====================");

// todo: endless cycles

// functions

const createSquare = (value) => {
  console.log("createSquare");
  const result = value * value * value;
  return result;
};

const createSquare1 = (value) => {
  console.log("createSquare1");
  return value * value * value;
};

console.log(createSquare(3));
console.log(createSquare1(3));