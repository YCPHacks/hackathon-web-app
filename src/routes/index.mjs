import express from 'express';

import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

import {
  readEventApplication
} from '../controllers/events.mjs';

const router = express.Router();

router.get('/', (req, res) => { res.send('home'); });

export { router };
