import { FC } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ErrorElement } from '../../pages/ErrorElement';

export const Authorization: FC = () => {
  const user = useAppSelector((state) => state.user);

  const location = useLocation();
  if (user.username) {
    const isAllowed = user.isAdmin;

    return isAllowed ? <Outlet /> : <ErrorElement />;
  }
  return (
    <Navigate to="/auth/signin" state={{ from: location.pathname }} replace />
  );
};
