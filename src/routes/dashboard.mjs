import express from 'express';

import {
  events
} from './events.mjs'; 

import {
  readEventApplication
} from '../controllers/events.mjs';

const dashboard = express.Router();

dashboard.route('/')
  .get((req, res) => {
    res.status(200).render('dashboard');
  });

dashboard.route('/check_in')
  .get((req, res, next) => {
    res.status(200).render('check_in');
  });

dashboard.use('/events', events);

export { dashboard };
