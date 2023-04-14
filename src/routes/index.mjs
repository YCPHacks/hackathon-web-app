import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).render('index');
  })
  .post((req, res) => {
    res.redirect(303, '/');
  });

router.route('/dashboard')
    .get((req, res) => {
        res.status(200).render('dashboard');
    })


router.route('/dashboard/event_applications')
  .get((req, res) => {
    res.status(200).render('event_applications');
  })
  .post((req, res) => {
    res.redirect(303, '/dashboard/event_applications');
  });

router.route('/dashboard/hardware_items')
    .get((req, res) => {
        res.status(200).render('hardware_items');
    })

export { router };
