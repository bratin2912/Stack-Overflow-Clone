import express from "express";
import {signup,login} from '../controllers/auth.js'
import { users } from "../controllers/user.js";
const router=express.Router();

router.post('/signup',signup)
router.post('/login',login)

router.get('/getAllUsers',users)

export default router;