import express from 'express';

import { router } from './routes/index.mjs';

const app = express();

app.set('view engine', 'pug');

app.use('/', router);

export { app };
