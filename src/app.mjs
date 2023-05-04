import express from 'express';
import 'express-async-errors';
import { auth } from 'express-openid-connect';

import { events } from './routes/events.mjs';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(auth({
  authorizationParams: {
    audience: process.env.AUDIENCE,
    response_type: 'code',
    scope: 'openid profile email'
  },
  authRequired: false,
  idpLogout: true
}));

app.use('/', events);

export { app };
