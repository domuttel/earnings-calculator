// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');



  $('input[type=submit]').on("click", function(event){
    event.preventDefault();
    var container = [];
    var mealPrice = $('input[name=meal-price]').val();
    var mealTax = $('input[name=meal-taxrate]').val();
    var mealTip = $('input[name=meal-tiprate]').val();
    console.log(mealPrice);
    console.log(mealTax);
    console.log(mealTip);
    container.push(mealPrice, mealTax, mealTip);
    console.log(container, "c");
    $(".form-input").val('');
      // var tipRate = mealTip / 100;
      // var taxRate = mealTax / 100;
      // var meal = parseInt(mealPrice);
      // console.log(meal, "meal");
      // var tax = mealPrice * taxRate;
      // var tip = mealPrice * tipRate;
      // var billTotal = tax + tip + meal;
      // console.log(billTotal);
      getBill();
        $("#customer-totals > p:first-child").append(billTotal);
        // var subtotal = $(".totals").children[0];
        // subtotal.val(billTotal);
  });
});
