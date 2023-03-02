// Створіть папку
// В тій папці створіть 5 папок і 5 файлів
// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
// FILE: {fileName}
// FOLDER: {folderName}

const fs = require('node:fs');
const path = require('path');

const {folders}=require('./functions/folders')
const {files}=require('./functions/files')




// Створіть папку
// fs.mkdir(path.join('MainFolder'),(err)=>{
//     if(err) throw new Error(err.message)
// })


// В тій папці створіть 5 папок і 5 файлів

//   x5

// fs.mkdir(path.join('MainFolder','folder-1'),(err) => {
//    if(err) throw new Error(err.message)
// })

//   x5

// fs.writeFile(path.join('MainFolder','file-1'),'File-1',(err)=>{
//     if(err) throw new Error(err.message)
// })


//or-----------------

//files()

//folders()



fs.readdir(path.join('MainFolder'), {withFileTypes: true},(err, data)=>{
  if (err) throw new Error();
    console.log(data);
    data.forEach(file=>{
    if(file.isFile()){
        console.log(`FILE: ${file.name}`)
    }else if(file.isDirectory()){
        console.log(`FOLDER: ${file.name}`)
    }else{
        console.log('Something wrong')
    }
 })
})

