import { fetch } from 'undici';

export async function createEventApplication(access_token, event, application) {
  const response = await fetch(`${process.env.API_BASE_URL}/events/${event}/application`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      application
    })
  });

  if (!response.ok) {
    res.json(response);
  }

  const result = await response.json();

  return result;
}

export async function readEventApplication(access_token, event) {
  const response = await fetch(`${process.env.API_BASE_URL}/events/${event}/application`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  });

  const result = await response.json();

  return result;
}
