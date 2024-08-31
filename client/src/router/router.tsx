import { createBrowserRouter } from 'react-router-dom';
import { Budgets, DefaultLayout, GuestLayout, Login, Overview, PageNotFound, Pots, RecurringBills, Signup, Transactions } from '../constants';

const router = createBrowserRouter([
  {
    path: '/',
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
    children: [
      {
        path: 'overview',
        element: <Overview />,
      },

      {
        path: 'transactions',
        element: <Transactions />,
      },

      {
        path: 'budgets',
        element: <Budgets />,
      },

      {
        path: 'pots',
        element: <Pots />,
      },

      {
        path: 'recurring-bills',
        element: <RecurringBills />,
      },
    ],
  },

  {
    path: '*',
    element: <PageNotFound />,
  },
]);

export default router;
