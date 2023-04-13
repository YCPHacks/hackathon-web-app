import http from 'node:http';

import { app } from './app.mjs';

const port = process.env.PORT;

http.createServer(app).listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
