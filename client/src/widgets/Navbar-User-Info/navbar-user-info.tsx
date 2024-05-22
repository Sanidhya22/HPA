import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useSignoutMutation } from '../../store/auth.api';
import { userActions } from '../../store/user.slice';
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';
import { dashboardActions } from '../../store/dashboard.slice';

const profileMenuItems = [
  {
    label: 'My Profile',
    icon: UserCircleIcon,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
];

export const NavbarUserInfo: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signOut] = useSignoutMutation();
  const user = useAppSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = (menu: string) => {
    if (menu === 'My Profile') {
      navigate('/profile');
    }
    if (menu === 'Sign Out') {
      handleSignOut();
    }
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    try {
      const result = await signOut();
      if (result.data.success) {
        navigate('/auth/signin');
        clearStore();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelButtonClick = (value: string) => {
    navigate(`/auth/${value}`);
  };

  const clearStore = () => {
    dispatch(userActions.resetUserState());
    dispatch(dashboardActions.resetDashboardData());
  };

  return (
    <>
      {!user.username ? (
        <div className="flex gap-4">
          <Button
            onClick={() => {
              handelButtonClick('signin');
            }}
            size="sm"
            variant="text"
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              handelButtonClick('signup');
            }}
            size="sm"
            variant="text"
          >
            Sign Up
          </Button>
        </div>
      ) : (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
            >
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-900 p-0.5"
                src={`/${user.avatar}.png`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            <div className="py-3 px-4">
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                {user.username}
              </span>
              <span className="block text-sm text-gray-900 truncate dark:text-white">
                {user.email}
              </span>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={() => {
                    closeMenu(label);
                  }}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                      : ''
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? 'red' : 'inherit'}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      )}
    </>
  );
};
