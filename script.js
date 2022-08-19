const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tip = document.querySelector(".tip-amount");
const total = document.querySelector(".total-amount");

let percentage;

document.querySelector("body").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("five")) {
    percentage = e.target.getAttribute("data-set");
    tipCalc();
  }
  if (e.target.classList.contains("ten")) {
    percentage = e.target.getAttribute("data-set");
    tipCalc();
  }
  if (e.target.classList.contains("fiftheen")) {
    percentage = e.target.getAttribute("data-set");
    tipCalc();
  }
  if (e.target.classList.contains("twenty-five")) {
    percentage = e.target.getAttribute("data-set");
    tipCalc();
  }
  if (e.target.classList.contains("fifty")) {
    percentage = e.target.getAttribute("data-set");
    tipCalc();
  }
});

const tipCalc = function () {
  let billVal = bill.value;
  let peopleNum = people.value;

  document.querySelector(".tip-amount").innerHTML = `$${(
    (billVal * percentage) /
    peopleNum
  ).toFixed(2)}`;
  document.querySelector(".total-amount").innerHTML = `$${(
    billVal / peopleNum +
    (billVal * percentage) / peopleNum
  ).toFixed(2)}`;
};
