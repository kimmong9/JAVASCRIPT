// 1. 문자열 연결 연산자
console.log("winter" + " is" + " coming");

console.log("10" + 2);

console.log("winter is coming");
const say1 = "winter";
const say2 = "is coming";
console.log(`${say1} ${say2}`);

// 2.산술연산자
console.log(100 + 10);
console.log(100 - 10);
console.log(100 * 10);
console.log(100 / 10);
console.log(100 % 10);
console.log(100 ** 10);

// 3.증강 연산자
let number = 8;
console.log(number);
number++;
console.log(number);
number--;
number--;
number--;
console.log(number);

let num1 = 10;
let num2 = ++num1;
console.log(num1, num2);

let count1 = 10;
let count2 = count1++;
console.log(count1, count2);

// 4. 할당 연산자
let x = 10;
let y = 5;

x = x + y; //x+=y
console.log(x);
x = x - y; //x-=y
console.log(x);
x = x * y; //x*=y
console.log(x);
x = x % y; //x%=y
console.log(x);

//5.비교연산자(true,false 두가지 값만)
console.log(1000 < 100);
console.log(1000 <= 100);
console.log(1000 > 100);
console.log(1000 >= 100);

console.clear();

//6. 논리 연산자
// ||(or), &&(and), !(not)

let a = 100 > 50; //true
let b = 100 > 50; //false
let c = true; //false

// ||(or)은 하나라도 ture면 전부 ture
console.log(a || b || c);

//&&(and)는 전부 ture일때만 ture, 하나라도 false면 false
console.log(a && b && c);

//!(not)은 값을 반대로 변경한다.
b = !b;
console.log(a && b && c);

//동등/일치 연산자
// ==(데이터만 확인), ===(데이터와 문자인지 숫자인지 까지 확인), !=, !== (수학에서의 = 역할)
// ''안에 있는 숫자는 숫자 ㄴ, 문자열
const value1 = "100";
const value2 = 100;

//동등 연산자
console.log(value1 == value2);
console.log(value1 != value2);

//일치 연산자
console.log(value1 === value2);
console.log(value1 !== value2);

console.log("--------------------");
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(undefined === null);
console.log(null == undefined);
console.log(null == undefined);
console.log("--------------------");
