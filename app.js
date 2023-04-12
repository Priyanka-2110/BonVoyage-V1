const express = require('express');
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const hbs =require("hbs");
const cookieParser = require("cookie-parser");
const app = express();  //          app-variable         epress()-function

dotenv.config({
    path: "./.env"
})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("MySQL Connected");
    }
})

app.use(express.urlencoded({extended: false}));     
app.use(cookieParser());

const location = path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine", "hbs");

const partialPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialPath);

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

app.listen(5000,()=>{
    console.log('listening on port 5000');
});




















































/*const express = require('express');
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const hbs =require("hbs");
const cookieParser = require("cookie-parser");
const app = express();  //          app-variable         epress()-function

dotenv.config({
    path: "./.env"
})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("MySQL Connected");
    }
})

const location = path.join(__dirname, "./public");
app.use(express.static(location));  
app.set("view engine", "hbs");

const partialPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/profile",(req,res)=>{
    res.render("profile");
});

app.get("/home",(req,res)=>{
    res.render("home");
});

app.listen(5000,()=>{
    console.log('listening on port 5000');
});*/

