import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';
import { Layout } from '../widgets/Layout/layout';
import { ErrorElement } from '../pages/ErrorElement';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Watchlist } from '../pages/WatchLists';
import { Authentication } from '../features/Authentication';
import { Profile } from '../pages/Profile';
import { AppLoading } from '../features/AppLoading';
import { CLScanners } from '../pages/Chartlink-Scanners';
import { CLDashboards } from '../pages/Chartlink-Dashboards';
import { Videos } from '../pages/Videos';
import { ProtectedRoute } from '../features/ProtectedRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Layout />
      </>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <h1>Home Page Comming Soon</h1>,
      },
      {
        path: 'dashboard',
        element: (
          <Authentication>
            <ProtectedRoute condition={(user) => !user.isPremium}>
              <AppLoading />
            </ProtectedRoute>
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
            element: <Videos />,
          },
          {
            path: 'chartlink-scanners',
            element: <CLScanners />,
          },
          {
            path: 'chartlink-dashboard',
            element: <CLDashboards />,
          },
        ],
      },
      {
        path: 'blogs',
        element: <h1>Blogs Coming Soon...</h1>,
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
    element: (
      <ProtectedRoute condition={(user) => !!user.username}>
        <Outlet />
      </ProtectedRoute>
    ),
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
