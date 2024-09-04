import { ReactNode } from 'react';

type HeaderDefaultLayoutProps = {
  children: ReactNode;
};

const HeaderDefaultLayout = ({ children }: HeaderDefaultLayoutProps) => {
  return <h2 className="w-full text-preset-1 text-primary-grey-900 font-bold">{children}</h2>;
};

export default HeaderDefaultLayout;
