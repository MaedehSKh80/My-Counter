// btns
const increaseBtnEl = document.querySelector(".counter_button--increase");
const decreaseBtnEl = document.querySelector(".counter_button--decrease");
const resetBtnEl = document.querySelector(".counter-reset-btn");

// value
const counterValueEl = document.querySelector(".counter-value");

// functions , increse , decrease , reset
function increaseFunc() {
  // having current value and making it a number
  const currentValue = counterValueEl.textContent;
  const currentValueAsaNumber = +currentValue;

  // increasing numbers
  const newValue = currentValueAsaNumber + 1;
  counterValueEl.textContent = newValue;
}

function decreaseFunc() {
  // having current value and making it a number
  const currentValue = counterValueEl.textContent;
  const currentValueAsaNumber = +currentValue;

  if (currentValueAsaNumber > 0) {
    // decreaseing value
    counterValueEl.textContent = currentValueAsaNumber - 1;
  } else if (currentValueAsaNumber <= 0) {
    counterValueEl.textContent = 0;
  }
}

function resetbtnFunc() {
  // making any value null
  counterValueEl.textContent = 0;
}

// btns event listener
increaseBtnEl.addEventListener("click", increaseFunc);
decreaseBtnEl.addEventListener("click", decreaseFunc);
resetBtnEl.addEventListener("click", resetbtnFunc);
