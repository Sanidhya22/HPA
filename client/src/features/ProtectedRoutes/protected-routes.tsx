import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ReactNode } from 'react';
import { UserState } from '../../store/user.slice';

interface ProtectedRouteProps {
  children: ReactNode;
  condition: (user: UserState) => boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  condition,
}) => {
  const user = useAppSelector((state) => state.user);

  if (condition(user)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
