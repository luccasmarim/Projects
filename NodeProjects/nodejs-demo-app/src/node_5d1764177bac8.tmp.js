const http = require('http');
const fs = require('fs');
const path = require('path');
const { logMessage } = require('./utils/helper');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
    logMessage(`Received request for: ${req.url}`);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Node.js Demo App!</h1>');
    } else if (req.url === '/data') {
        const data = { message: 'This is some sample data.' };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    logMessage(`Server is running on http://localhost:${PORT}`);
});