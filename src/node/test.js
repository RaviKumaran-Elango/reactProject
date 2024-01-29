const http = require ('http');

const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>welcome</title></head>')
    res.write('<body><h1>Ravi</h1></body>')
    res.write('</html>')
    res.end();
});
server.listen(3000);