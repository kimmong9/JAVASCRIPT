//오브젝트 object
//- 자바스크립트 데이터
//- 상태와 행동을 가지는 데이터
//- Phone의 상태(properties) -> color, size
//- Phone의 행동(methods) -> ring, take a picture, play music
//- 형식 { 키 : 값 }

const user = {
  FullName: "Picaso",
  age: 30,
  email: "Picaso@gmail.com",
  works: [
    { id: 1, title: "게르니카", price: 10000, like: 50 },
    { id: 1, title: "아비뇽의 처녀들", price: 30000, like: 80 },
    { id: 1, title: "우는여인", price: 50000, like: 200 },
  ],

  //   login() {
  //     console.log("user loggid in........");
  //   },

  login() {
    console.log("user loggid in........");
  },
  logout() {
    console.log("user loggid out........");
  },
  goodworks,
};

console.log(user);
console.log(user.FullName);

//random number
const num = Math.random();
console.log(num);

//0~9 사이의 정수출력 랜덤하게...
