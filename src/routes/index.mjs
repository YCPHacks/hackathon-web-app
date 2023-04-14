import express from 'express';

import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

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


///////////////////////////////////
//                               //
//  👆  PUBLIC ROUTES ABOVE  👆  //
//                               //
///////////////////////////////////


router.use((req, res, next) => {
  requiresAuth();

  next();
});


////////////////////////////////////
//                                //
//  👇  PRIVATE ROUTES BELOW  👇  //
//                                //
////////////////////////////////////


router.route('/dashboard')
  .get((req, res) => {
    res.status(200).render('dashboard');
  });

router.route('/dashboard/event_applications')
    .get((req, res) => {
        res.status(200).render('event_applications');
    })
    .post((req, res) => {
        res.redirect(303, '/dashboard/event_applications');
    });

router.route('/dashboard/event_applications/event_applications_summary')
    .get((req, res) => {
        res.status(200).render('event_applications_summary');
    })

router.route('/dashboard/hardware_items')
    .get((req, res) => {
        res.status(200).render('hardware_items');
    });

router.route('/dashboard/hardware_items/available')
    .get((req, res) => {
        res.status(200).render('hardware_items_available');
    });

export {router};
