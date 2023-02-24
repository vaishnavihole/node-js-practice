const http = require('http');

const port =process.env.port;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is Harry</h1> <p> Hey this is the way to rock the world! </p>')

})
