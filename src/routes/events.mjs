import express from 'express';

import {
  readEventApplication
} from '../controllers/events.mjs';

const events = express.Router();

events.get('/:event/application', async (req, res) => {
  const response = await readEventApplication(
        req.oidc.accessToken.access_token,
        req.params.event)
      .catch(console.log);

  res.locals.metadata = {
    event: req.params.event
  };

  if (response.status === 400 && response.message === 'Record not found') {
    res.status(200).render('blank_application');
  }

  res.locals = {
    ...res.locals,
    data: {
      application: response.data.application.flat()
    }
  };

  res.status(200).render('application');
});

events.post('/:event/application', async (req, res) => {
  res.redirect(303, '/dashboard');
});

export { events };
