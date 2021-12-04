const fs =require("fs");

// fs.open('./text.txt','r',(err,fd)=>{
//     console.log(fd);
// });

try{
    const fd=fs.openSync('./text.txt','r');
    console.log(fd);
}catch(err){
    console.log(err);
}