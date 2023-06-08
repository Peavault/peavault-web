import Image from "next/image";
import AboutPeavault from "@/assets/images/about-peavault.png";
import PeavaultLogo from "@/assets/images/peavault-logo.svg";
import Link from "next/link";
import classNames from "classnames";
import SignupForm from "@/components/signup/signupForm";

export default function Signup() {
  return (
    <section className="flex flex-row h-full w-full">
      <div className="w-full lg:w-1/2 px-4 lg:px-8 h-full flex flex-col justify-between">
        <header className="h-[80px] lg:h-[100px] flex flex-row items-center">
          <Link href="/">
            <div className="flex flex-row gap-2">
              <Image
                src={PeavaultLogo}
                alt="Peavault Logo"
                className={classNames(
                  "lg:w-[45px] lg:h-[45px]",
                  "w-[30px] h-[30px]",
                )}
              />
              <h1 className="text-2xl lg:text-4xl text-peavault-primary font-oatmeal-sans">
                Peavault
              </h1>
            </div>
          </Link>
        </header>
        <div className="flex flex-col items-center justify-center">
          <SignupForm />
        </div>
        <footer className="h-[50px] flex flex-row items-center justify-between font-oatmeal-sans">
          <p>© Peavault 2023</p>
          <div className="flex flex-row items-center gap-1">
            <p>help@peavault.io</p>
          </div>
        </footer>
      </div>
      <div className="relative hidden lg:flex flex-row items-end w-1/2 h-full">
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-row items-end pt-12">
          <Image
            className="h-full object-contain overflow-visible"
            src={AboutPeavault}
            alt="about-peavault"
          />
        </div>
      </div>
    </section>
  );
}
