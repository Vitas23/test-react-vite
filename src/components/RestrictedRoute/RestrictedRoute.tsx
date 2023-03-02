import { Navigate } from 'react-router-dom';
import { account } from '../../_mock/account';

interface Props {
  requiredRole?: string;
  isAuthRequired: boolean;
  redirectToIfLogged?: string;
  outlet: JSX.Element;
}

export const RestrictedRoute = ({
  requiredRole,
  isAuthRequired,
  redirectToIfLogged,
  outlet,
}: Props) => {
  if (redirectToIfLogged && account) {
    return <Navigate to={redirectToIfLogged} replace />;
  }

  if (isAuthRequired && account?.role !== 'USER') {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    const userGroups = ['ADMIN'];
    const hasAccess = userGroups.includes(requiredRole);

    if (!hasAccess) {
      return <Navigate to="/permission-denied" replace />;
    }
  }

  return outlet;
};
