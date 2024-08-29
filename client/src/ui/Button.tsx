import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
};

const Button = ({ children, type = 'button', onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className="bg-primary-grey-900 text-white rounded-[8px] w-[303px] h-[53px]">
      {children}
    </button>
  );
};

export default Button;
