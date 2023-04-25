/**
 *
 *  CLIENT EVENT APPLICATIONS ROUTER
 *
 */

import express from 'express';

import {
  createEventApplication,
  getEventApplication,
  listEventApplications
} from '../controllers/event_applications.mjs';

const router = express.Router();

router.route('/event_applications')
  .get(await listEventApplications)
  .post(await createEventApplication);

router.route('/event_applications/:event_application_id')
  .get(await getEventApplication);

export { router };
