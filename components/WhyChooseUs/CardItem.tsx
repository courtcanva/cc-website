import React from "react";
import ReasonDetails from "./ReasonDetails";
import { useInView } from "react-intersection-observer";

interface Props {
  styles: any;
  contents: any;
}

const CardItem = ({ styles, contents }: Props) => {
  const { ref, inView } = useInView();
  const animation = inView ? styles.animation : "";

  return (
    <div className="w-full " ref={ref}>
      <div
        className={`w-full flex flex-col items-center mt-4 md:mt-8  relative ${animation} md:animate-none`}
      >
        <h4 className={`${styles.titleGradient} gradient-title`}>{contents.title}</h4>
        <div className={`${styles.borderGradient} gradient-container`}>
          <h4 className="text-xl md:text-base lg:text-xl font-light pt-[54px] pb-4 leading-[1.3] tracking-[.02em] md:max-w-[90%]">
            {contents.heading}
          </h4>
          {contents.details.map((detailItem: string, index: number) => (
            <ReasonDetails key={index} gradient={styles.titleGradient} details={detailItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
