$(document).ready(function(){$("#water").focus().on("keyup",function(){var e=+$(this).val();$("#totalWater").text((e/17).toFixed(2))});$("#coffee").on("keyup",function(){var e=+$(this).val();$("#totalCoffee").text((e*17).toFixed(2))})});