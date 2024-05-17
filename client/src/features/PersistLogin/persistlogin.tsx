import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { userActions } from "../../store/user.slice";
import { SVGIcon } from "../SvgIcon";

export const PersistLogin: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const response = await fetch(
          "http://localhost:8181/api/auth/verifyauth",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Login failed");
        }
        const data = await response.json();
        const { username, email, isAdmin } = data.data;

        dispatch(userActions.setUserState({ username, email, isAdmin }));
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    checkLoginStatus();
  }, []);
  return (
    <>
      {loading ? (
        <span className="flex items-center justify-center h-screen">
          <SVGIcon name="loading-spinner" />
        </span>
      ) : (
        children
      )}
    </>
  );
};
