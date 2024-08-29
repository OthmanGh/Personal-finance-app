import { Label, InputField, Button } from '../../constants';
import { Link } from 'react-router-dom';

type FormProps = {
  isSignup?: boolean;
};

const Form = ({ isSignup = false }: FormProps) => {
  return (
    <form className="flex flex-col bg-white gap-400 rounded-[12px] w-[343px] sm:w-[560px] m-auto px-250 py-300 lg:col-span-2">
      <h2 className="text-preset-1 text-primary-grey-900 font-bold"> {isSignup ? 'Signup' : 'Login'}</h2>

      <div className="flex flex-col gap-200">
        {isSignup && (
          <fieldset>
            <Label htmlFor="name">Name</Label>
            <InputField id="name" type="text" />
          </fieldset>
        )}

        <fieldset>
          <Label htmlFor="email">Email</Label>
          <InputField id="email" type="email" />
        </fieldset>

        <fieldset>
          <Label htmlFor="password">Password</Label>
          <InputField id="password" type="password" isPassword={true} passwordTerms={isSignup ? true : false} />
        </fieldset>
      </div>

      <Button type="submit">Create Account</Button>

      <p className="text-primary-grey-500 text-preset-4 text-center">
        {isSignup ? 'Already have an account?' : 'Need to create an account?'}{' '}
        <Link to={isSignup ? '/login' : '/signup'} className="underline text-primary-grey-900 font-bold cursor-pointer">
          {isSignup ? 'Login' : 'Sign Up'}
        </Link>
      </p>
    </form>
  );
};

export default Form;
