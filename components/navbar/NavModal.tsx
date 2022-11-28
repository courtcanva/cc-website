import React, { useLayoutEffect, useState } from "react";

type Props = {
  close: () => void;
};

const NavModal = ({ close }: Props) => {
  // const [isShowing, setIsShowing] = useState<boolean>(true);

  // prevent scolling
  useLockBodyScroll();

  // animate-navModalFadeIn
  const content = (
    <nav
      className={`z-top bg-background-500 fixed w-full min-w-[390px] h-screen left-0 top-0 opacity-85
        flex justify-center items-center
        tablet:hidden`}
    >
      {/* close button */}
      <div
        className="absolute right-[18px] top-[18px] cursor-pointer 
          before:absolute before:content[''] before:bg-typography-500 before:h-[23px] before:w-0.5 before:right-2 before:rotate-45
          after:absolute after:content[''] after:bg-typography-500 after:right-2 after:h-[23px] after:w-0.5 after:-rotate-45"
        onClick={close}
      ></div>
      {/* nav items */}
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

  return content;
};

export default NavModal;

/**
 * helper function for prevent scrolling in body
 */
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
