"use client";
import Image from "next/image";
import PeavaultLogo from "@/assets/images/peavault-logo.svg";
import MenuIcon from "@/assets/icons/menu-icon.svg";
import cn from "classnames";
import Link from "next/link";
import Button from "../buttons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "API Documentation",
    href: "/documentation",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex flex-row justify-between items-center w-full h-28">
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
      <button onClick={() => setIsOpen(true)} className="block xl:hidden">
        <Image src={MenuIcon} alt="menu-icon" />
      </button>
      <div className="hidden xl:flex flex-row items-center justify-end gap-44">
        <div className="flex flex-row items-center gap-10">
          {links.map((link, i) => (
            <Link key={i} href={link.href}>
              <p className="text-xl font-light font-oatmeal-sans">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ right: -324 }}
            animate={{ right: isOpen ? -16 : -324 }}
            exit={{ right: -324 }}
            className="xl:hidden fixed top-0 h-screen w-[300px] border-l border-peavault-primary/25 bg-black z-50"
          >
            <div className="h-28 w-full flex flex-col justify-center items-end pr-8">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-10 h-10"
              >
                <Image src={MenuIcon} alt="menu-icon" />
              </button>
            </div>
            <div className="flex flex-col gap-8 items-center text-xl uppercase text-white font-semibold">
              {links.map((link, i) => (
                <Link key={i} onClick={() => setIsOpen(false)} href={link.href}>
                  <p className="text-xl font-light font-oatmeal-sans">
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
