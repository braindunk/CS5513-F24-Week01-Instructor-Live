// this is a single-line javascript comment
// console.log('hello from Node.js');

/* define a variable and place
 into it the http package (shared code) from node.js */

let myhttp = require('http');

// use dot notation in javascript
// to access an object and 
// its methods (commands) and properties

// http package includes a method createServer()
// which take one parameter, a custom function we write
// that can look at the HTTP request come into the server is
// and then send back a response that the browser that made the request 
// can display

let myserver = myhttp.createServer(

  // pass a complete function that will be run whenever the server receives an http request
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    myresponse.writeHead(
      200,
      {
        "Content-Type": "text/plain"
      }
    );
    myresponse.end(
      "Greetings from my Node.js web server"
    );
  }
  
);
// listen() takes 2 args: 
// 1: tcp port #
// 2: string of the ip address to listen (0.0.0.0) for replit
myserver.listen(80, "0.0.0.0");
