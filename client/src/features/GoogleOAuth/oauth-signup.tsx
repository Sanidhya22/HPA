import { useGoogleLogin } from '@react-oauth/google';

import { Button } from '@material-tailwind/react';
import { useGoogleSignupMutation } from '../../store/auth.api';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { userActions } from '../../store/user.slice';

export const GoogleSignUp = () => {
  const [googleSignUp] = useGoogleSignupMutation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const updateUserData = (userData: any) => {
    const {
      username,
      email,
      isAdmin,
      avatar,
      isPremium,
      premiumStatus,
      premiumSince,
      premiumExpires,
    } = userData;
    dispatch(
      userActions.setUserState({
        username,
        email,
        isAdmin,
        avatar,
        isPremium,
        premiumStatus,
        premiumSince,
        premiumExpires,
      })
    );
    navigate('/');
  };

  const login = useGoogleLogin({
    onSuccess: async ({ code }) => {
      try {
        const result = await googleSignUp({ code });
        if (result.data) {
          const decodedData = jwtDecode(result.data.data.accessToken);
          updateUserData(decodedData);
        } else if (result.error) {
          console.log(result.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    flow: 'auth-code',
  });

  return (
    <>
      <Button
        variant="outlined"
        size="sm"
        className="flex h-10 items-center justify-center gap-2"
        fullWidth
        onClick={() => login()}
      >
        <img
          src={`https://www.material-tailwind.com/logos/logo-google.png`}
          alt="google"
          className="h-6 w-6"
        />{' '}
        sign in with google
      </Button>
    </>
  );
};
