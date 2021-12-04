const fs = require('fs');

fs.stat('./text.txt',(err,state) => {
    if(err){
        console.error(err);
        return;
    }

    console.log(`文件状态：\n`);
    console.log(state);

    console.log(`是否为文件:${state.isFile()}\n`);
    console.log(`是否为文件夹:${state.isDirectory()}\n`);
    console.log(`是否为链接文件:${state.isSymbolicLink()}\n`);
    console.log(`文件大小:${state.size}Byte\n`);
})

