import React, { lazy, Suspense } from 'react';

const LazySelectChannel = lazy(() => import('./SelectChannel'));

const SelectChannel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySelectChannel {...props} />
  </Suspense>
);

export default SelectChannel;
