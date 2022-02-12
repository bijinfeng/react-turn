import React, { useMemo } from 'react';
import { TurnContext, TurnContextState } from './TurnContext';

interface TurnProviderProps {
  children?: React.ReactNode;
}

export const TurnProvider = ({ children }: TurnProviderProps) => {
  const state = useMemo<TurnContextState>(() => ({}), []);

  return <TurnContext.Provider value={state}>{children}</TurnContext.Provider>;
};
