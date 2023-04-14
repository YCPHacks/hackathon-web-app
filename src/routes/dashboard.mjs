import express from 'express';

const dashboard_router = express.Router();

dashboard_router.route('/dashboard')
  .get((req, res) => {
    res.status(200).render('dashboard');
  });

dashboard_router.route('/dashboard/event_applications')
  .get((req, res) => {
    res.status(200).render('event_applications');
  })
  .post((req, res) => {
    res.redirect(303, '/dashboard/event_applications');
  });

dashboard_router.route('/dashboard/event_applications/summary')
  .get((req, res) => {
    res.status(200).render('event_applications_summary');
  });

dashboard_router.route('/dashboard/hardware_items')
  .get((req, res) => {
    res.status(200).render('hardware_items');
  });

dashboard_router.route('/dashboard/hardware_items/available')
  .get((req, res) => {
      res.status(200).render('hardware_items_available');
  });

export { dashboard_router };
