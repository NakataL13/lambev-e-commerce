function calculateTheSumOfGivenItem(price, count) {
  return (price * count).toFixed(2);
}

function calculateTheWeightOfGivenItem(weight, count) {
  return (weight * count).toFixed(3);
}

function calculateTotal(prices) {
  var result = 0;

  for (var i = 0; i < prices.length; i++) {
    result += prices[i];
  }

  return result;
}

function onCountChange(event) {
  var countCurrencies = {
    kg: 1,
  };

  var allPriceLI = document.querySelectorAll(".li-cart:nth-of-type(3)");

  var pricesArr = [];

  for (var i = 1; i < allPriceLI.length; i++) {

    var newPrice = Number(allPriceLI[i].textContent.split("$")[1].trim());

    pricesArr.push(newPrice);
  }

  var totalSumP = document.getElementsByClassName("total-sum")[0];

  totalSumP.textContent = "$ " + calculateTotal(pricesArr).toFixed(2);

  var inp = event.target;

  var kgLI =
    inp.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild;
  var subtotalLI =
    inp.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild;


  var priceLI =
    inp.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling;

  var inpVal = inp.value.trim();

  var count = Number(inpVal);

  if (count < 1) {
    inp.value = 1;

    return;
  } else {
    // var kgNum = Number(kgLI.textContent.split(" ")[0].trim(""));

    var priceNum = Number(priceLI.textContent.split("$")[1].trim(""));

    kgLI.textContent =
      calculateTheWeightOfGivenItem(countCurrencies["kg"], count) + " kg";

    subtotalLI.textContent = "$" + calculateTheSumOfGivenItem(priceNum, count);
  }
}
