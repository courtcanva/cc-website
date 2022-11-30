import Image from "next/image";

type Props = {
  open: () => void;
};

const NavBar = ({ open }: Props) => {
  return (
    <>
      <nav className="bg-background-300 px-3 py-4 tablet:px-8 desktop:px-12 flex flex-row justify-between items-center">
        {/* logo and logo text */}
        <div className="flex flex-row gap-2 items-center">
          <div className="relative w-8 h-8 tablet:w-9 tablet:h-9">
            <Image src="/cc-logo.svg" alt="court canva logo" layout="fill" objectFit="contain" />
          </div>
          <p className="text-p tablet:text-logoText tablet:font-light text-typography-500">
            CourtCanva
          </p>
        </div>
        {/* nav bar content */}
        <ul className="hidden text-p text-white w-[233px] h-6 tablet:flex tablet:justify-between tablet:items-center">
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
        <a href="#" className="hidden tablet:block btn-primary">
          Create a design
        </a>
        {/* sandwich menu button */}
        <div
          className="w-4 h-3 cursor-pointer flex flex-col justify-between tablet:hidden"
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
