/**
 *
 *  CLIENT INDEX ROUTER
 *
 */

import express from 'express';

import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

import { router as event_applications } from './event_applications.mjs';
import { router as hardware_items } from './hardware_items.mjs';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).render('index');
});

router.use('/dashboard', requiresAuth(), [
  event_applications,
  hardware_items
]);

export { router };
