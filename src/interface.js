$(document).ready(function(){

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() { // event listener
    thermostat.up(); // update model
    $('#temperature').text(thermostat.temperature); // update view
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });
});
