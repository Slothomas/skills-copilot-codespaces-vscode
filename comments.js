//create web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(`${__dirname}/public/index.html`, (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/comments') {
        fs.readFile(`${__dirname}/public/comments.json`, (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});