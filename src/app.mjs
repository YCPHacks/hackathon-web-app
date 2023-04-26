/**
 *
 *  CLIENT APPLICATION
 *
 */

import express from 'express';
import { auth } from 'express-openid-connect';

import { router } from './routes/index.mjs';

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(auth({
  authorizationParams: {
    audience: process.env.AUDIENCE,
    response_type: 'code',
    scope: 'openid profile email list:event_applications read:event_application'
  },
  authRequired: false,
  idpLogout: true
}));

/*
app.use(helmet({}));
*/

app.use('/static', express.static('./src/public'));

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();
  res.locals.user = req.oidc.user ?? {};
  res.locals.userRoles = req.oidc.user?.[`${process.env.NAMESPACE}/roles`];

  next();
});

app.use('/', router);

app.use((req, res) => {
  res.status(404).render('_404');
});

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).render('_error', {
    error: err
  });
});

export { app };
