function Pizza (name, size, toppings, price){
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.receipt = function() {
  return "Thank you " + this.name + " here is your receipt for a " + this.size + " pizza, with " + this.toppings + ".  Your total is $" + this.price + " dollars."
  ;
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
  this.toppings.forEach(function(topping){
    if (topping === "basil"){
      console.log(this.price);
      this.price += 5;
      console.log("here");
      console.log(this.price);
    }else {
      return this.price;
      console.log(this.price);
    }
  });
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
     console.log(inputtedToppingsArray);
   var pizza = new Pizza(inputtedName, inputtedSize, inputtedToppingsArray)
   pizza.sizePrice();
   pizza.toppingsPrice();
   console.log(pizza)
    $("#showOrder").text(pizza.receipt());
  });
});
