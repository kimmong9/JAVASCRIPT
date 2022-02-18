// 1. 조건 연산자 - if, else if, else

// if(조건) {
// 조건성립시 중괄호에서 실행
// }조건 성립안될시 else

const age = 10;
if (age >= 20) {
  console.log("성인입니다.");
} else {
  console.log("돌아가세요");
}

const month = 5;

if (month >= 3 && month <= 5) {
  console.log("spring...");
} else if (month >= 6 && month <= 8) {
  console.log("summer...");
} else if (month >= 9 && month <= 11) {
  console.log("fall...");
} else {
  console.log("winter...");
}

// 2.삼항조건연산자
// 조건이 맞으면(?) 값1 아니면(:) 값2
const myage = 30;
console.log(myage >= 20 ? "성인" : "청소년");

// 3.switch문

const color = "pink";

switch (color) {
  case "red":
    console.log("I like red");
    break;
  case "blue":
    console.log("I like blue");
    break;
  case "green":
    console.log("I like Green");
    break;
  default:
    console.log("I don't know");
    break;
}

//기본 문형 switch문
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
