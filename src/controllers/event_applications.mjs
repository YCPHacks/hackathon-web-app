/**
 *
 *  CLIENT EVENT APPLICATIONS CONTROLLER
 *
 */

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

console.log(accessToken);

  const result = await response.json();

  res.status(200).json(result);
}

export async function listEventApplications(req, res, next) {
  const accessToken = req.oidc.accessToken;

  const response = await fetch(`${process.env.API_BASE_URL}/event_applications`, {
    headers: {
      'Authorization': `${accessToken.token_type} ${accessToken.access_token}`
    }
  });

  const result = await response.json();

  res.status(200).json(result);
}
