import express from 'express';

import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

import { router as dashboard } from './dashboard.mjs';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});

export { router };
