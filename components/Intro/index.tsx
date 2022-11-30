import Image from "next/image";
import TextBox from "./TextBox";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const { ref, inView } = useInView();

  return (
    <div className="bg-black/30">
      <section
        className="relative z-component max-w-7xl mx-auto px-3 sm:px-8 lg:px-20 py-12 overflow-hidden text-white grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2.5 justify-items-center"
        ref={ref}
      >
        <Image
          src="/intro1.png"
          alt="basketball court"
          width={528}
          height={402}
          className={`${inView && "animate-introToRight1"}`}
        />
        <TextBox
          inView={inView}
          title="A Unique Basketball Court"
          text="Choose the size of court you need, change your favorite color scheme and personalize badges to customize your unique basketball court"
        />
        <Image
          src="/intro2.png"
          alt="tennis court"
          width={528}
          height={402}
          className={`${inView && "animate-introToLeft2"} md:order-last mt-3.5`}
        />
        <TextBox
          inView={inView}
          tennis={true}
          title="A Full Size Tennis Court"
          text="Change your favorite color scheme, set court ranges and get the full size tennis court that suits your best"
        />
      </section>
    </div>
  );
};

export default Intro;
