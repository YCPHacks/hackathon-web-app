import express from 'express';

import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

import { router as dashboard } from './dashboard.mjs';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});
router.get('/', (req, res) => {
  res.status(200).render('index');
});
router.get('/gallery', (req, res) => {
  res.status(200).render('gallery');
});
router.get('/judging_criteria', (req, res) => {
  res.status(200).render('judging_criteria');
});
router.get('/past_events', (req, res) => {
  res.status(200).render('past_events');
});
router.get('/sponsor', (req, res) => {
  res.status(200).render('sponsor');
});
export { router };
