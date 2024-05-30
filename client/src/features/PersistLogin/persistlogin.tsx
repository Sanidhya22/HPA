import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { userActions } from '../../store/user.slice';
import { SVGIcon } from '../SvgIcon';
import { useVerifyAuthMutation } from '../../store/auth.api';
import { jwtDecode } from 'jwt-decode';

export const PersistLogin: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [verifyAuth] = useVerifyAuthMutation();
  const [loading, setLoading] = useState(true);

  const updateUserData = (userData: any) => {
    dispatch(userActions.setUserState(userData));
  };
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const result = await verifyAuth();
        if (result.data) {
          const decodedData = jwtDecode(result.data.data.accessToken);
          updateUserData(decodedData);
        } else if (result.error) {
          console.log(result.error);
        }
      } catch (error) {
        console.log(error);
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
