/**
 * author: akash trivedi
 * date-created: 2022-07-16 19:39:32
 * functionality: create and run http server
 * caller-function: 
 * performs-network-request: false
 */

const http = require('http')
const port = 5000
const server = http.createServer(
  (req, res) => {
    console.log('request event triggered for /, and call-back called.');
    res.statusCode = 200
    res.end('<h1>hey it\'s created</h1>')
  }
)
// bind the port to the server for listening
server.listen(port, () => {
  console.log('call-back called, after binding the port to the server. Runs ony first time when server is created.');
})

// request to another server, we need to build a request
// using plain old javascript or axios

// plain old javascript
const options = {
  hostname: 'localhost',
  port: 5000,
  method: 'GET',
  path: '/'
}

const req = http.request(options, (res) => {

  console.log('call-back called after request was made and processed(check!)');
  console.log(`request made to localhost:5000/`);
  console.log(`status: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  })
})

req.on('error', err => {
  console.log('wtf is this');
  console.error(err);
})

req.end()