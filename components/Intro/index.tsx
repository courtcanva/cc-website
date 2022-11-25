import Image from "next/image";
import TextBox from "./TextBox";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const { ref, inView } = useInView();

  return (
    <section
      className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-20 py-12 bg-black/30 overflow-hidden text-white grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 justify-items-center"
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
        title="basketball"
        text="Design your dream basketball.Design your dream basketball.Design your dream basketball.Design your dream basketball.Design your dream basketball."
      />
      <Image
        src="/intro2.png"
        alt="tennis court"
        width={528}
        height={402}
        className={`${inView && "animate-introToLeft2"} md:order-last`}
      />
      <TextBox
        inView={inView}
        title="tennis"
        text="Design your dream basketball.Design your dream basketball.Design your dream basketball.Design your dream basketball.Design your dream basketball."
      />
    </section>
  );
};

export default Intro;
