'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
  this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.reader = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  return this.isMaximumTemperature() ? this.temperature : this.temperature ++;
};

Thermostat.prototype.isMaximumTemperature = function (){
  if(this.isPowerSavingOn() === true) {
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
  } else {
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF;
  }
};

Thermostat.prototype.down = function(){
  return this.isMinimumTemperature() ? this.temperature : this.temperature --;
};

Thermostat.prototype.isMinimumTemperature = function (){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingOn = function (){
  return this.powerSavingMode;
};

Thermostat.prototype.turnPowerSavingModeOff = function (){
  return this.powerSavingMode = false;
};

Thermostat.prototype.turnPowerSavingModeOn = function (){
  return this.powerSavingMode = true;
};

Thermostat.prototype.reset = function (){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.usage = function (){
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "low-usage";
  } else if (this.temperature > this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature < this.MAXIMUM_TEMPERATURE_PSM_ON) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
