import Image from "next/image";
import { designUrl } from "../../constants";

type Props = {
  open: () => void;
  state: boolean;
};

const NavBar = ({ open, state }: Props) => {
  return (
    <>
      <nav className="bg-background-300 px-3 py-4 md:px-8 desktop:px-12 flex flex-row justify-between items-center z-component">
        {/* logo and logo text */}
        <div className="flex flex-row gap-2 items-center">
          <div className="relative w-8 h-8 md:w-9 md:h-9">
            <Image src="/cc-logo.svg" alt="court canva logo" layout="fill" objectFit="contain" />
          </div>
          <p className="text-p md:text-logoText md:font-light text-typography-500">CourtCanva</p>
        </div>
        {/* nav bar content */}
        <ul className="hidden text-p text-white w-[233px] h-6 md:flex md:justify-between md:items-center">
          <li className="nav-menu-hover">
            <a href="#">Home</a>
          </li>
          <li className="nav-menu-hover">
            <a href="#">Design</a>
          </li>
          <li className="nav-menu-hover">
            <a href="#">About us</a>
          </li>
        </ul>
        {/* create a design button */}
        <a href={designUrl} className="hidden md:block btn-primary">
          Create a design
        </a>
        {/* sandwich menu button */}
        <div
          className={`w-4 h-3 cursor-pointer flex flex-col justify-between md:hidden ${
            state && "hidden"
          }`}
          onClick={open}
        >
          <span className="h-0.5 w-full bg-typography-500 block"></span>
          <span className="h-0.5 w-full bg-typography-500 block"></span>
          <span className="h-0.5 w-full bg-typography-500 block"></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
