import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { comparePassword, signToken, COOKIE_NAME } from '@/lib/auth';

// Simple in-memory rate limiting
const loginAttempts = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(request: NextRequest): string {
  return request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);

  if (!attempts || now > attempts.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 }); // 15 min window
    return true;
  }

  if (attempts.count >= 5) {
    return false; // Rate limited
  }

  attempts.count++;
  return true;
}

interface User {
  id: number;
  username: string;
  password_hash: string;
}

export async function POST(request: NextRequest) {
  const ip = getRateLimitKey(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: 'Çok fazla başarısız giriş denemesi. 15 dakika bekleyin.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { message: 'Kullanıcı adı ve şifre gereklidir.' },
        { status: 400 }
      );
    }

    const db = getDb();
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as User | null;

    if (!user || !comparePassword(password, user.password_hash)) {
      return NextResponse.json(
        { message: 'Geçersiz kullanıcı adı veya şifre.' },
        { status: 401 }
      );
    }

    const token = signToken({ userId: user.id, username: user.username });

    const response = NextResponse.json({ message: 'Giriş başarılı.' });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: 'Sunucu hatası.' },
      { status: 500 }
    );
  }
}
