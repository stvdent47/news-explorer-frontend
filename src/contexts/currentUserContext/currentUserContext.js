import { createContext } from 'react';

export const currentUser = {
  email: '',
  name: '',
};

export const CurrentUserContext = createContext();
