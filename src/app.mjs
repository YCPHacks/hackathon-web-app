import express from 'express';
import 'express-async-errors';
import pkg from 'express-openid-connect';
const { auth, requiresAuth } = pkg;

import { router } from './routes/index.mjs';
import { router as dashboard } from './routes/dashboard.mjs';

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/static', express.static('./src/public'));

app.use(express.json());
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

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();
  res.locals.user = req.oidc.user ?? {};
  res.locals.userRoles = req.oidc.user?.['ycp_hacks_user_roles'];
console.log(req.oidc.accessToken)
  next();
});

app.use('/', router);
app.use('/dashboard', requiresAuth(), dashboard);

app.use((req, res) => {
  res.status(404).render('_404');
});

export { app };
