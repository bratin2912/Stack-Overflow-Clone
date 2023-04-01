import express from 'express';
import { askQuestion } from '../controllers/questions.js';
import { getAllQuestion } from '../controllers/questions.js';

const router=express.Router();

router.post('/Ask',askQuestion);
router.get('/get',getAllQuestion);
export default router;