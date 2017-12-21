describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

    it("should start at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20)
    });

    it("should read the temperature", function(){
      expect(thermostat.reader()).toBeDefined()
    });

    it ("should increase the temperature with an up function", function(){
      thermostat.up()
      expect(thermostat.reader()).toEqual(21)
    });

    it ("should decrease the temperature with an down function", function(){
      thermostat.down()
      expect(thermostat.reader()).toEqual(19)
    });

    it ("should not go below the minimum temperature of 10 degrees", function(){
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.reader()).toEqual(10)
    });

    it ("should have a power saving mode", function(){
      expect(thermostat.isPowerSavingOn()).toBeTruthy()
    });

});
