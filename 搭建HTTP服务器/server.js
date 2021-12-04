﻿const http = require('http');

const port=3000;
const hostname = 'localhost';

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.end('你好世界\n');
});

server.listen(port,()=>{
    console.log(`服务器运行 http://${hostname}:${port}`);
});