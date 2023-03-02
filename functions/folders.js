const fs = require('node:fs');
const path = require('path');

function folders(){
    for (let i=0;i<5;i++){
        fs.mkdir(path.join('MainFolder',`folder-${i}`),(err)=>{
            if(err) throw new Error(err.message)
        })
    }
}

module.exports ={
    folders
}