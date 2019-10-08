This file explaines two points

1	how to run it
2	what libraries I have used and why


1) In order to run the project, you need to first install the application called node.js following this link : - https://nodejs.org/en/
Once installed, you can then open Powershell and run following commands

								npm install
								node test.js hackernews --posts n

To run the test file, plese input following commands onto Powershell

								npm testing_Functionalities
								
								
2) As you can also see in package.json file, below are the files used
		* Chai: It makes testing much easier by giving you lots of assertions you can run against your code.
		* Commander: Used it for reading command-line inputs and and parsing values
		* Jasmine: installed it for testing purposes but not really used it
		* Request: Used to make http calls. 
		* Rewire: Lets you to  test internal functions wihtout exporting modules

