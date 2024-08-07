import React, { lazy, Suspense } from 'react';

const LazyTopNav = lazy(() => import('./TopNav'));

const TopNav = props => (
  <Suspense fallback={null}>
    <LazyTopNav {...props} />
  </Suspense>
);

export default TopNav;
