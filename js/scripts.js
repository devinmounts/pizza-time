function Pizza (name, size, toppings, price){
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.receipt = function() {
  var toppingStr = buildToppingString(this.toppings)
  return "Thank you " + this.name + ", here is your receipt for a " + this.size + " pizza with " + toppingStr + ".  Your total is $" + this.price + " dollars."
  ;
}

function buildToppingString(toppingArray) {
  var returnString = '';
  if (toppingArray.length == 1) {
    returnString = toppingArray;
  } else if (toppingArray.length == 2)  {
    returnString = toppingArray.join(' & ')
  } else {
    var lastTopping = toppingArray.pop();
    returnString = toppingArray.join(', ') + ' & ' + lastTopping;
  }

  return returnString;
}

function sizePrice(size) {
  if (size === "Small") {
    return 8;
  } else if (size === "Medium"){
    return 10;
  } else if (size === "Large"){
    return 15;
  } else if (size === "Extra Large"){
    return 18;
  }

}

function toppingsPrice(toppings) {
  var price = 0;
  if (toppings.includes("basil")){
    price += 5;
  }
  if (toppings.includes("pineapple")){
    price += 3;
  }
  if (toppings.includes("pepperoni", "canadian-bacon")) {
    price += 2;
  }
  if (toppings.length > 3){
    price += 3;
  }
  return price;
}


function finalPrice(pie) {
  var price = sizePrice(pie.size) + toppingsPrice(pie.toppings);
  return price;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "Small"){
    this.price += 8;
  }else if (this.size === "Medium") {
    this.price += 10;
  }else if (this.size === "Large") {
    this.price  += 15;
  }else if (this.size === "Extra Large") {
    this.price += 18;
  }else
  return this.price;
}

Pizza.prototype.toppingsPrice = function() {
  if (this.toppings.includes("basil")){
    this.price += 5;
  }
  if (this.toppings.includes("pepperoni") || this.toppings.includes("tomatoes")){
      this.price += 5;
  }
  if (this.toppings.includes("canadian-bacon") || this.toppings.includes("pineapple")){
        this.price += 5;
    console.log(this.price);
  }else {
    return this.price;
    console.log(this.price);
  }
}

$(function(){

  $("#submitOrder").click(function(event){
    event.preventDefault();
    var inputtedToppingsArray = []
    var inputtedName = $("#inputName").val();
    var inputtedSize = $("#inputSize").val();
    $("input:checkbox[name=inputTopping]:checked").each(function(){
      inputtedToppingsArray.push($(this).val());
    });
   var pie = new Pizza(inputtedName, inputtedSize, inputtedToppingsArray);
   // pie.price = finalPrice(pie);
   pie.sizePrice();
   pie.toppingsPrice();
   console.log(pie);
    $("#showOrder").text(pie.receipt());
  });
});
