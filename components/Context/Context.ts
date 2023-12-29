import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

export interface AuthContextI {
  accessToken: string | null;
  role: string | null;
  isLogged: boolean;
  identification: string;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setAccessToken: Dispatch<SetStateAction<string>>;
  setRole: Dispatch<SetStateAction<string>>;
  setIdentification: Dispatch<SetStateAction<string>>;
}

const defaultAuthContext: AuthContextI = {
  accessToken: null,
  role: null,
  isLogged: false,
  identification: '',
  setIsLogged: () => {},
  setAccessToken: () => {},
  setRole: () => {},
  setIdentification: () => {},
};

export const AuthContext = createContext(defaultAuthContext);
