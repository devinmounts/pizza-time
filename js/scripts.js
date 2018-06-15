function Pizza (name, price, size, toppings){
  this.name = name;
  this.price = 0;
  this.size = size;
  this.toppings = [];
}


Pizza.prototype.Receipt = function() {
  return "Thank you " + this.name + " here is your receipt for a " + this.size + "pizza, with" + this.toppings + " ."
  ;
}
//
// Pizza.prototype.price = function() {
//     var price = 0;
//     var sizeTotal = pizzaSize(size, price);
//     var toppingsTotal = pizzaToppings(toppings, price);
//     price += sizeTotal + toppingsTotal;
//     return price;
// }


Pizza.prototype.sizePrice = function() {
  if (this.size = "Small"){
    this.price += 8;
  }else if (this.size = "Medium") {
    this.price += 10;
  }else if (this.size = "Large") {
    this.price  += 15;
  }else if (this.size = "Extra Large") {
    this.price += 18;
  }else
  return this.price;
}

Pizza.prototype.toppingsPrice = function () {
  for (var i=0; i = toppings.length; i++) {
    if (this.topping === 1){
      this.price += 0;
    }else if (this.topping > 0 && this.topping <= 3) {
      this.price += 3;
    }else if (this.topping >= 5) {
      this.price += 5;
    }else
    return this.price
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
     console.log(inputtedToppingsArray);
   var pizza = new Pizza(inputtedName, inputtedSize, inputtedToppingsArray)
   pizza.sizePrice();
    $("#showName").text(pizza.name);
    $("#showSize").text(pizza.size);
    console.log(pizza);
    $(".showOrder").text()
  });
});
