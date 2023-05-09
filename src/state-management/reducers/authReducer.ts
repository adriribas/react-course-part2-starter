interface LoginAction {
  type: 'LOGIN';
  user: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction): string => {
  if (action.type === 'LOGIN') return action.user;
  if (action.type === 'LOGOUT') return '';
  return user;
};

export default authReducer;
