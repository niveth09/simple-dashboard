import React, { lazy, Suspense } from 'react';

const LazyActivityChart = lazy(() => import('./ActivityChart'));

const ActivityChart = props => (
  <Suspense fallback={null}>
    <LazyActivityChart {...props} />
  </Suspense>
);

export default ActivityChart;
