import express from 'express';
import { askQuestion } from '../controllers/questions.js';
const router=express.Router();

router.post('/Ask',askQuestion);

export default router;