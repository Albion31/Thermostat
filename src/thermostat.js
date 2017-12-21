function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.reader = function(){
  return this.temperature
};
