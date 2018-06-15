function Pizza (name, price, size, toppings){
  this.name = name;
  this.price = 0;
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.name = function () {
  return this.name;
}

Pizza.prototype.size = function (size, price) {
  if (this.size === "sm"){
    this.price += 8;
  }else if (this.size === "med") {
    this.price += 10;
  }else if (this.size === "lg") {
    this.price  += 15;
  }else if (this.size === "xl") {
    this.price += 18;
  }else
  return this.price;
  console.log(this.price);
}

Pizza.prototype.toppings = function() {
  for (var i=0; i = toppings.length; i++) {
    if (this.toppings === 1){
      this.price += 0;
    }else if (this.toppings > 0 && this.toppings <= 3) {
      this.price += 3;
    }else if (this.toppings >= 5) {
      this.price += 5;
    }else
    return this.price
  }
}

Pizza.prototype.price = function () {
  return this.price
}


$(function(){
  var pizza = new Pizza()

  $("#submitOrder").click(function(event){
    event.preventDefault();
    pizza.name = $("#inputName").val();
    pizza.size = $("#inputSize").val();
    // $("input:checkbox[name=inputTopping]:checked").each(function(){
    //      var inputtedToppings = $(this).val();
    //      // $('#work-responses').append(workTransportationMode + "<br>");
    //      pizza.toppings = inputtedToppings;
    //      $("#showToppings").append("<li>"inputtedToppings"</li>");
    //  });
    $("input:checkbox[name=inputTopping]:checked").each(function(){
  var inputtedToppings = $(this).val();
  $("#showToppings").append("<li>" + inputtedToppings + "</li>");
});
    console.log(pizza.name);
    console.log(pizza.size);
    console.log(pizza.toppings);
    $(".showOrder").text()
  });
});
