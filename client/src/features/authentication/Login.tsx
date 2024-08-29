import { Link } from 'react-router-dom';
import { Button, GuestImage, HeaderGuestLayout, InputField, Label } from '../../constants';

const Login = () => {
  return (
    <div className="flex flex-col h-screen lg:h-full-screen lg:grid lg:grid-cols-3">
      <HeaderGuestLayout />

      <GuestImage />

      <form className="flex flex-col bg-white gap-400 rounded-[12px] w-[343px] sm:w-[560px] m-auto px-250 py-300 lg:col-span-2">
        <h2 className="text-preset-1 text-primary-grey-900 font-bold">Login</h2>

        <div className="flex flex-col gap-200">
          <fieldset>
            <Label htmlFor="email">Email</Label>
            <InputField id="email" type="email" />
          </fieldset>

          <fieldset>
            <Label htmlFor="password">Password</Label>
            <InputField id="password" type="password" isPassword={true} />
          </fieldset>
        </div>

        <Button type="submit">Create Account</Button>

        <p className="text-primary-grey-500 text-preset-4 text-center">
          Need to create an account?{' '}
          <Link to="/signup" className="underline text-primary-grey-900 font-bold cursor-pointer">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
