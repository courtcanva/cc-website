import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const BackgroundWrapper = ({ children }: Props) => {
  return (
    <div className="bg-background-500">
      <div className="min-w-[390px] max-w-7xl mx-auto overflow-hidden relative">
        <main>{children}</main>
        <div className="z-backgroundVector absolute w-[348px] h-[369px] left-70% top-12% md:top-14% md:left-85%">
          <Image src="/basketball.svg" alt="basketball vector" layout="fill" objectFit="contain" />
        </div>
        <div className="z-backgroundVector absolute w-[817px] h-[866px] rotate-85 right-47% top-20% md:top-30% md:-left-10%">
          <Image src="/basketball.svg" alt="basketball vector" layout="fill" objectFit="contain" />
        </div>
        <div className="z-backgroundVector absolute w-[449px] h-[449px] -right-47% top-47% md:top-56% md:-right-20%">
          <Image src="/tennis.svg" alt="tennis vector" layout="fill" objectFit="contain" />
        </div>
        <div className="z-backgroundVector absolute w-[407px] h-[432px] rotate-13 left-60% bottom-6% md:-bottom-2% md:left-65%">
          <Image src="/basketball.svg" alt="basketball vector" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundWrapper;
