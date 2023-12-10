import { createContext, useContext, useState } from 'react';

import { Consultant } from '@/dummy_data/consultants';

export interface AuthContext {
  user: Consultant | null;
  isLogged: boolean;
}

const defaultAuthContext: AuthContext = {
  user: null,
  isLogged: false,
};

export const AuthContext = createContext(defaultAuthContext);
