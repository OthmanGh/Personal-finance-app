import { Link } from 'react-router-dom';
import { authIllustration, Button, HeaderGuestLayout, InputField, Label } from '../../constants';

const Signup = () => {
  return (
    <div className="flex flex-col h-screen">
      <img src={authIllustration} className="hidden" alt="illustration" />

      <HeaderGuestLayout />

      <form className="flex flex-col bg-white gap-400 rounded-[12px] m-auto  w-[343px] px-250 py-300">
        <h2 className="text-preset-1 text-primary-grey-900 font-bold">Signup</h2>

        <div className="flex flex-col gap-200">
          <fieldset>
            <Label htmlFor="name">Name</Label>
            <InputField id="name" type="text" />
          </fieldset>

          <fieldset>
            <Label htmlFor="email">Email</Label>
            <InputField id="email" type="email" />
          </fieldset>

          <fieldset>
            <Label htmlFor="password">Password</Label>
            <InputField id="password" type="password" isPassword={true} passwordTerms={true} />
          </fieldset>
        </div>

        <Button type="submit">Create Account</Button>

        <p className="text-primary-grey-500 text-preset-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="underline text-primary-grey-900 font-bold cursor-pointer">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
