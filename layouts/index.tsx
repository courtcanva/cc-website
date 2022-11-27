import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-w-[390px] max-w-7xl mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
