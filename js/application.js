$(document).ready(function() {  
  $('#water').focus().on('keyup', function() {
    var amountWater = +$(this).val();
    $('#totalWater').text((amountWater / 17).toFixed(2));
  });
  $('#coffee').on('keyup', function() {
    var amountCoffee = +$(this).val();
    $('#totalCoffee').text((amountCoffee * 17).toFixed(2));
  });
});