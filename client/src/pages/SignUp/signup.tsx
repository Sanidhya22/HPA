import { Link } from 'react-router-dom';
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { SignUpInCard } from '../../shared/SignUp-SignIn-Card';
import { Typography } from '@material-tailwind/react';
import { GoogleSignUp } from '../../features/GoogleOAuth';
import { useGoogleLogin } from '@react-oauth/google';
import { useGoogleSignupMutation } from '../../store/auth.api';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { userActions } from '../../store/user.slice';

export const SignUp = () => {
  const [googleSignUp] = useGoogleSignupMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const updateUserData = (userData: any) => {
    dispatch(userActions.setUserState(userData));
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
    <SignUpInCard>
      <form className="w-full max-w-md">
        <div className="flex justify-center mx-auto">
          <Typography
            as="a"
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
            sign up
          </a>
        </div>

        <div className="relative flex items-center mt-2">
          <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            type="text"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <EnvelopeIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            type="email"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <LockClosedIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <LockClosedIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>

          <input
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirm Password"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 dark:bg-blue-700 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Sign Up
          </button>

          <div className="flex items-center mt-6 ">
            <GoogleSignUp login={login} />
          </div>

          <div className="mt-6 text-center ">
            <Link
              to="/auth/signin"
              className="font-medium text-xs text-gray-700 dark:text-gray-200 hover:underline"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </SignUpInCard>
  );
};
