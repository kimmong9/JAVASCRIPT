//Array배열
//1. 배열 만들기

const arr1 = new Array();
const arr2 = [1, "안녕", 5, 7, 9];
const arr3 = ["What", "are", "u", "doing", 100, true];
const arr4 = ["감사합니다.", { model: "apple", price: 100 }];

console.log(arr4);
console.log(arr4[1], model);
console.log(arr2[1]);

//2.배열출력
const books = ["html", "css", "script", "react"];
console.log(books);
console.log(books, length);
console.log(books[0]);
console.log(books[books.length - 1]);

//3.loop출력
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

//for (let item of books) {
}
