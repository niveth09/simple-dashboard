import React, { lazy, Suspense } from 'react';

const LazyRating = lazy(() => import('./Rating'));

const Rating = props => (
  <Suspense fallback={null}>
    <LazyRating {...props} />
  </Suspense>
);

export default Rating;
