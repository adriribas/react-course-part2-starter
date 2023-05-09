import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

interface LoginAction {
  type: 'LOGIN';
  user: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction): string => {
  if (action.type === 'LOGIN') return action.user;
  if (action.type === 'LOGOUT') return '';
  return user;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
