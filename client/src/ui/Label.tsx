import { ReactNode } from 'react';

type labelProps = {
  children: ReactNode;
  htmlFor: string;
};

const Label = ({ children, htmlFor }: labelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-preset-5 text-primary-grey-500 font-bold block mb-50">
      {children}
    </label>
  );
};

export default Label;
