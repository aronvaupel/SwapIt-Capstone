import type { User } from './types';

export async function verifyLogin(
  username: string,
  password: string
): Promise<User> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: User = await response.json();
  return result;
}
