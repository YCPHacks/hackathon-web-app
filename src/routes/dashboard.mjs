import express from 'express';

import { router as events } from './events.mjs';

const router = express.Router();

router.use('/events', events);

export { router };
