import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Layout } from '../widgets/Layout/layout';
import { ErrorElement } from '../pages/ErrorElement';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Watchlist } from '../pages/WatchLists';
import { Authentication } from '../features/Authentication';
import { Profile } from '../pages/Profile';
import { AppLoading } from '../features/AppLoading';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: 'dashboard',
        element: (
          <Authentication>
            <AppLoading />
          </Authentication>
        ),
        children: [
          {
            path: '',
            element: <Dashboard />,
          },
          {
            path: 'watchlists',
            element: <Watchlist />,
          },
          {
            path: 'videos',
            element: <Watchlist />,
          },
          {
            path: 'chartlink-scanners',
            element: <Watchlist />,
          },
          {
            path: 'chartlink-dashboard',
            element: <Watchlist />,
          },
        ],
      },
      {
        path: 'blogs',
        element: <h1>Coming Soon...</h1>,
      },
      {
        path: 'profile',
        element: (
          <Authentication>
            <Profile />
          </Authentication>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <Outlet />,
    children: [
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
]);
