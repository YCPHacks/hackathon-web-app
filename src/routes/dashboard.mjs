import express from 'express';

import {router as events} from './events.mjs';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('dashboard');
});

router.get('/hardware_items', (req, res) => {
    res.status(200).render('hardware_items');
});

router.get('/check_in', (req, res) => {
    res.status(200).render('check_in');
});

router.get('/event_applications', (req, res) => {
    res.status(200).render('event_applications');
});

router.use('/events', events);

router.route('/hardware_items')
  .get(async (req, res, next) => {
    res.locals.hardware_items = await listHardwareItems(req, res, next);

    res.status(200).render('hardware_items');
  })
  .post(async (req, res, next) => {
    await createHardwareItem(req, res, next);
  
    res.redirect(303, '/dashboard/hardware_items');
  });

router.route('/hardware_items/available')
  .get((req, res, next) => {
    res.status(200).render('hardware_items_available');
  });


export { router };
