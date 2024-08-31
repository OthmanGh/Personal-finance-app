import { ReactNode } from 'react';

type HeaderDefaultLayoutProps = {
  children: ReactNode;
};

const HeaderDefaultLayout = ({ children }: HeaderDefaultLayoutProps) => {
  return <h2>{children}</h2>;
};

export default HeaderDefaultLayout;
