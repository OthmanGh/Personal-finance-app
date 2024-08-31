import authSlice from '../features/authentication/authSlice';
import DefaultLayout from '../components/DefaultLayout';
import GuestLayout from '../components/GuestLayout';
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
};
