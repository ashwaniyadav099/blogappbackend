const express = require('express')
const cors = require('cors');
const blog = require('./Routes/Blogs')
const user = require('./Routes/User')
const mongoconnect = require('./connect')
const app = express()

mongoconnect()
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/blog', blog);
app.use('/user', user);


app.listen(6002 , ()=>{
    console.log(' app started at post 6002')
})