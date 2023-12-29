import { useContext } from 'react';

import { AuthContext } from '@/components/Context/Context';
import { backendService } from '@/utils/api/backend.service';

const useAuth = () => {
  const {
    accessToken,
    setAccessToken,
    role,
    setIsLogged,
    isLogged,
    setRole,
    identification,
    setIdentification,
  } = useContext(AuthContext);

  const setAuth = async (identification: string, password: string): Promise<boolean> => {
    const logInRes = await backendService.logIn(identification, password);
    if (logInRes) {
      localStorage.setItem('accessToken', logInRes.accessToken);
      localStorage.setItem('identification', logInRes.identification);
      localStorage.setItem('role', logInRes.role);
      setIsLogged(true);
      setAccessToken(logInRes.accessToken);
      setRole(logInRes.role);
      setIdentification(logInRes.identification);
      return true;
    }

    return false;
  };

  return { accessToken, setAccessToken, role, setIsLogged, isLogged, setAuth, identification };
};

export default useAuth;
