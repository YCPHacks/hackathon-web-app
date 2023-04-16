import express from 'express';

import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

import { dashboard } from './dashboard.mjs';

const router = express.Router();

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


///////////////////////////
//  PUBLIC ROUTES ABOVE  //
///////////////////////////

router.use(requiresAuth());

////////////////////////////
//  PRIVATE ROUTES BELOW  //
////////////////////////////


router.use('/dashboard', dashboard);

export { router };
