const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
/*const bodyParser = require('body-parser');*/

router.get(["/","/login"],(req,res)=>{
    //res.send('Welcome')
    res.render("login");
});

router.get('/auth/logout',(req,res)=>{
    res.render("login");
});

router.get('/register',(req,res)=>{
    res.render("register");
});
router.get('/profile',userController.isLoggedIn,(req,res)=>{
    if(req.user){
        res.render("profile",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/NorthIndia', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("NorthIndia",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Delhi', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Delhi",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Himachal', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Himachal",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Rajasthan', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Rajasthan",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Haridwar', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Haridwar",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Varanasi', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Varanasi",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/SouthIndia', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("SouthIndia",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Kerala', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Kerala",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Tirupati', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Tirupati",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Coorg', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Coorg",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/TamilNadu', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("TamilNadu",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/EastIndia', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("EastIndia",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Gangtok-Pelling', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Gangtok-Pelling",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Kalimpong', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Kalimpong",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Darjeeling', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Darjeeling",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/WestIndia', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("WestIndia",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Dwaraka', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Dwaraka",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Mumbai', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Mumbai",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Pune', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Pune",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/Goa', userController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render("Goa",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});
router.get('/home', userController.isLoggedIn, (req,res)=>{
    //console.log(req.name);
    if(req.user){
        res.render("home",{user:req.user});
    }
    else{
        res.redirect("/login");
    }
});

module.exports = router;