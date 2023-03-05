const fs = require('fs')
const path = require('path')


// Винести базу даних в json.file, при створенні записувати туда нових юзерів через fs
// При створенні валідацію на імія і вік, імя повинно бути більше 2 символів, вік – не менше нуля
// На гет, пут, деліт юзерів перевірити чи такий юзер є

fs.mkdir(path.join('Database'),(err)=>{
    if(err) throw new Error(err.message)
})