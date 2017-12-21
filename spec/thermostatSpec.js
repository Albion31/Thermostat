describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

    it("should start at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20)
    });

    it("should read the temperature", function(){
      expect(thermostat.reader).toBeDefined()
    });

    it ("should increase the temperature with an up function", function(){
      thermostat.up()
      expect(thermostat.temperature).toEqual(21)
    });
});
