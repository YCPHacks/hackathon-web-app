/**
 *
 *  CLIENT EVENT APPLICATIONS CONTROLLER
 *
 */

import { fetch } from 'undici';

export async function createEventApplication(req, res, next) {
  res.sendStatus(201);
}

export async function getEventApplication(req, res, next) {
  const accessToken = req.oidc.accessToken;

  const response = await fetch(`${process.env.API_BASE_URL}/event_applications/${req.params.event_application_id}`, {
    headers: {
      'Authorization': `${accessToken.token_type} ${accessToken.access_token}`
    }
  });

  const result = await response.json();

  return result.data;
}

export async function getEventApplicationsSummary(req, res, next) {
  const accessToken = req.oidc.accessToken;

  const response = await fetch(`${process.env.API_BASE_URL}/event_applications/summary`, {
    headers: {
      'Authorization': `${accessToken.token_type} ${accessToken.access_token}`
    }
  });

  const result = await response.json();

  return result.data;
}

export async function listEventApplications(req, res, next) {
  const accessToken = req.oidc.accessToken;

  const response = await fetch(`${process.env.API_BASE_URL}/event_applications`, {
    headers: {
      'Authorization': `${accessToken.token_type} ${accessToken.access_token}`
    }
  });

  const result = await response.json();

  return result.data;
}
