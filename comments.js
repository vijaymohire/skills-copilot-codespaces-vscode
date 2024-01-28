// Create web server  that can respond to requests for comments
// and can save new comments to a file

// Load the http module to create an http server
import { createServer } from 'http';
import { readFile } from 'fs';

// Configure our HTTP server to respond with Hello World to all requests
var server = createServer(function (request, response) {
  //console.log(request);

  // Read the file contents
  readFile('comments.json', function(err, data) {
    if(err) throw err;

    // Parse the file contents into a JSON object
    var comments = JSON.parse(data);

    // Make the response body
    var responseBody = {
      "comments": comments,
      "timestamp": Date.now()
    };

    // Write the response
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(responseBody));
    response.end();
  });
});

// Listen on port 8000, IP defaults to
 