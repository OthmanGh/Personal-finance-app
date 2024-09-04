import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  isSubmitting?: boolean;
  onClick?: () => void;
};

const Button = ({ children, type = 'button', isSubmitting, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isSubmitting}
      className="bg-primary-grey-900 p-200 font-bold transition-all duration-300 text-preset-4 text-white border-2 border-primary-grey-900 rounded-[8px] hover:bg-primary-grey-500 hover:border-primary-grey-500 disabled:bg-primary-beige disabled:border-primary-beige min-w-fit"
    >
      {isSubmitting ? 'Loading...' : children}
    </button>
  );
};

export default Button;
