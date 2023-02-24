const { Console } = require('console')
const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{

    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> This is Harry</h1> <p> Hey this is the way to rock the world! </p>');
    }

    else  if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About code with Harry</h1> <p> Hey this is about code with harry! </p>');
    }
    else  if(req.url == '/hello'){
        res.statusCode = 200;
       
        res.end('<h1> About code with Harry</h1> <p> Hey this is about code with harry! </p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on this server! </p>');

    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
