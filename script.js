const increaseBtnEl = document.querySelector(".counter_button--increase");
const counterValueEl = document.querySelector(".counter-value");

increaseBtnEl.addEventListener("click", function () {
  const currentValue = counterValueEl.textContent;
  //convert current value to int
  const currentValueAsaNumber = +currentValue;
  // calculating new values
  const newValue = currentValueAsaNumber + 1;
  counterValueEl.textContent = newValue;
});
