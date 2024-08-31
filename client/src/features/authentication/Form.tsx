import { Label, InputField, Button } from '../../constants';
import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';

type FormProps = {
  isSignup?: boolean;
};

const Form = ({ isSignup = false }: FormProps) => {
  const errorsStyles = 'text-secondary-red text-[12px] font-semibold';
  const { onSubmit, register, handleSubmit, errors, isSubmitting } = useRegister(isSignup);

  return (
    <form
      className="flex flex-col bg-white gap-400 rounded-[12px] w-[343px] sm:w-[560px] m-auto px-250 py-300 lg:col-span-2 drop-shadow-sm border-[1px] border-gray-200"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-preset-1 text-primary-grey-900 font-bold"> {isSignup ? 'Signup' : 'Login'}</h2>

      <div className="flex flex-col gap-200">
        {isSignup && (
          <fieldset>
            <Label htmlFor="name">Name</Label>
            <InputField id="name" type="text" register={register} />
            {errors.name && <span className={errorsStyles}>{errors.name?.message}</span>}
          </fieldset>
        )}

        <fieldset>
          <Label htmlFor="email">Email</Label>
          <InputField id="email" type="email" register={register} />
          {errors.email && <span className={errorsStyles}>{errors.email?.message}</span>}
        </fieldset>

        <fieldset>
          <Label htmlFor="password">Password</Label>
          <InputField id="password" type="password" isPassword={true} passwordTerms={isSignup ? true : false} register={register} />

          {errors.password && <span className={errorsStyles}>{errors.password?.message}</span>}
        </fieldset>

        {isSignup && (
          <fieldset>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <InputField id="confirmPassword" type="password" isPassword={true} passwordTerms={isSignup ? true : false} register={register} />

            {errors.confirmPassword && <span className={errorsStyles}>{errors.confirmPassword?.message}</span>}
          </fieldset>
        )}

        {errors.root && <span className={`${errorsStyles} text-center  text-[14px] mt-50`}>{errors.root?.message}</span>}
      </div>

      <Button type="submit" isSubmitting={isSubmitting}>
        {isSignup ? 'Create Account ' : 'Login'}
      </Button>

      <p className="text-primary-grey-500 text-preset-4 text-center">
        {isSignup ? 'Already have an account?' : 'Need to create an account?'}{' '}
        <Link
          to={isSignup ? '/login' : '/signup'}
          className="underline text-primary-grey-900 hover:text-primary-beige transition-all duration-300 font-bold cursor-pointer"
        >
          {isSignup ? 'Login' : 'Sign Up'}
        </Link>
      </p>
    </form>
  );
};

export default Form;
