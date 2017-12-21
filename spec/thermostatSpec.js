describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

    describe("Initialize", function(){
      it("should start at 20 degrees", function(){
        expect(thermostat.temperature).toEqual(20)
      });
    });

    describe("Reader", function(){
      it("should read the temperature", function(){
        expect(thermostat.reader()).toBeDefined()
      });
    });

    describe("Up", function(){
      it ("should increase the temperature with an up function", function(){
        thermostat.up()
        expect(thermostat.reader()).toEqual(21)
      });
    });

    describe("Down", function(){
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
    });

    describe("Power Saving Mode", function(){
      it ("should have a power saving mode which in on by default", function(){
        expect(thermostat.isPowerSavingOn()).toBeTruthy()
      });

      it ("should allow the power saving mode to be turned off", function(){
        thermostat.turnPowerSavingModeOff()
        expect(thermostat.isPowerSavingOn()).toBeFalsy()
      });

      it ("should allow the power saving mode to be turned on", function(){
        thermostat.turnPowerSavingModeOff()
        expect(thermostat.isPowerSavingOn()).toBeFalsy()
        thermostat.turnPowerSavingModeOn()
        expect(thermostat.isPowerSavingOn()).toBeTruthy()
      });
    });

});
