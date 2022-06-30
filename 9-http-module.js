/**
 * builtin module for server
 * contains some core features of nodejs
 */

const http = require('http')
const hostName = 'localhost';
const portNumber = 5000;
const defaultValue = null;
const server = http.createServer(
    (request, response) => {
        if (request.url === '/') {
            response.end('welcome to the homepage')
            // end plus give the message
        }
        response.write('"your request was not good": server')
        response.end()
    }
)
server.listen(portNumber)