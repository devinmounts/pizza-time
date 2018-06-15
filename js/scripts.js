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
  // }else if (this.size === "med") {
  //   this.price += 10;
  // }else if (this.size === "lg") {
  //   this.price  += 15;
  // }else if (this.size === "xl") {
  //   this.price += 18;
  }else
  return this.price;
}

Pizza.prototype.toppings = function() {
  for (var i=0; i = toppings.length; i++) {
    if (this.toppings === 1){
      this.price += 0;
    }else if (this.toppings > 0 && this.toppings <= 3) {
      cost = 3;
    }else if (this.toppings >= 5) {
      cost = 5;
    }else
    return cost
  }
}

Pizza.prototype.price = function () {
  return this.price
}


$(function(){
  var pizza = new Pizza()

  $("#submitOrder").submit(function(e){
  e.preventDefault();
  console.log("here");
  pizza.name = $("#inputName").val();
  pizza.size = $("#inputSize").val();
  console.log(pizza.name);
  console.log(pizza.size);
  $(".showOrder").text()
  });
});
