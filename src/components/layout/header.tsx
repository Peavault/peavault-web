import Image from "next/image";
import PeavaultLogo from "@/assets/images/peavault-logo.svg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full pt-14">
      <div className="flex flex-row gap-2">
        <Image src={PeavaultLogo} alt="Peavault Logo" width={50} height={50} />
        <h1 className="text-5xl text-peavault-primary font-oatmeal-sans">
          Peavault
        </h1>
      </div>
      <div className="flex flex-row items-center justify-end gap-44">
        <div className="flex flex-row items-center gap-10">
          <h1 className="text-xl font-light font-oatmeal-sans">About</h1>
          <h1 className="text-xl font-light font-oatmeal-sans">Features</h1>
          <h1 className="text-xl font-light font-oatmeal-sans">Pricing</h1>
          <h1 className="text-xl font-light font-oatmeal-sans">
            API Documentation
          </h1>
        </div>
        <button className="text-base text-black font-circular-std rounded-xl bg-peavault-primary w-28 h-14">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
