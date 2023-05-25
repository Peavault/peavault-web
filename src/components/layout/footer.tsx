import Image from "next/image";
import PeavaultLogo from "@/assets/images/peavault-logo.svg";
import Link from "next/link";
import Button from "../buttons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 py-12 lg:py-8 w-full">
      <div className="flex flex-row items-center gap-2">
        <Image src={PeavaultLogo} alt="Peavault Logo" width={50} height={50} />
        <h1 className="text-4xl text-peavault-primary font-oatmeal-sans">
          Peavault
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <Link href={"/"}>Overview</Link>
        <Link href={"/features"}>Features</Link>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/help"}>Help</Link>
        <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
        <Link href={"/privacy"}>Privacy</Link>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:pt-8 mt-12 lg:border-t border-t-[#475467] w-full">
        <form className="flex flex-col lg:flex-row items-center gap-4 ">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-64 h-11 rounded-lg border border-[#D0D5DD] bg-white text-black placeholder-[#D0D5DD] px-4"
          />
          <Button
            autoPadding={false}
            className="w-28 h-11 rounded-[8px] text-black bg-peavault-primary"
          >
            Subscribe
          </Button>
        </form>
        <p className="text-[#D0D5DD]">© 2023 Peavault. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
