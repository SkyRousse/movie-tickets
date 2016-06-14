var myTicket;
var basePrice = 10

function Ticket(age, price, time, movie) {
  this.age = age;
  this.price = price;
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.priceCalculator = function() {
  if ( this.age >= 55 ) {
    basePrice -= 4;
  } else if ( this.age <= 12 ) {
    basePrice -= 2;
  } else if ( this.time === 1 ) {
    basePrice -= 4;
  } else {
  }
  this.price = basePrice
}

$(document).ready(function() {
  $('form#cinephile').submit(function(event) {
    event.preventDefault();
    var inputtedAge = parseInt($('input#age').val());
    var inputtedTime = parseInt($('#movieTime option:selected').val());
    var inputtedMovie = $('input[name=movieRadio]:checked').val();

    myTicket = new Ticket(inputtedAge, basePrice, inputtedTime, inputtedMovie);
    myTicket.priceCalculator();
    alert(basePrice);
  });

});
