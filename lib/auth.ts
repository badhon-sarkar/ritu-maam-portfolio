import { cookies } from 'next/headers';

const SESSION_COOKIE = 'ritu_admin_session';
const SESSION_VALUE = 'authenticated';

export function verifyAdminCookie(): boolean {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get(SESSION_COOKIE);
    return session?.value === SESSION_VALUE;
  } catch {
    return false;
  }
}

export function setAdminCookie(response: Response): Response {
  response.headers.set(
    'Set-Cookie',
    `${SESSION_COOKIE}=${SESSION_VALUE}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24}; SameSite=Strict${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`
  );
  return response;
}

export function clearAdminCookie(response: Response): Response {
  response.headers.set(
    'Set-Cookie',
    `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`
  );
  return response;
}
