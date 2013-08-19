$(document).ready(function() {
  $('#water').on('keyup', function() {
    var amountWater = +$(this).val();
    $('#totalWater').text((amountWater / 17).toFixed(2));
  });
  $('#coffee').on('keyup', function() {
    var amountCoffee = +$(this).val();
    $('#totalCoffee').text((amountCoffee * 17).toFixed(2));
  });

  $('#coffee_to_water').click(function() {
    $('#coffee_to_water').toggleClass('highlighted');
    $('#water_to_coffee').toggleClass('highlighted');
    $('#coffee_form').toggleClass('hidden');
    $('#water_form').toggleClass('hidden');
  });

  $('#water_to_coffee').click(function() {
    $('#water_to_coffee').toggleClass('highlighted');
    $('#coffee_to_water').toggleClass('highlighted');
    $('#coffee_form').toggleClass('hidden');
    $('#water_form').toggleClass('hidden');
  });

});