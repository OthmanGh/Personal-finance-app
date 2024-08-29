import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-primary-grey-900 text-white rounded-[8px] w-[303px] h-[53px]">
      {children}
    </button>
  );
};

export default Button;
