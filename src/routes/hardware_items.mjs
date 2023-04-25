/**
 *
 *  CLIENT HARDWARE ITEMS ROUTER
 *
 */

import express from 'express';

import {
  createHardwareItem,
  listHardwareItems
} from '../controllers/hardware_items.mjs';

const router = express.Router();

router.route('/hardware_items')
  .get(await listHardwareItems)
  .post(await createHardwareItem);

export { router };
