import { GuestImage, HeaderGuestLayout } from '../../constants';
import Form from './Form';

const Signup = () => {
  return (
    <div className="flex flex-col h-screen lg:h-full-screen lg:grid lg:grid-cols-3">
      <HeaderGuestLayout />
      <GuestImage />
      <Form isSignup={true} />
    </div>
  );
};

export default Signup;
