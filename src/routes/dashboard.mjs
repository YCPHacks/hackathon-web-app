import express from 'express';

import {
  createEventApplication,
  getEventApplication,
  listEventApplications
} from '../controllers/event_applications.mjs';

import {
  createHardwareItem,
  listHardwareItems
} from '../controllers/hardware_items.mjs';

const dashboard = express.Router();

dashboard.route('/')
  .get((req, res) => {
    res.status(200).render('dashboard');
  });

dashboard.route('/apply')
  .get((req, res, next) => {
    res.status(200).render('apply');
});

dashboard.route('/check_in')
    .get((req, res, next) => {
        res.status(200).render('check_in');
    });

dashboard.route('/event_applications')
  .get(async (req, res, next) => {
    res.locals.event_applications = await listEventApplications(req, res, next);
  
    res.status(200).render('event_applications');
  })
  .post(async (req, res, next) => {
    await createEventApplication(req, res, next);
  
    res.redirect(303, '/event_applications');
  });

dashboard.route('/event_applications/:event_application_id')
  .get(async (req, res, next) => {
    res.locals.event_application = await getEventApplication(req, res, next);
  
    res.status(200).render('event_application');
  });

dashboard.route('/event_applications/summary')
  .get(async (req, res, next) => {
//    res.locals.event_applications_summary = await getEventApplicationsSummary(req, res, next);

    res.status(200).render('event_applications_summary');
  });

dashboard.route('/hardware_items')
  .get(async (req, res, next) => {
    res.locals.hardware_items = await listHardwareItems(req, res, next);

    res.status(200).render('hardware_items');
  })
  .post(async (req, res, next) => {
    await createHardwareItem(req, res, next);
  
    res.redirect(303, '/dashboard/hardware_items');
  });

dashboard.route('/hardware_items/available')
  .get((req, res, next) => {
    res.status(200).render('hardware_items_available');
  });

dashboard.route('/hardware_items/hardware_item')
    .get((req, res, next) => {
        res.status(200).render('hardware_items');
    });

export { dashboard };
