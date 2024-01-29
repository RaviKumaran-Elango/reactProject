//const http=require('http');
//const server =http.createServer((req,res)=>{
//    console.log(req.url);
//});
//server.listen(3000);

const http=require ('http');
const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><tittle>welcome</tittle></head>')
    res.write('<body><h1>Ravi</h1></body>')
    req.write('</html>')
    res.end();
});
server.listen(3000);