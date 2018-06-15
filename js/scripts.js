function Pizza (name, size, toppings){
  this.name = name;
  this.price = 0;
  this.size = size;
  this.toppings = toppings;
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


Pizza.prototype.size = function() {
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

Pizza.prototype.toppings = function () {
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

    var inputtedName = $("#inputName").val();
    var inputtedSize = $("#inputSize").val();
    $("input:checkbox[name=inputTopping]:checked").each(function(){
      var inputtedToppings= $(this).val();
        $("#showToppings").append("<li>" + inputtedToppings + "</li>");
        console.log(inputtedToppings);

    });
   var pizza = new Pizza(inputtedName, inputtedSize)
    $("#showName").text(pizza.name);
    $("#showSize").text(pizza.size);
    console.log(pizza);
    $(".showOrder").text()
  });
});
