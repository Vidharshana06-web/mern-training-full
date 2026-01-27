const express=require('express')
const router=express.Router()
const{register,login}=require('../controllers/authControllers')
router.post('/register',register)//(endpoint,function name)
router.post('/login',login)
module.exports=router