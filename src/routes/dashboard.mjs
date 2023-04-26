import express from 'express';

import {
  createEventApplication,
  getEventApplication,
  listEventApplications
} from '../controllers/event_applications.mjs';

const dashboard = express.Router();

dashboard.route('/')
  .get((req, res) => {
    res.status(200).render('dashboard');
  });

dashboard.route('/apply')
  .get((req, res, next) => {
    res.status(200).render('apply');
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

dashboard.route('/summary')
  .get((req, res, next) => {
    res.status(200).render('event_applications_summary');
  });

dashboard.route('/hardware_items')
  .get((req, res, next) => {
    res.status(200).render('hardware_items');
  });

dashboard.route('/hardware_items/available')
  .get((req, res, next) => {
      res.status(200).render('hardware_items_available');
  });

export { dashboard };
