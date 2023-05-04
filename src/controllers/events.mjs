import { fetch } from 'undici';

export async function readEventApplication(access_token, event) {
  const response = await fetch(`${process.env.API_BASE_URL}/events/${event}/application`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });

  const result = await response.json();

  return result.data;
}
