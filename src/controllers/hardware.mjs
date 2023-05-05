/**
 *
 *  CLIENT HARDWARE ITEMS CONTROLLER
 *
 */

import { fetch } from 'undici';

export async function createHardwareItem(req, res, next) {
  const {
    name,
    link,
    category,
    status,
    location
  } = req.body;

  const accessToken = req.oidc.accessToken;

  return await fetch(`${process.env.API_BASE_URL}/hardware_items`, {
    method: 'POST',
    headers: {
      'Authorization':
           `${accessToken.token_type} ${accessToken.access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      link,
      category,
      status,
      location
    })
  });
}

export async function listHardwareItems(req, res, next) {
  const accessToken = req.oidc.accessToken;

  const response =
      await fetch(`${process.env.API_BASE_URL}/hardware_items`, {
    headers: {
      'Authorization':
          `${accessToken.token_type} ${accessToken.access_token}`
    }
  });

  const result = await response.json();

  return result.data;
}