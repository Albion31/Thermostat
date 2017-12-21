'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true
};

Thermostat.prototype.reader = function(){
  return this.temperature
};

Thermostat.prototype.up = function(){
  this.temperature ++
};

Thermostat.prototype.down = function(){
  return this.isMinimumTemperature() ? this.temperature : this.temperature --
};

Thermostat.prototype.isMinimumTemperature = function (){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingOn = function (){
  return this.powerSavingMode
};
