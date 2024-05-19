import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { userActions } from "../../store/user.slice";
import { SVGIcon } from "../SvgIcon";
import { useVerifyAuthMutation } from "../../store/api";

export const PersistLogin: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [verifyAuth] = useVerifyAuthMutation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const result = await verifyAuth();
        const { username, email, isAdmin, avatar } = result.data.data;
        dispatch(
          userActions.setUserState({ username, email, isAdmin, avatar })
        );
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
