import express from 'express';
import { askQuestion,getAllQuestion,deleteQuestion } from '../controllers/questions.js';
import auth from '../middlewares/auth.js';
const router=express.Router();

router.post('/Ask',auth,askQuestion);
router.get('/get',getAllQuestion);
router.delete('/delete/:id',auth,deleteQuestion);
export default router;