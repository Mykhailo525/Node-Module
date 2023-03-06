const fs = require('fs')
const path = require('path')

const express=require('express')
const {users}=require('./Database/users')


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Винести базу даних в json.file, при створенні записувати туда нових юзерів через fs
// При створенні валідацію на імія і вік, імя повинно бути більше 2 символів, вік – не менше нуля
// На гет, пут, деліт юзерів перевірити чи такий юзер є

// app.get('/welcome',(req, res)=>{
//     res.send('WELCOME!!!')
//     console.log('welcome')
//     res.end()
// })

const PORT=5100;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})

app.get('/users',(req, res)=>{
    res.json(users)
})

app.get('/users/:userId',(req, res)=>{
    const{userId}=req.params
    const user=users[+userId - 1]

    if(+userId<users.length && userId>0){
        res.json(user)
    }else{
        res.json({message:'User doesnt exist'})
    }

})


app.post('/users',(req, res)=>{
    const body=req.body

    if(body.name.length>2 && body.age>0){
        users.push(body)
        res.json({message:'User Created'})
    }else{
        res.json({message:'При створенні валідацію на імія і вік, імя повинно бути більше 2 символів, вік – не менше нуля'})
    }
})



app.put('/users/:userId',(req, res)=>{
    const updatedUser=req.body
    const{userId}=req.params

    if(+userId<users.length && userId>0){
        users[+userId]=updatedUser
        res.json({
            message:'User updated',
            data:users[+userId]
        })
    }else{
        res.json({message:'User doesnt exist'})
    }

})


app.delete('/users/:userId',(req, res)=>{
    const{userId}=req.params

    if(+userId<users.length && userId>0){
        users.splice(+userId,1)
        res.json({message:'user deleted'})
    }else{
        res.json({message:'User doesnt exist'})
    }

})