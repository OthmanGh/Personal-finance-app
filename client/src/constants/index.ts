import DefaultLayout from '../components/DefaultLayout';
import GuestLayout from '../components/GuestLayout';
import Overview from '../pages/Overview';
import Budgets from '../pages/Budgets';
import Transactions from '../pages/Transactions';
import Pots from '../pages/Pots';
import RecurringBills from '../pages/RecurringBills';

import authSlice from '../features/authentication/authSlice';
import Login from '../features/authentication/Login';
import Signup from '../features/authentication/Signup';
import PageNotFound from '../pages/PageNotFound';
import router from '../router/router';
import store from '../redux/store';
import authIllustration from '../assets/images/illustration-authentication.svg';
import logo from '../assets/images/logo-large.svg';
import HeaderGuestLayout from '../ui/HeaderGuestLayout';
import showPasswordIcon from '../assets/images/icon-show-password.svg';
import hidePasswordIcon from '../assets/images/icon-hide-password.svg';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import GuestImage from '../ui/GuestImage';
import { signupSchema, loginSchema } from '../utils/types';
import api from '../services/api';
import Sidebar from '../ui/Sidebar';
import iconNavOverview from '../assets/images/icon-nav-overview.svg';
import iconNavTransactions from '../assets/images/icon-nav-transactions.svg';
import iconNavBudgets from '../assets/images/icon-nav-budgets.svg';
import iconNavPots from '../assets/images/icon-nav-pots.svg';
import iconNavRecurringBills from '../assets/images/icon-nav-recurring-bills.svg';
import iconsMinimizeMenu from '../assets/images/icon-minimize-menu.svg';

const sidebarContent = [
  {
    id: 1,
    text: 'Overview',
    src: iconNavOverview,
    to: 'overview',
  },

  {
    id: 2,
    text: 'Transactions',
    src: iconNavTransactions,
    to: 'transactions',
  },

  {
    id: 3,
    text: 'Budgets',
    src: iconNavBudgets,
    to: 'budgets',
  },

  {
    id: 4,
    text: 'Pots',
    src: iconNavPots,
    to: 'pots',
  },

  {
    id: 5,
    text: 'Recurring Bills',
    src: iconNavRecurringBills,
    to: 'recurring-bills',
  },
];

export {
  router,
  authSlice,
  GuestLayout,
  DefaultLayout,
  Login,
  Signup,
  PageNotFound,
  store,
  authIllustration,
  logo,
  HeaderGuestLayout,
  Button,
  showPasswordIcon,
  hidePasswordIcon,
  Input,
  Label,
  InputField,
  GuestImage,
  signupSchema,
  loginSchema,
  api,
  Overview,
  sidebarContent,
  Sidebar,
  Budgets,
  Transactions,
  RecurringBills,
  Pots,
  iconsMinimizeMenu,
};
