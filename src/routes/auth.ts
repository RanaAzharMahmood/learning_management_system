import express from 'express';
import AuthController from '../app/auth/AuthController';
import { Authentication } from '../middleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints related to user authentication
 *
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: 'user@example.com'
 *             password: 'password123'
 *     responses:
 *       200:
 *         description: Returns authentication success message
 *         content:
 *           application/json:
 *             example:
 *               token: 'Bearer eyJhbGciOiJIUzI1NiIsIn...'
 *       401:
 *         description: Returns authentication failure message
 *         content:
 *           application/json:
 *             example:
 *               message: 'Invalid credentials'
 *
 * /api/auth/register:
 *   post:
 *     summary: User registration
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: 'John Doe'
 *             email: 'john@example.com'
 *             password: 'password123'
 *     responses:
 *       201:
 *         description: Returns registration success message
 *         content:
 *           application/json:
 *             example:
 *               message: 'Registration successful'
 *       400:
 *         description: Returns registration failure message
 *         content:
 *           application/json:
 *             example:
 *               message: 'Invalid registration data'
 *
 * /api/auth/me:
 *   get:
 *     summary: Get user details
 *     tags: [Authentication]
 *     headers:
 *       - BearerAuth: []
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns user details
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

router.post('/login', AuthController.login);
router.post('/register', AuthController.signup);
router.get('/me', Authentication.authenticate, AuthController.getUserDetails);

export default router;
