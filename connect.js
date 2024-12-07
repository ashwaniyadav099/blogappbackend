

const mongoose = require('mongoose')
const mongoconnect = (url)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/blogapp').then((res)=>{
        console.log("mongoDB is connected")
    })
}
module.exports = mongoconnect