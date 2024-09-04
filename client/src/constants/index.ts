import DefaultLayout from '../components/DefaultLayout';
import GuestLayout from '../components/GuestLayout';
import Overview from '../pages/Overview';
import Budgets from '../pages/Budgets';
import Transactions from '../pages/Transactions';
import Pots from '../pages/Pots';
import BudgetsOverview from '../features/overview/BudgetsOverview';
import RecurringBills from '../pages/RecurringBills';
import RecurringBillsOverview from '../features/overview/RecurringBillsOverview';
import MinimizeMenu from '../ui/MinimizeMenu';
import MinimizeSidebar from '../ui/MinimizeSidebar';
import TransactionsHeader from '../ui/TransactionsHeader';
import authSlice from '../features/authentication/authSlice';
import Login from '../features/authentication/Login';
import Signup from '../features/authentication/Signup';
import PageNotFound from '../pages/PageNotFound';
import router from '../router/router';
import SearchTransaction from '../features/transactions/SearchTransaction';
import MobileFilterSortComp from '../features/transactions/MobileFilterSortComp';
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
import smallLogo from '../assets/images/logo-small.svg';
import vector from '../assets/images/Vector.svg';
import HeaderDefaultLayout from '../ui/HeaderDefaultLayout';
import MoneyCard from '../ui/MoneyCard';
import OverviewContentLayout from '../ui/OverviewContentLayout';
import CardsOverviewContainer from '../ui/CardsOverviewContainer';
import PotsOverview from '../features/overview/PotsOverview';
import iconCaretRight from '../assets/images/icon-caret-right.svg';
import iconPot from '../assets/images/icon-pot.svg';
import TransactionsOverview from '../features/overview/TransactionsOverview';
import UsersTransactionsContainer from '../features/overview/UsersTransactionsContainer';
import TransactionsTable from '../features/transactions/TransactionsTable';
import iconFilter from '../assets/images/icon-filter-mobile.svg';
import iconSort from '../assets/images/icon-sort-mobile.svg';
import iconSearch from '../assets/images/icon-search.svg';
import iconCaretDown from '../assets/images/icon-caret-down.svg';
import FilterDropdownComp from '../components/FilterDropdownComp';
import TransactionsBody from '../features/transactions/TransactionsBody';
import TransactionItem from '../ui/TransactionItem';
import iconCaretLeft from '../assets/images/icon-caret-left.svg';
import PaginationButton from '../features/transactions/PaginationButton';
import PaginationList from '../features/transactions/PaginationList';
import BillsStats from '../features/RecurringBills/BillsStats';
import BillsSummary from '../ui/BillsSummary';
import iconBills from '../assets/images/icon-recurring-bills.svg';
import TotalBillsCard from '../ui/TotalBillsCard';
import BillItem from '../ui/BillItem';
import SearchBill from '../features/RecurringBills/SearchBill';
import BillsTable from '../features/RecurringBills/BillsTable';
import Pot from '../features/Pots/Pot';
import PotsContainer from '../features/Pots/PotsContainer';
import iconEllipsis from '../assets/images/icon-ellipsis.svg';
import { formatDate } from '../utils/helper';

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

const secondaryColors = {
  green: 'border-secondary-green',
  yellow: 'border-secondary-yellow',
  cyan: 'border-secondary-cyan',
  navy: 'border-secondary-navy',
  red: 'border-secondary-red',
  purple: 'border-secondary-purple',
  'purple-light': 'border-secondary-purple-light',
  turquoise: 'border-secondary-turquoise',
  brown: 'border-secondary-brown',
  magenta: 'border-secondary-magenta',
  blue: 'border-secondary-blue',
  'navy-grey': 'border-secondary-navy-grey',
  'army-green': 'border-secondary-army-green',
  gold: 'border-secondary-gold',
  orange: 'border-secondary-orange',
};

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
  BillsSummary,
  TotalBillsCard,
  api,
  Overview,
  sidebarContent,
  Sidebar,
  Budgets,
  Transactions,
  RecurringBills,
  Pots,
  iconsMinimizeMenu,
  MinimizeSidebar,
  MinimizeMenu,
  smallLogo,
  vector,
  HeaderDefaultLayout,
  MoneyCard,
  OverviewContentLayout,
  CardsOverviewContainer,
  PotsOverview,
  iconCaretRight,
  iconPot,
  secondaryColors,
  TransactionsOverview,
  UsersTransactionsContainer,
  formatDate,
  RecurringBillsOverview,
  BudgetsOverview,
  TransactionsTable,
  iconFilter,
  iconSort,
  iconSearch,
  TransactionsHeader,
  SearchTransaction,
  MobileFilterSortComp,
  iconCaretDown,
  FilterDropdownComp,
  TransactionsBody,
  TransactionItem,
  iconCaretLeft,
  PaginationButton,
  PaginationList,
  BillsStats,
  iconBills,
  BillItem,
  SearchBill,
  BillsTable,
  Pot,
  PotsContainer,
  iconEllipsis,
};
