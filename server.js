const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, html) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  });
});

server.listen(4000, () => console.log('server runing on port 3000...'));
