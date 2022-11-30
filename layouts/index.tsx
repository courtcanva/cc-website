import { ReactNode } from "react";
import Image from "next/image";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-background-500">
      <div className="min-w-[390px] max-w-7xl mx-auto overflow-hidden relative">
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="absolute w-[348px] h-[369px] z-backgroundVector left-70% top-[510px] tablet:top-[410px] tablet:left-80%">
          <Image src="/basketball.svg" alt="basketball vector" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute w-[817px] h-[866px] z-backgroundVector left-70% top-[510px] tablet:top-[910px] tablet:-left-5%">
          <Image src="/basketball.svg" alt="basketball vector" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
