import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN_HERE', // replace with your DSN from Sentry dashboard
  tracesSampleRate: 1.0,
});
