import express from 'express';

import {router as events} from './events.mjs';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('dashboard');
});

router.use('/events', events);


export {router};
