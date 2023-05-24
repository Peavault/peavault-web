import Image from "next/image";
import PeavaultLogo from "@/assets/images/peavault-logo.svg";
import MenuIcon from "@/assets/icons/menu-icon.svg";
import cn from "classnames";
import Link from "next/link";
import Button from "../buttons";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full py-14">
      <Link href="/">
        <div className="flex flex-row gap-2">
          <Image
            src={PeavaultLogo}
            alt="Peavault Logo"
            className={cn("lg:w-[50px] lg:h-[50px]", "w-[30px] h-[30px]")}
          />
          <h1 className="text-2xl lg:text-5xl text-peavault-primary font-oatmeal-sans">
            Peavault
          </h1>
        </div>
      </Link>
      <button className="block lg:hidden">
        <Image src={MenuIcon} alt="menu-icon" />
      </button>
      <div className="hidden lg:flex flex-row items-center justify-end gap-44">
        <div className="flex flex-row items-center gap-10">
          <Link href="/about">
            <p className="text-xl font-light font-oatmeal-sans">About</p>
          </Link>
          <Link href="/features">
            <p className="text-xl font-light font-oatmeal-sans">Features</p>
          </Link>
          <Link href="/pricing">
            <p className="text-xl font-light font-oatmeal-sans">Pricing</p>
          </Link>
          <Link href="/documentation">
            <p className="text-xl font-light font-oatmeal-sans">
              API Documentation
            </p>
          </Link>
        </div>
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;
