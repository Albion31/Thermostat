'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
};

Thermostat.prototype.reader = function(){
  return this.temperature
};

Thermostat.prototype.up = function(){
  return this.isMaximumTemperature() ? this.temperature : this.temperature ++
};

Thermostat.prototype.isMaximumTemperature = function (){
  return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
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

Thermostat.prototype.turnPowerSavingModeOff = function (){
  return this.powerSavingMode = false
};

Thermostat.prototype.turnPowerSavingModeOn = function (){
  return this.powerSavingMode = true
};
