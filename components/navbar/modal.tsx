import React, { useEffect, useLayoutEffect, useState } from "react";

const useModal = () => {
  const [state, setState] = useState<boolean>(true);
  const open = () => setState(true);
  const close = () => setState(false);

  useLockBodyScroll();

  const resizeUpdate = (e: any) => {
    // 通过事件对象获取浏览器窗口的高度
    const h = e.target.innerWidth;
    console.log(h);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeUpdate);

    return () => window.removeEventListener("resize", resizeUpdate);
  });

  const modalContent = (
    <nav
      className={`${
        state ? "block" : "hidden"
      } fixed w-full min-w-[390px] h-screen left-0 top-0 flex justify-center items-center bg-background-500 opacity-85 tablet:hidden`}
    >
      {/* close button */}
      <div
        className="absolute right-[18px] top-[18px] cursor-pointer 
          before:absolute before:content[''] before:bg-white before:h-[23px] before:w-0.5 before:right-2 before:rotate-45
          after:absolute after:content[''] after:bg-white after:right-2 after:h-[23px] after:w-0.5 after:-rotate-45"
        onClick={close}
      ></div>
      <ul className="flex flex-col items-center text-h2 text-white gap-16">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Design</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
    </nav>
  );

  const Modal = () => {
    return modalContent;
  };

  return {
    open,
    Modal,
  };
};

export default useModal;

// prevent scolling
const useLockBodyScroll = () => {
  useLayoutEffect((): (() => void) => {
    // Get original body overflow
    const originalStyle: string = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
};
