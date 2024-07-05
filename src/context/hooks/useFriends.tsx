import {  useContext } from 'react';
import { FriendsContext } from '../FriendsContext';

export const useFriendsContext = () => {
  const context = useContext(FriendsContext);
  if (!context) {
    throw new Error()
  }
  return context;
}

