// variable 변수
// var, let, const
// scope 블럭 {}

//1. var//블럭무시
{
  var age = 30;
}
console.log(age);

//2. let//읽기&쓰기 가능
{
  let title = "html";
  console.log(title);

  title = "css";
  console.log(title);
}

//3. const//상수-읽기만 가능, 변하지 않는다.
{
  const subject = "JAVA";
  console.log(subject);

  //   subject = "javascript";
  //   console.log(subject);
}

//4.변수의 데이터 타입
//원시데이터:Number, String, boolean, null, undefined
//object : 싱글데이터를 묶어놓은 데이터
//function:일급객체

//number
const num = 10;
const width = 20.5;
console.log(num, width);

const a = 1 / 0;
const b = -25 / 0;
const c = "html" / 10;
console.log(a);
console.log(b);
console.log(c);

constnum1 = 10;
constnum2 = 2;
console.log(num1 % num2);

//String
const firstName = "Jonh";
const lastName = "Snow";
const fullName = firstname + "" + lastname;
// const fullName = `${firstname} ${lastname}`;

console.log(fullname);

//null
const fall = null;
console.log(`${fall}이고, 타입은 ${typeof fall}입니다.`);

//undifiend
let winter;
console.log(winte);

//boolean
let abc = 100 > 50;
let bbb = 10 < 5;
console.log(abc);

// 5. 동적타입 - 자바스크립트는 런타임(브라우저에서 실행될 때) 타입이 결정된다.

last word = "winter";
console .log(`값은 ${word}이고, 타입은 ${type word}`)
word=100;