import React, { lazy, Suspense } from 'react';

const LazyOrderTable = lazy(() => import('./OrderTable'));

const OrderTable = props => (
  <Suspense fallback={null}>
    <LazyOrderTable {...props} />
  </Suspense>
);

export default OrderTable;
