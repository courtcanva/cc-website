import Image from "next/image";

type Props = {
  open: () => void;
};

const NavBar = ({ open }: Props) => {
  return (
    <>
      <nav className="bg-background-300 px-3 py-4 tablet:px-4 tablet:py-8 flex flex-row justify-between items-center">
        {/* logo and logo text */}
        <div className="flex flex-row gap-2 items-center">
          <div className="relative w-4 h-4 tablet:w-6 tablet:h-6">
            <Image src="/cc-logo.svg" alt="court canva logo" layout="fill" objectFit="contain" />
          </div>
          <p className="text-p tablet:text-logoText text-typography-500">CourtCanva</p>
        </div>
        {/* nav bar content */}
        <ul className="hidden tablet:block text-p text-white w-[233px] h-6 tablet:flex tablet:justify-between tablet:items-center">
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
        {/* create a design button */}
        <a
          href="#"
          className="hidden tablet:block bg-pink px-6 py-1.5 rounded-md font-semibold text-typography-500 text-sm"
        >
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