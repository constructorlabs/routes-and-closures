const express = require('express'); // Import express
const app = express(); // create app
const api = require('./routes/api');
const storage = require('./storage.js'); // import storage function

const increment = storage();
// api is now a function which returns a route,
// we can call it and pass in our increment closure
app.use('/api', api(increment));

app.listen(8080, function() { // Set app to listen for requests on port 3000
  console.log('Listening on port 8080!'); // Output message to indicate server is listening
});
