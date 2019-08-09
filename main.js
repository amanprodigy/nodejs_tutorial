const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var time = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

console.log('Hello there');

var timer = setInterval(function(){
  time += 2;
  console.log(time + ' seconds has passed.');
  if(time > 5){
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
console.log(__filename);
