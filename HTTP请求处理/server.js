const http = require('http');

const server = http.createServer((req, res) => {
    //监听请求中的事件
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        console.log(data);
      //JSON.parse(data).todo;
    })
});

server.listen(3000, () => {
    console.log(`服务器运行 http://localhost:3000`);
})