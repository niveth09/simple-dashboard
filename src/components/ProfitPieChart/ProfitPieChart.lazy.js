import React, { lazy, Suspense } from 'react';

const LazyProfitPieChart = lazy(() => import('./ProfitPieChart'));

const ProfitPieChart = props => (
  <Suspense fallback={null}>
    <LazyProfitPieChart {...props} />
  </Suspense>
);

export default ProfitPieChart;
