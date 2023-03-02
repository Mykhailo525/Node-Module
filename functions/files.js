const fs = require('node:fs');
const path = require('path');

function files(){
    for (let i=0;i<5;i++){
        fs.writeFile(path.join('MainFolder',`file-${i}`),`file-${i}`,(err)=>{
            if(err) throw new Error(err.message)
        })
    }
}

module.exports ={
    files
}