const express = require('express')
const routes = express.Router()
var fs = require('fs');
const {usersignup ,userlogin } = require('../Controllers/User')
const multer = require("multer");
var path = require('path');
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = path.resolve(__dirname, "uploads" , "images");
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        },
    });
    const upload = multer({
        storage,
        fileFilter: (req, file, cb) => {
            const allowedTypes = ["image/jpeg", "image/png"];
            if (!allowedTypes.includes(file.mimetype)) {
                return cb(new Error("Invalid file type"));
            }
            cb(null, true);
        },
    });
    routes.post('/login' ,userlogin)
    routes.post('/signup',upload.single("userImage"), usersignup)
    module.exports = routes