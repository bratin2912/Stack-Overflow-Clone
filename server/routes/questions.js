import express from 'express';
import { askQuestion,getAllQuestion,deleteQuestion } from '../controllers/questions.js';

const router=express.Router();

router.post('/Ask',askQuestion);
router.get('/get',getAllQuestion);
router.delete('/delete/:id',deleteQuestion);
export default router;