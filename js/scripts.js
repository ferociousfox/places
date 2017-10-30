// backend
function Place(city, country, date, meal){
  this.city = city;
  this.country = country;
  this.date = date;
  this.meal = meal;
}
// Front End
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputCity = $("input#new-city").val();
    var inputCountry = $("input#new-country").val();
    var inputDate = $("input#new-date").val();
    var inputMeal = $("input#new-meal").val();

    var newPlace = new Place(inputCity, inputCountry, inputDate, inputMeal);
    $("ul#places").append("<li><span class='place'>" + newPlace.city + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.city);
      $(".city").text(newPlace.city);
      $(".country").text(newPlace.country);
      $(".date").text(newPlace.date);
      $(".meal").text(newPlace.meal);
    });
  });
});
