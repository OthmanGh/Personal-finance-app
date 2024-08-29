import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout, GuestLayout, Login, PageNotFound, Signup } from '../constants';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <GuestLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

export default router;
