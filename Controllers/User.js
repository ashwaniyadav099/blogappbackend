
const bcrypt = require('bcrypt');
const User = require('../Models/Users')
var fs = require('fs');
var path = require('path');
const { ObjectId } = require('mongoose').Types;

const userlogin = (req , res)=>{
    res.send('login')
}
const usersignup = async (req , res)=>{
    const body = req.body
    let hashpassword = await bcrypt.hash(body.password, 14);
    let paths = path.resolve(__dirname).split('\\').slice(0 , path.resolve(__dirname).split('\\').length-1 ).join('\\')
        const filePath = path.resolve(`${paths}/Routes/uploads/images/${req.file.filename}`);
      
        if (!fs.existsSync(filePath)) {
            return res.status(404).send("Uploaded file not found on the server");
        }
        const fileData = fs.readFileSync(filePath);
       
        const newUser =  User.create({
            id: new ObjectId().toString(), 
            user_name: body.username,
            email:  body.email,
            mobile:  body.phone,
            password: hashpassword ,
            img:{
                data: fileData,
                contentType: 'image/png', // Ensure this matches your file type
            },
        })
        res.status(201).json({ message: "User created successfully", user: newUser });
}

module.exports= {
    userlogin , usersignup
}