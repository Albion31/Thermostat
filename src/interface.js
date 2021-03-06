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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=851d85483a04b5d9f64707097fa66a7b&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  // THIS IS FOR SELECTING CITY
  // $('#current-city').change(function() {
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=851d85483a04b5d9f64707097fa66a7b&units=metric', function(data) {
  //     $('#current-temperature').text(data.main.temp)
  //   })
  // })

  displayWeather('London')

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city)
  })

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=851d85483a04b5d9f64707097fa66a7b';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#city').text(city + " temperature:");

     $('#city-temperature').text(data.main.temp);
   })
  }
});
