// For Remove Carts

const removeOne = document.getElementById("remove-one");
removeOne.addEventListener("click", function () {
  const firstCart = document.getElementById("first-cart");
  firstCart.style.display = "none";
});

const removeTwo = document.getElementById("remove-two");
removeTwo.addEventListener("click", function () {
  const secondCart = document.getElementById("second-cart");
  secondCart.style.display = "none";
});

// For Calculate Carts Items

const firstPlus = document.getElementById("first-plus");
firstPlus.addEventListener("click", function () {
  const firstInput = document.getElementById("first-input").value;
  let firstInputParseFloat = parseFloat(firstInput);
  let increaseFirstInput = firstInputParseFloat + 1;
  let increaseFirstInputParseFloat = parseFloat(increaseFirstInput);

  document.getElementById("first-input").value = increaseFirstInputParseFloat;

  const firstMoney = document.getElementById("first-money").innerText;
  let firstMoneyParseFloat = parseFloat(firstMoney);
  let increaseFirstMoney = firstMoneyParseFloat + 1219;
  let increaseFirstMoneyParseFloat = parseFloat(increaseFirstMoney);

  document.getElementById(
    "first-money"
  ).innerText = increaseFirstMoneyParseFloat;

  const getFirstMoney = document.getElementById("first-money").innerText;
  const getFirstMoneyParseFloat = parseFloat(getFirstMoney);
  let increaseSubTotal = getFirstMoneyParseFloat;
  let increaseSubTotalParseFloat = parseFloat(increaseSubTotal);

  document.getElementById("subtotal").innerText = increaseSubTotalParseFloat;

  let increaseTotal = getFirstMoneyParseFloat;
  let increaseTotalParseFloat = parseFloat(increaseTotal);

  document.getElementById("total").innerText = increaseTotalParseFloat;
});

const firstMinus = document.getElementById("first-minus");
firstMinus.addEventListener("click", function () {
  const firstInput = document.getElementById("first-input").value;
  let firstInputParseFloat = parseFloat(firstInput);
  let decreaseFirstInput = firstInputParseFloat - 1;
  let decreaseFirstInputParseFloat = parseFloat(decreaseFirstInput);

  document.getElementById("first-input").value = decreaseFirstInputParseFloat;

  const firstMoney = document.getElementById("first-money").innerText;
  let firstMoneyParseFloat = parseFloat(firstMoney);
  let decreaseFirstMoney = firstMoneyParseFloat - 1219;
  let decreaseFirstMoneyParseFloat = parseFloat(decreaseFirstMoney);

  document.getElementById(
    "first-money"
  ).innerText = decreaseFirstMoneyParseFloat;

  const getFirstMoney = document.getElementById("first-money").innerText;
  const getFirstMoneyParseFloat = parseFloat(getFirstMoney);
  let decreaseSubTotal = getFirstMoneyParseFloat;
  let decreaseSubTotalParseFloat = parseFloat(decreaseSubTotal);

  document.getElementById("subtotal").innerText = decreaseSubTotalParseFloat;

  let decreaseTotal = getFirstMoneyParseFloat;
  let decreaseTotalParseFloat = parseFloat(decreaseTotal);

  document.getElementById("total").innerText = decreaseTotalParseFloat;
});

const secondPlus = document.getElementById("second-plus");
secondPlus.addEventListener("click", function () {
  const secondInput = document.getElementById("second-input").value;
  let secondInputParseFloat = parseFloat(secondInput);
  let increaseSecondInput = secondInputParseFloat + 1;
  let increaseSecondInputParseFloat = parseFloat(increaseSecondInput);

  document.getElementById("second-input").value = increaseSecondInputParseFloat;

  const secondMoney = document.getElementById("second-money").innerText;
  let secondMoneyParseFloat = parseFloat(secondMoney);
  let increaseSecondMoney = secondMoneyParseFloat + 59;
  let increaseSecondMoneyParseFloat = parseFloat(increaseSecondMoney);

  document.getElementById(
    "second-money"
  ).innerText = increaseSecondMoneyParseFloat;

  const getSecondMoney = document.getElementById("second-money").innerText;
  const getSecondMoneyParseFloat = parseFloat(getSecondMoney);
  let increaseSubTotal = getSecondMoneyParseFloat;
  let increaseSubTotalParseFloat = parseFloat(increaseSubTotal);

  document.getElementById("subtotal").innerText = increaseSubTotalParseFloat;

  let increaseTotal = getSecondMoneyParseFloat;
  let increaseTotalParseFloat = parseFloat(increaseTotal);

  document.getElementById("total").innerText = increaseTotalParseFloat;
});

const secondMinus = document.getElementById("second-minus");
secondMinus.addEventListener("click", function () {
  const secondInput = document.getElementById("second-input").value;
  let secondInputParseFloat = parseFloat(secondInput);
  let decreaseSecondInput = secondInputParseFloat - 1;
  let decreaseSecondInputParseFloat = parseFloat(decreaseSecondInput);

  document.getElementById("second-input").value = decreaseSecondInputParseFloat;

  const secondMoney = document.getElementById("second-money").innerText;
  let secondMoneyParseFloat = parseFloat(secondMoney);
  let decreaseSecondMoney = secondMoneyParseFloat - 59;
  let decreaseSecondMoneyParseFloat = parseFloat(decreaseSecondMoney);

  document.getElementById(
    "second-money"
  ).innerText = decreaseSecondMoneyParseFloat;

  const getSecondMoney = document.getElementById("second-money").innerText;
  const getSecondMoneyParseFloat = parseFloat(getSecondMoney);
  let decreaseSubTotal = getSecondMoneyParseFloat;
  let decreaseSubTotalParseFloat = parseFloat(decreaseSubTotal);

  document.getElementById("subtotal").innerText = decreaseSubTotalParseFloat;

  let decreaseTotal = getSecondMoneyParseFloat;
  let decreaseTotalParseFloat = parseFloat(decreaseTotal);

  document.getElementById("total").innerText = decreaseTotalParseFloat;
});
