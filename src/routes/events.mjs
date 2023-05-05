import express from 'express';

import {
  createEventApplication,
  readEventApplication
} from '../controllers/events.mjs';

const router = express.Router();

router.get('/:event/application', async (req, res) => {
  const data = await readEventApplication(
    req.oidc.accessToken,
    req.params.event
  );

  res.render('application');
});

router.post('/:event/application', async (req, res) => {
  const application = { ...req.body };

  await createEventApplication(
    req.oidc.accessToken,
    application
  );

  res.redirect(303, req.originalUrl);
});

export { router };
