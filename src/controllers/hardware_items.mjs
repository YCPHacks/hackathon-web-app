/**
 *
 *  CLIENT HARDWARE ITEMS CONTROLLER
 *
 */

import { fetch } from 'undici';

export async function createHardwareItem(req, res, next) {
  res.sendStatus(201);
}

export async function listHardwareItems(req, res, next) {
  const accessToken = req.oidc.accessToken;

  const response = await fetch(`${process.env.API_BASE_URL}/hardware_items`, {
    headers: {
      'Authorization': `${accessToken.token_type} ${accessToken.access_token}`
    }
  });

  const result = await response.json();
  
  console.log(result);

  return result.data;
}
