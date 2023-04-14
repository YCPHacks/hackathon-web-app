import express from 'express';

import { auth } from 'express-openid-connect';

import { router } from './routes/index.mjs';

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/static', express.static('./src/public'));

app.use(auth({
  authorizationParams: {
    audience: 'https://ycphacks.io/api',
    response_type: 'code',
    scope: 'openid profile email'
  },
  authRequired: false,
  idpLogout: true
}));

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();

  next();
});

app.use('/', router);

app.use((req, res, next) => {
  res.status(404).render('http_404');
});

export { app };
