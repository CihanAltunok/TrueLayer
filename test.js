"use strict";

/** This helps you catch mistakes by not taking into account of exceptions. However the idea is use it once for per file so all the other
functions inheriting this functionality*/

const args = process.argv.slice(2) 

//Here I am ignoring the first two parameters 
 
 
 const returned_values = args[2] || 6
 // I created a constant reference to a value. if third argument is none existent, it looks up all the values in the array up to 6


//Below I am checking if text variable is a type of string. As per the client requirements, title and author variables have to be string


const textChecks = stng => {

if (typeof stng != 'string')
	return "Cannot proceed - for textChecks(): "+stng+" has wrong type"
 
 // here I am checking if the string is empty and if yes returning an error
 
if (stng === "")
    return "Cannot proceed  - Text is an empty string"

//As per the client requirements, I am checking if the string length is greater than 256 characters and returning an error if yes.

    if(stng.length >= 257) 
		return "Cannot proceed  - for textChecks(): text is longer than 256 characters"


return stng;

}

// As per the client requirements, I need to check if the URI is valid or not. I have got the regex from https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php site
const urlChecker = stng => {

const urlValidator=new RegExp ("/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/");
if (typeof stng != 'string')
	return "Cannot proceed - for textChecks(): "+stng+" has wrong type"

return stng;

} 


// As per the requirements of the client, points, comments and rank have to be data type of int and equal or greater than 0


const numberChecks = int => {
	
	//Below I am checking if int is empty
	
	    if(int === null) return 0;
		
	// Below I am using Not operator to check if number is not integeer and returning an error
	
		    if(!Number.isInteger(int)) return "Cannot proceed - for numberChecks(): "+int+" has wrong type"

// Below I am returning an error if the number is equal or less than -1 

if(int <= -1) 
		return "Cannot proceed  - for numberChecks(): number is less than 0"
	
	return int;
}


//Since all the validation has been completed, I will be now making an API call 

const apiCall = url =>{ 

    /**Below I am checking if the inputted URL matches the checks performed in the relevant function created before called urlChecker, where I have
	outlined a regex */
	
    if(urlChecker(url) != url) throw new Error("Cannot proceed - for apiCall(): "+url+" is in invalid format");

/**Below I am creating a promise function which represents the completion or failure of a function. It takes two arguments. 
Resolve if passes and reject if there is an error */

    return new Promise((resolve,reject)=>{
		
		//Below I am making an http request. I have gone onto https://stackabuse.com/the-node-js-request-module/ to learn more about the syntax

        request(url, (err,res,body) => {
           
		   // Throwing an exception through reject function if there is an error
		   
            if(err) reject("Cannot proceed - for apiCall(): "+err+" try again")
				
				// Status 200 represents a success ro using a not operator and throwing an exception if status code is not 200
				
            if(res.statusCode != 200) reject("Cannot proceed - for apiCall(): status is failed")
             
		 /** Below I am checking if there is no error and status is a success. If that is the case, everthing works so
		 I am using the other argument in Promise, which is resolve*/
		 
            if(!err && res.statusCode == 200){
                
                let success_parse = JSON.parse(html)

                resolve(success_parse)

            }
        })
    })
}


/** I will be now managing the Urls. I will use the promise function and use reject to throw errors. If everything works
I will use resolve function. I will put all the passed URLs into an array for easier management.*/


const get_apiCalls = url =>{

    return new Promise((resolve,reject)=>{
        
        /**Get an array of ids from the service
        get_top_stories(url).then(story_id=>{
*/

           //creating an array
            const url_array = [];

            //Doing a for to loop through the inputted values
			
            for(var i=0;i<inputted_values;i++){

                //I use push to add the values to the array
				
				
                url_array.push(new Promise((resolve,reject)=>{

                    request("https://franciskim.co/dont-need-no-stinking-api-web-scraping-2016-beyond/"+".json", (err,res,html)=>{
                            
							// I am throwing an error if there is an error using the reject argument
							
                            if(err) reject("Cannot proceed - for get_apiCalls(): "+err+" try again")

                            const success_response = JSON.parse(html)
                            
							// If everything works, I am calling the resolve argument within the promise function
							
                            resolve({
                                title:      textChecks(success_response.title),
                                url:        urlChecker(success_response.url),
                                author:     textChecks(success_response.author),
                                points:     numberChecks(success_response.points),
                                comments:   numberChecks(success_response.comments),
                                rank:       i+1
                            })
                        })
                    })
                )
            }

            resolve( url_array)

        })
}
