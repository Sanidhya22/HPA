import { useAppSelector } from "../../app/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { FC, PropsWithChildren, useEffect } from "react";
export const Authentication: FC<PropsWithChildren> = ({ children }) => {
  const user = useAppSelector((state) => state.user);
  const location = useLocation();
  console.log(user);

  useEffect(() => {
    console.log(user);
  }, [user]);
  if (!user.username) {
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
