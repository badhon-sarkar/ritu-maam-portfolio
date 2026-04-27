import { NextRequest, NextResponse } from 'next/server';
import { setAdminCookie, clearAdminCookie } from '@/lib/auth';

const ADMIN_SECRET = process.env.ADMIN_SECRET;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, action } = body;

    if (action === 'logout') {
      const response = NextResponse.json({ success: true });
      return clearAdminCookie(response);
    }

    if (!ADMIN_SECRET) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (secret !== ADMIN_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    return setAdminCookie(response);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
