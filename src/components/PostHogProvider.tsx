'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (posthogKey) {
      posthog.init(
        posthogKey,
        {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
          capture_pageview: true,
        }
      );
    }
  }, []);

  return <>{children}</>
}