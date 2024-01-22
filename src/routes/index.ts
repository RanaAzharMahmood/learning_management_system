import express from 'express';
import authRouter from './auth';
import userRouter from './user';
import quizRouter from './quiz'
import { config } from '../helpers';
const env = (process.env.NODE_ENV || 'local').toLowerCase();

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: General
 *   description: General endpoints
 *
 * /:
 *   get:
 *     summary: Get the main page
 *     tags: [General]
 *     responses:
 *       200:
 *         description: Returns the main page
 *         content:
 *           application/json:
 *             example:
 *               status: 'ok'
 *               environment: 'local'
 *               version: '1.0'
 */

router.get('/', (_, res) => {
  res.send({
    status: 'ok',
    environment: env,
    version: '1.0.0'
  });
});

router.use('/v1/api/auth', authRouter);
router.use('/v1/api/users', userRouter);
router.use('/v1/api/quiz', quizRouter);

export default router;
