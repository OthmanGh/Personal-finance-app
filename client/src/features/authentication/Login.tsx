import { GuestImage, HeaderGuestLayout } from '../../constants';
import Form from './Form';

const Login = () => {
  return (
    <div className="flex flex-col h-screen lg:h-full-screen lg:grid lg:grid-cols-3">
      <HeaderGuestLayout />
      <GuestImage />
      <Form />
    </div>
  );
};

export default Login;
