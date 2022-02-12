import React from 'react';
import type { TurnPageProps } from './types';

export const TurnPage = (props: TurnPageProps): JSX.Element => {
  const { children } = props;

  return <div>{children}</div>;
};
