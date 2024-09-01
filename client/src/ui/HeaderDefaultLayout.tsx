import { ReactNode } from 'react';

type HeaderDefaultLayoutProps = {
  children: ReactNode;
};

const HeaderDefaultLayout = ({ children }: HeaderDefaultLayoutProps) => {
  return <h2 className="w-full">{children}</h2>;
};

export default HeaderDefaultLayout;
