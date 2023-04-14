import express from 'express';

import { router } from './routes/index.mjs';

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/', router);
app.use('/static', express.static('public'));

export { app };
