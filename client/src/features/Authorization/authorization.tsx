import { FC } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

export const Authorization: FC = () => {
  const user = useAppSelector((state) => state.user);

  const location = useLocation();
  if (user.username) {
    const isAllowed = user.isAdmin;

    return isAllowed ? <Outlet /> : <p>Unauthorised</p>;
  }
  return <Navigate to="/signin" state={{ path: location.pathname }} replace />;
};
