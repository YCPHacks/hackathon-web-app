import express from 'express';

import {
  readEventApplication
} from '../controllers/events.mjs';

const events = express.Router();

events.get('/:event/application', async (req, res) => {
  res.locals.data = await readEventApplication(
      req.oidc.accessToken.access_token,
      req.params.event);

  res.status(200).render('application');
});

export { events };
