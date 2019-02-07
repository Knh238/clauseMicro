# clauseMicro

https://clause-microservice.herokuapp.com/

You can also find the code here: https://github.com/Knh238/clauseMicro

If cloned locally: Npm run start 

Response Guide:

POST Requests:

Endpoint: https://clause-microservice.herokuapp.com/messages/
  or: http://localhost:8080/messages/

General Syntax: 
{“message”:”foo”}

General Expected Response Syntax: 
{“digest”:“2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae”}

POST Requests Have three possible outputs: 
If you input a random string, the output will be the hashed version of the string 

Sample request: {“message”:”hey”}
Expected api response:     {“digest”:“fa690b82061edfd2852629aeba8a8977b57e40fcb77d1a7a28b26cba62591204”}

The frontend component will also respond with the SHA246 version of the string 
2. If you input a keyword relating to Clause, 
      examples: “smartContracts”, “SmartClause”,”clause”,  “contracts", “openSource", “legal”

Sample request: {“message”:”smartContracts”}
Api response: { “digest”:“CLAUSE!”} 

The frontend  component will also display “CLAUSE!” along with the company logo. 
3. If you input a term relating to the other kind of claws—because who doesn’t need a pun?
  examples: “meow”,“kitty”,“cat”,“furball”,“kitten”,“paws”,“purr”,“cute”
Sample request: {“message”:”cat”}
Api response: {“digest": "CLAWS!"}

The front end component will also display a cat photo.  Because everyone needs a cat photo sometimes.

GET Requests:

Endpoint: https://clause-microservice.herokuapp.com/messages/
  or: http://localhost:8080/messages/

General Syntax: 
https://clause-microservice.herokuapp.com/messages/${hashedString}

General Expected Response Syntax: 
{“message”:${originalString}}

If the value has been previously sent via POST request and hashed, the api will respond with the string value previously entered in the original post request. 

Sample request: 
https://clause-microservice.herokuapp.com/messages/8b7df143d91c716ecfa5fc1730022f6b421b05cedee8fd52b1fc65a96030ad52
Api response:
 {“message”:“Blah”}

If the value has NOT been previously sent via a POST, the api will respond with a 404 and the following error message: ”Opps! Does not compute! Value has not been previously hashed.”


Note:  GET requests do not “decode” hashed values. SHA256 does not “encode” strings and therefore the results cannot be decoded. That’s what makes it so secure in the first place! To make original inputs accessible via their hashed values, when POST requests are made, the database stores previous inputs along with their hashed outputs.
