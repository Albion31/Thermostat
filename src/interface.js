$(document).ready(function(){

  var thermostat = new Thermostat();

  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function(){
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text("on")
  });

  $('#powersaving-off').on('click', function(){
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text("off")
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  };
});
