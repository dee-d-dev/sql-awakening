const express = require('express')
const app = express()
require('dotenv').config()
const post_route = require('./routes/postRoute')

app.use(express.json())

app.get('/home', (req, res)=> {
    res.send('SQL home')
})
app.post('/blog', post_route)

app.listen(6060, ()=>{
    console.log('running')
})

