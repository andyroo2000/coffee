$(document).ready(function() {
  $water = $('#water');
  $coffee = $('#coffee');
  $totalCoffee = $('#totalCoffee');

  $water.on('keyup', function() {
    var amountWater = +$(this).val();
    $('#totalWater').text((amountWater / 17).toFixed(2));
  });
  $coffee.on('keyup', function() {
    var amountCoffee = +$(this).val();
    $totalCoffee.text((amountCoffee * 17).toFixed(2));
  });

  $('#coffee_to_water').click(function() {
    $(this).toggleClass('highlighted');
    $('#water_to_coffee').toggleClass('highlighted');
    $('#coffee_form').toggleClass('hidden');
    $('#water_form').toggleClass('hidden');
  });

  $('#water_to_coffee').click(function() {
    $(this).toggleClass('highlighted');
    $('#coffee_to_water').toggleClass('highlighted');
    $('#coffee_form').toggleClass('hidden');
    $('#water_form').toggleClass('hidden');
  });

  var countDown = function (time) {
    $('#timer').val(time);
    if (time < 1) {
      alert('Your coffee is done!');
      return;
    }
    setTimeout(function () {
      countDown(time - 1);
    }, 1000)
  };

  var startTimer = function() {
    var time = parseInt($('#timer').val(), 10);
    if (!(time > 0)) { time = 2; }
    countDown(time);
  }
  $('#timer_button').click(startTimer)
});