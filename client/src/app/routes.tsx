import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../widgets/Layout/layout';
import { ErrorElement } from '../pages/ErrorElement';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Watchlist } from '../pages/WatchLists';
import { Authentication } from '../features/Authentication';

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
            <Dashboard />
          </Authentication>
        ),
      },
      {
        path: 'dashboard/watchlists',
        element: (
          <Authentication>
            <Watchlist />
          </Authentication>
        ),
      },
      {
        path: 'dashboard/videos',
        element: (
          <Authentication>
            <Watchlist />
          </Authentication>
        ),
      },
      {
        path: 'blogs',
        element: <h1>Coming Soon...</h1>,
      },
      {
        path: 'profile',
        element: <h1>Coming Soon...</h1>,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);
