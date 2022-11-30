import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import BackgroundWrapper from "./backgroundWrapper";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <BackgroundWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </BackgroundWrapper>
  );
};

export default Layout;
