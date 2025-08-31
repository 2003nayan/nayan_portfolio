// src/app/api/gh-stats/route.ts
import { NextResponse } from 'next/server';
import { getGHStats } from '@/lib/get-gh-stats';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1 hour

export async function GET() {
  try {
    // Add timeout wrapper
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('GitHub API timeout')), 10000)
    );
    
    const dataPromise = getGHStats();
    const data = await Promise.race([dataPromise, timeoutPromise]);
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('GitHub stats API error:', error);
    // Return fallback data on timeout or error
    return NextResponse.json({
      issues: 25,
      prs: 15,
      followers: 45,
      stars: 120,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  }
}
