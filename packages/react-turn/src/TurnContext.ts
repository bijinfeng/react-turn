import { createContext } from 'react';

export interface TurnContextState {}

export const TurnContext = createContext<TurnContextState>({} as TurnContextState);
