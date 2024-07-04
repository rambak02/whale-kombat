import {  useContext } from 'react';
import { OffersContext } from '../OffersContext';

export const useOffersContext = () => {
  const context = useContext(OffersContext);
  if (!context) {
    throw new Error()
  }
  return context;
}

