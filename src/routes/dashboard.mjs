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


export {router};
