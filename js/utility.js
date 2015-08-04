function getBill (tipRate, taxRate, mealPrice) {

  var tipRate = mealTip / 100;
  var taxRate = mealTax / 100;
  var meal = parseInt(mealPrice);
  var tax = mealPrice * taxRate;
  var tip = mealPrice * tipRate;
  var billTotal = tax + tip + meal;
    console.log(billTotal);
}


