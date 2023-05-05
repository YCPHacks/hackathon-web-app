import express from 'express';

import { router as events } from './events.mjs';

const router = express.Router();

router.use('/events', events);

router.get('/dashboard', (req, res) => {
    res.status(200).render('dashboard');
});

export { router };
