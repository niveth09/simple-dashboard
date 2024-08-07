import React, { lazy, Suspense } from 'react';

const LazyFeedbackTable = lazy(() => import('./FeedbackTable'));

const FeedbackTable = props => (
  <Suspense fallback={null}>
    <LazyFeedbackTable {...props} />
  </Suspense>
);

export default FeedbackTable;
