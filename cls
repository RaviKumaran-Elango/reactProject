warning: in the working copy of 'src/App.js', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 16f2b66..022387b 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -14,6 +14,7 @@[m [mimport Fourthapi from './apitask/fourth';[m
 import Fifthapi from './apitask/five';[m
 import Sixthapi from './apitask/sixth';[m
 import Sevenapi from './apitask/seven';[m
[32m+[m[32mimport Weather from './weather/weather';[m
 [m
 [m
 const App = () => {[m
[1mdiff --git a/src/node/test.js b/src/node/test.js[m
[1mindex 3b03863..a34b885 100644[m
[1m--- a/src/node/test.js[m
[1m+++ b/src/node/test.js[m
[36m@@ -1,11 +1,16 @@[m
[31m-const http = require ('http');[m
[32m+[m[32m//const http = require ('http');[m
[32m+[m[32m//[m
[32m+[m[32m//const server=http.createServer((req,res)=>{[m
[32m+[m[32m//    res.setHeader('content-type','text/html');[m
[32m+[m[32m//    res.write('<html>')[m
[32m+[m[32m//    res.write('<head><title>welcome</title></head>')[m
[32m+[m[32m//    res.write('<body><h1>Ravi</h1></body>')[m
[32m+[m[32m//    res.write('</html>')[m
[32m+[m[32m//    res.end();[m
[32m+[m[32m//});[m
[32m+[m[32m//server.listen(3000);[m
 [m
[32m+[m[32mconst http=require('http');[m
 const server=http.createServer((req,res)=>{[m
[31m-    res.setHeader('content-type','text/html');[m
[31m-    res.write('<html>')[m
[31m-    res.write('<head><title>welcome</title></head>')[m
[31m-    res.write('<body><h1>Ravi</h1></body>')[m
[31m-    res.write('</html>')[m
[31m-    res.end();[m
[31m-});[m
[31m-server.listen(3000);[m
\ No newline at end of file[m
[32m+[m[32m    const url=req.url;[m
[32m+[m[32m})[m
\ No newline at end of file[m
