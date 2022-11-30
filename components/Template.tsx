import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Template = () => {
  const { ref, inView } = useInView();

  const animations = [
    "animate-template1",
    "animate-template2",
    "animate-template3",
    "animate-template4",
    "animate-template5",
    "animate-template6",
  ];

  return (
    <section className="relative z-component">
      <div className="px-3 sm:px-6 lg:px-12 pt-12 pb-20 bg-blue overflow-hidden text-white z-component">
        <h2 className="text-h2 ">Template Collection</h2>
        <p className="text-p opacity-85 mb-8">Your Design. Your court.</p>
        <div className="flex" ref={ref}>
          {animations.map((e, index) => {
            return (
              <Image
                key={index}
                src={`/template/${index + 1}.jpg`}
                width={356}
                height={198}
                alt="template"
                className={`${index !== 0 && "-ml-48"} flex-1 ${
                  inView && e
                } drop-shadow-[-6px_6px_8px_rgba(0,0,0,0.25)] w-1`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Template;
