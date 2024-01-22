import express from 'express';
import { Authentication } from '../middleware';
import UserController from '../app/user/UserController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints related to user management
 *
 * /api/users/random:
 *   get:
 *     summary: Get a random user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a random user
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: 'John Doe'
 *               email: 'john@example.com'
 *       401:
 *         description: Returns unauthorized access message
 *         content:
 *           application/json:
 *             example:
 *               message: 'Unauthorized access'
 */

router.get(`/random`, Authentication.authenticate, UserController.getRandomUser);

export default router;
