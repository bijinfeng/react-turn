import React from 'react';
import type { TurnContainerProps } from './types';

export const TurnContainer = (props: TurnContainerProps): JSX.Element => {
  const { children } = props;

  return <div>{children}</div>;
};

TurnContainer.displayName = 'TurnContainer';
