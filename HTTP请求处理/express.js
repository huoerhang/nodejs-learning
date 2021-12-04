const express = require('express');

const app=express();

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json());

app.post("/todos",(req, res) => {
    console.log(req.body.todo);
})

app.listen(3000,()=>{
    console.log(`服务器运行 http://localhost:3000`);
})