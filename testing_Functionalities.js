//I have mainly used this site to write assert statements for testing functionalities ( https://www.w3schools.com/nodejs/ref_assert.asp)

  /** Libaries used: I have used Chai. It makes testing much easier by giving you lots of assertions you can run against your code.
  I have also used rewire plugin ( https://www.grzegorowski.com/jest-tests-with-rewire-plugin) as it lets you test internal functions wihtout exporting
 modules */

var assert = require('assert');



  rewire      = require('rewire'),
  server      = rewire("../server"),
  request     = require("request"),
  chai        = require("chai"),
  expect      = chai.expect;
           

// testing the textChecks() function

describe('verification_checks', function() {


   describe('textChecks()', function(checked) {
        
        var validation = server._get_('verify')

        it('should return an exception if the input is not a string', function(checked) {

            var inputted = 1267;
            expect(validation(inputted)).to.equal("Cannot Proceed - for textChecks(): "+inputted+" is not a valid text format")
            done()

        });
		
	
		
		it('should return an exception if the string is null', function(checked) {
			
			
		expect(validation(" ")).to.equal("Error - for textChecks(): is an empty string")
            done()

        });
		
 });
 
 // testing the urlChecker() function
 
 
  describe('urlChecker()', function(checked) {
        
        var validation = server._get_('urlChecker')

        it('should return with an error if the type is incorrect', function(checked) {
            
            var value_one = 9853;
            expect(validation(value_one)).to.equal("Error - for urlChecker(): "+value_one+" is not a correct data type")
            done()

        });
		
		
		it('testing invalid scenarios', function(checked) {
            
            //I did it this way for readable 
            var scenario_1 = 0;
			var scenario_2 = "/come/on/man/uni/ted";
            var scenario_3 = "httpppp://wwww.google.co.uk/";

            expect(validation(scenario_1)).to.equal("Error - for urlChecker(): "+scenario_1+" is not a correct data type")
            expect(validation(scenario_2)).to.equal("Error - for urlChecker(): "+scenario_5+" is invalid URL")
            expect(validation(scenario_3)).to.equal("Error - for urlChecker(): "+scenario_6+" is invalid URL")
            done()

        });
    });
	
	 // testing the numberChecks() function
	
	 describe('numberChecks()', function(checked) {
        
        var validation = server._get_('numberChecks')

        it('should return with ERROR if the validation criteria is not met', function(checked) {
            
            var scenario_1 = -1;
            var scenario_2 = 0.001;       
            var scenario_3 = "Hello World";


            expect(validation(scenario_1)).to.equal("Error - for numberChecks(): "+scenario_1+" is less then 0")
            expect(validation(scenario_2)).to.equal("Error - for numberChecks(): "+scenario_2+" is a decimal value, which is incorrect data type")
            expect(validation(scenario_3)).to.equal("Error - for numberChecks(): "+scenario_3+" is a string value, which is incorrect data type")
			
            done()

        });
    });
});

