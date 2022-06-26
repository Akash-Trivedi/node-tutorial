/**
 * builtin module for server
 * contains some core features of nodejs
 */

const http = require('http')

const server = http.createServer(
    (request, response) => {
        // console.log(request); huge object
        if (request.url === '/') {
            response.end('welcome to the homepage')
            // end plus give the message
        }
        // below is a basic response for unknown path
        response.write('"your request was not good": server')
        response.end()
    }
)
// we can also pass the html string like servlets
server.listen(8083)