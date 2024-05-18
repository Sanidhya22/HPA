import { useAppSelector } from "../../app/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

export const Authentication: FC<PropsWithChildren> = ({ children }) => {
  const user = useAppSelector((state) => state.user);
  const location = useLocation();
  if (!user.username) {
    return <Navigate to="/signin" state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
};
