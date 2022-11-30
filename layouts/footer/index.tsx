import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-background-400">
      <footer className="relative z-component py-9 px-3 md:py-12 md:px-6 desktop:p-12 flex flex-col gap-8 text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="p-2.5 flex flex-col gap-2.5 items-center md:items-start md:flex-1">
            <h4 className="text-h4">SERVICES</h4>
            <div className="text-p text-typography-400 flex flex-col gap-2.5 items-center md:items-start">
              <a href="#" className="block">
                Design
              </a>
            </div>
          </div>
          <div className="p-2.5 flex flex-col gap-2.5 items-center md:items-start md:flex-1">
            <h4 className="text-h4">COMPANY</h4>
            <div className="text-p text-typography-400 flex flex-col gap-2.5 items-center md:items-start">
              <a href="#" className="block">
                About us
              </a>
              <a href="#" className="block">
                Contact
              </a>
            </div>
          </div>
          <div className="p-2.5 flex flex-col gap-2.5 items-center md:items-start md:flex-1">
            <h4 className="text-h4">LEGAL</h4>
            <div className="text-p text-typography-400 flex flex-col gap-2.5 items-center md:items-start">
              <a href="#" className="block">
                Terms of use
              </a>
              <a href="#" className="block">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center md:flex-row">
          <Image src="/cc-logo.svg" alt="court canva logo" width={64} height={64} />
          <div className="text-typography-400 flex flex-col gap-2 items-center md:items-start">
            <p className="text-p">CourtCanva Pty Ltd.</p>
            <p className="text-p">Copyright c 2022 - All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
