import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SignUpInCard } from '../../shared/SignUp-SignIn-Card';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '../../app/hooks';
import { userActions } from '../../store/user.slice';
import {
  useGoogleSigninMutation,
  useSigninMutation,
} from '../../store/auth.api';
import { SVGIcon } from '../../features/SvgIcon';
import { Typography } from '@material-tailwind/react';
import { GoogleSignIn } from '../../features/GoogleOAuth';
import { jwtDecode } from 'jwt-decode';
import { CredentialResponse } from '@react-oauth/google';
import { GoogleUserInfo } from '../../shared/Types/googleUserData';
import { setLocalStorageValue } from '../../shared/Utills/localStorage.Utils';

export const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const from = location.state?.from || '/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sigin, { isLoading }] = useSigninMutation();
  const [googleSignIn, { isLoading: isLoadingGoogle }] =
    useGoogleSigninMutation();

  const updateUserData = (userData: any) => {
    dispatch(userActions.setUserState(userData));
    navigate(from);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await sigin({ username, password });
      if (result.data) {
        const decodedData = jwtDecode(result.data.data.accessToken);
        setLocalStorageValue('_AT', result.data.data.accessToken);
        updateUserData(decodedData);
      } else if (result.error) {
        // const { data } = result.error;
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    const userData = jwtDecode(credentialResponse?.credential!);

    const { name, email, picture } = userData as GoogleUserInfo;
    try {
      const result = await googleSignIn({
        email,
        username: name,
        profileImageUrl: picture,
      });
      if (result.data) {
        const decodedData = jwtDecode(result.data.data.accessToken);
        setLocalStorageValue('_AT', result.data.data.accessToken);
        updateUserData(decodedData);
      } else if (result.error) {
        console.log({ ...result.error });
        // const { data } = result.error;
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUpInCard>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex justify-center mx-auto">
          <Typography
            href="/"
            variant="h1"
            color="blue-gray"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            The Technical Take
          </Typography>
        </div>

        <div className="flex items-center justify-center mt-4">
          <a
            href="#"
            className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize dark:border-blue-400 dark:text-white"
          >
            Sign in
          </a>
        </div>

        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <LockClosedIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
        </div>

        <a
          href="#"
          className="text-xs text-gray-600 ml-2 dark:text-gray-400 hover:underline"
        >
          Forget Password?
        </a>

        <div className="mt-6">
          {isLoading ? (
            <span className="flex justify-center">
              <SVGIcon name="dot-scale-middle-loading" />
            </span>
          ) : (
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 dark:bg-blue-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex justify-center mt-6 -mx-2">
          {isLoadingGoogle ? (
            <span className="flex justify-center">
              <SVGIcon name="dot-scale-middle-loading" />
            </span>
          ) : (
            <GoogleSignIn handleGoogleSuccess={handleGoogleSuccess} />
          )}
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don't have an account?{' '}
          <Link
            to="/auth/signup"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </Link>
        </p>
      </form>
    </SignUpInCard>
  );
};
