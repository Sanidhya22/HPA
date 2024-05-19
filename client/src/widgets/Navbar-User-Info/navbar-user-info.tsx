import { FC, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Button } from "../../features/Button";
import { Link, useNavigate } from "react-router-dom";
import { themeBase } from "../../styles";
import { useSignoutMutation } from "../../store/auth.api";
import { userActions } from "../../store/user.slice";

export const NavbarUserInfo: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signOut] = useSignoutMutation();
  const user = useAppSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      const result = await signOut();
      if (result.data.success) {
        dispatch(userActions.resetUserState());
        navigate("/signin");
      }

      console.log(result.data.success, result.data.message);
    } catch (error) {}
  };

  return (
    <>
      {!user.username ? (
        <div className="flex gap-4">
          <Button name="Sign in" to="/signin" />
          <Button name="Sign up" to="/signup" />
        </div>
      ) : (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="man.png" alt="" />
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems
                className={`${themeBase} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md epy-1 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <MenuItem>
                  <div className="py-3 px-4">
                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                      {user.username}
                    </span>
                    <span className="block text-sm text-gray-900 truncate dark:text-white">
                      {user.email}
                    </span>
                  </div>
                </MenuItem>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <MenuItem>
                  <Link
                    to="/profiles"
                    className={
                      "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-white"
                    }
                  >
                    Your Profile
                  </Link>
                </MenuItem>

                <MenuItem>
                  <span
                    className={
                      "block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-white"
                    }
                    onClick={handleSignOut}
                  >
                    Sign out
                  </span>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      )}
    </>
  );
};
