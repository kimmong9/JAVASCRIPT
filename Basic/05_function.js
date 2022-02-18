//1. function 함수(메서드)
//함수선언과 호출

function myfunc() {
  alert("안녕하세요");
}

const myfunc = function () {
  alert("안녕하세요");
  console.log("안녕하세요");
};

myfunc();

//매개변수 parameter
function printMessage(Message) {
  console.log(Message);
}

printMessage("하하하");
printMessage("파파파");

//기본 파라미터
function showInfo(title, name) {
  console(`${title} by ${name}`);
}

showInfo("게르니카", "피카소");
showInfo("풍경");

//Rest 파라미터/Spread 연산자
function printAll() {
  //...
}

printAll("봄", "여름", "가을", "겨울", "안녕");

//Scope
let movie = "하하하"; //global변수(전역변수)

function printMovie() {
  let myMovie = "생활의 발견"; //local변수(지역변수)
  console.log(myMovie);
  console.log(myMovie);
}

printMovie();
//console.log(myMovie);

//리턴(Return)
function plus(a, b) {
  return a + b;
  console.log("계산 잘 되었습니다.");
}

const sum = plus(5, 10);
console.log(sum);

const total = add(5, 8);
console.log(total);

//Arrow
