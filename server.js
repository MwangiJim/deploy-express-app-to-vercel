import express from 'express'

const app = express();

app.use(express.json());

app.get('/api/users',(req,res)=>{
    return res.json({status:'ok',data:["user1","user2","user3","user4","user5","user6","user7","user8"]})
})

app.listen(5000,()=>{
    console.log(`App running`)
})