import express from 'express';

import { router } from './routes/index.mjs';

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');
app.use('/static', express.static('public'));

app.use('/', router);


export { app };
