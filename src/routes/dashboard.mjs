import express from 'express';

const dashboard = express.Router();

dashboard.route('/')
  .get((req, res) => {
    res.status(200).render('dashboard');
  });

dashboard.route('/event_applications')
  .get((req, res) => {
    res.status(200).render('event_applications');
  })
  .post((req, res) => {
    res.redirect(303, '/event_applications');
  });

dashboard.route('/summary')
  .get((req, res) => {
    res.status(200).render('event_applications_summary');
  });

dashboard.route('/hardware_items')
  .get((req, res) => {
    res.status(200).render('hardware_items');
  });

dashboard.route('/hardware_items/available')
  .get((req, res) => {
      res.status(200).render('hardware_items_available');
  });

export { dashboard };
