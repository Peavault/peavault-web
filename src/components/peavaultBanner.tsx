import React from "react";
import Image from "next/image";
import PeavaultSlashBlack from "@/assets/images/peavault-slash-black.svg";
import BannerPerson from "@/assets/images/banner-person.png";
import TwitterIcon from "@/assets/icons/twitter-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import GithubIcon from "@/assets/icons/github-icon.svg";
import BehanceIcon from "@/assets/icons/behance-icon.svg";

const PeavaultBanner = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-end my-20 lg:my-32 rounded-3xl bg-peavault-primary w-full lg:aspect-[2]">
      <div className="lg:absolute -left-10 bottom-0 w-full lg:w-[55%] h-auto">
        <div className="w-full h-full">
          <Image
            className="w-full h-full"
            src={BannerPerson}
            alt="person holding a phone and smiling"
          />
        </div>
      </div>
      <div className="flex flex-col py-9 gap-16 lg:gap-0 lg:pt-0 lg:w-3/5 h-full">
        <div className="flex flex-col items-center justify-center lg:h-5/6 w-full text-black">
          <h1 className="text-3xl lg:text-5xl lg:w-full w-[260px] font-normal font-oatmeal-sans text-center">
            Never Buy Or Sell Online Without Using
          </h1>
          <div className="flex flex-col gap-2 w-min">
            <p className="text-6xl lg:text-7xl font-oatmeal-sans text-center text-black">
              Peavault
            </p>
            <Image
              className="w-full"
              src={PeavaultSlashBlack}
              alt="peavault-slash-black"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-1/6 w-full">
          <div className="flex flex-row gap-11 items-center">
            <Image src={TwitterIcon} alt="twitter-icon" />
            <Image src={LinkedInIcon} alt="linkedin-icon" />
            <Image src={FacebookIcon} alt="facebook-icon" />
            <Image src={GithubIcon} alt="github-icon" />
            <Image src={BehanceIcon} alt="behance-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeavaultBanner;
