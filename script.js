'use strict';

/*
- Elementlarni belgilab olamiz
*/

const billInputEl = document.querySelector('#bill_input');
const customSelectEl = document.querySelector('#custom_select');
const peopleNumbersEl = document.querySelector('#people_numbers');

const totalEmountEl = document.querySelector('#total_amount');
const totalPerPersonEl = document.querySelector('#total_person');

const btn = document.querySelector('#btn');

// Foiz tugmalari
document.querySelector('#select-5').addEventListener('click', (e) => {
  e.preventDefault();

  customSelectEl.value = 5;
});
document.querySelector('#select-10').addEventListener('click', (e) => {
  e.preventDefault();

  customSelectEl.value = 10;
});
document.querySelector('#select-15').addEventListener('click', (e) => {
  e.preventDefault();

  customSelectEl.value = 15;
});
document.querySelector('#select-25').addEventListener('click', (e) => {
  e.preventDefault();

  customSelectEl.value = 25;
});
document.querySelector('#select-50').addEventListener('click', (e) => {
  e.preventDefault();

  customSelectEl.value = 50;
});

// logic
const tipAmount = (bill, tip) => {
  return (bill * tip) / 100;
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const billInputValue = billInputEl.value * 1;
  const customSelectValue = customSelectEl.value * 1;
  const peopleNumbersValue = peopleNumbersEl.value * 1;

  totalEmountEl.innerHTML =
    '$' +
    (tipAmount(billInputValue, customSelectValue) / peopleNumbersValue).toFixed(
      2
    );

  totalPerPersonEl.innerHTML =
    '$' +
    (
      (billInputValue + tipAmount(billInputValue, customSelectValue)) /
      peopleNumbersValue
    ).toFixed(2);

  console.log(billInputValue, customSelectValue, peopleNumbersValue);
  console.log(tipAmount(billInputValue, customSelectValue));
});
