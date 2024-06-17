import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { userActions } from '../../store/user.slice';
import { SVGIcon } from '../SvgIcon';
import { jwtDecode } from 'jwt-decode';
import { getLocalStorageValue } from '../../shared/Utills/localStorage.Utils';
import { isTokenExpired } from '../../shared/Utills/commonUtils';

export const PersistLogin: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const updateUserData = (userData: any) => {
    dispatch(userActions.setUserState(userData));
  };
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const value = getLocalStorageValue('_AT');
        if (value) {
          const decodedData = jwtDecode(value as string);
          const jwtExpired = isTokenExpired(decodedData);
          if (jwtExpired) {
            dispatch(userActions.resetUserState());
            return;
          }
          updateUserData(decodedData);
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
