function Pizza (name, price, size, toppings){
  this.name = name;
  this.price = 0;
  this.size = size;
  this.toppings = toppings;
}


Pizza.prototype.Receipt = function () {
  return "Thank you " + this.name + " here is your receipt for a " + this.size + "pizza, with" + this.toppings + " ."
  ;
}

function pizzaPrice(input){
    var price = 0;
    var sizeTotal = pizzaSize(size, price);
    var toppingsTotal = pizzaToppings(toppings, price);
    price += sizeTotal + toppingsTotal;
    return price;
}


function pizzaSize (size, value) {
  if (size = "small"){
    value += 8;
  }else if (size = "medium") {
    value += 10;
  }else if (size = "large") {
    value  += 15;
  }else if (size = "Extra Large") {
    value += 18;
  }else
  return value;
}

function pizzaToppings (toppings, value) {
  for (var i=0; i = toppings.length; i++) {
    if (toppings === 1){
      value += 0;
    }else if (toppings > 0 && toppings <= 3) {
      value += 3;
    }else if (toppings >= 5) {
      value += 5;
    }else
    return value
  }
}

$(function(){
  var pizza = new Pizza()

  $("#submitOrder").click(function(event){
    event.preventDefault();
    pizza.name = $("#inputName").val();
    pizza.size = $("#inputSize").val();
    $("input:checkbox[name=inputTopping]:checked").each(function(){
      var inputtedToppings = $(this).val();
        $("#showToppings").append("<li>" + inputtedToppings + "</li>");
    });
    $("#showName").text(pizza.name);
    $("#showSize").text(pizza.size);
    pizza.pizzaSize();
    console.log(pizza);
    $(".showOrder").text()
  });
});
