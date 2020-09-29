import React from 'react';

import { LockBody, ReleaseBody, Spinner, Picture } from './loading.styles';

const Loading = ({ src, ...restProps }) => (
  <Spinner {...restProps}>
    <LockBody />
    <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
  </Spinner>
);
const LoadingReleaseBody = () => <ReleaseBody />;

Loading.ReleaseBody = LoadingReleaseBody;

export default Loading;
