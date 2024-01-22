import express from 'express';
import { Authentication } from '../middleware';
import QuizController from '../app/quiz/QuizController';

const router = express.Router();

router.get(`/`,Authentication.authenticate ,QuizController.getAll);

router.post(`/create`,Authentication.authenticate ,QuizController.create);

router.post('/:quizid',Authentication.authenticate,QuizController.getById);

router.delete('/delete/:id',Authentication.authenticate,QuizController.deletion);

router.put('/update',Authentication.authenticate,QuizController.update)

export default router;
