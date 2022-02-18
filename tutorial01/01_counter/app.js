const price = document.querySelector(".price");
const count = document.querySelector(".count");
const sum = document.querySelector(".sum");

const init_Price = 15000;
const num = 1;

const init_Price = 15000;
let num = 1;

price.textContent = init_Price;
count.textContent = num;
sum.textContent = init_Price * num;

plus.addEventListener("click", function () {
  num++;
  sum.textContent = init_Price * num;
  count.textContent = num;
});

minus.addEventListener("click", function () {
  num--;
  sum.textContent = init_Price * num;
  count.textContent = num;
});

reset.addEventListener("click", function () {
  num = 1;
  sum.textContent = init_Price * num;
  count.textContent = num;
});
