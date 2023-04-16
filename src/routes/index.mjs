import express from 'express';

import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

import { dashboard_router } from './dashboard.mjs';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).render('index');
  })
  .post((req, res) => {
    res.redirect(303, '/');
  });

router.route('/gallery')
  .get((req, res) => {
    res.status(200).render('gallery');
  });

router.route('/judging_criteria')
  .get((req, res) => {
    res.status(200).render('judging_criteria');
  });

router.route('/past_events')
  .get((req, res) => {
    res.status(200).render('past_events');
  });

router.route('/sponsor')
    .get((req, res) => {
        res.status(200).render('sponsor');
    });


///////////////////////////////////
//                               //
//  👆  PUBLIC ROUTES ABOVE  👆  //
//                               //
///////////////////////////////////


router.all('/dashboard', requiresAuth());
router.all('/dashboard/*', requiresAuth());


////////////////////////////////////
//                                //
//  👇  PRIVATE ROUTES BELOW  👇  //
//                                //
////////////////////////////////////


router.use(dashboard_router);

export {router};
