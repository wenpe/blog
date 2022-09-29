import { ReactElement } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
