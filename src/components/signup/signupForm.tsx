"use client";
import classNames from "classnames";
import React from "react";
import Image from "next/image";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import Button from "@/components/buttons";
import Link from "next/link";

const SignupForm = () => {
  return (
    <form className="w-[370px] flex flex-col items-center gap-5">
      <div className="w-full">
        <h3 className="font-oatmeal-sans text-3xl">Sign up</h3>
        <p className="font-circular-std">Start your free trial.</p>
      </div>
      <section className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="name"
            className="font-circular-std text-sm text-[#CACACA]"
          >
            Name*
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className={classNames(
              "outline outline-[#D0D5DD] rounded-lg w-full h-12 bg-black px-4",
              "focus:outline-2",
            )}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="email"
            className="font-circular-std text-sm text-[#CACACA]"
          >
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={classNames(
              "outline outline-[#D0D5DD] rounded-lg w-full h-12 bg-black px-4",
              "focus:outline-2",
            )}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="password"
            className="font-circular-std text-sm text-[#CACACA]"
          >
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className={classNames(
              "outline outline-[#D0D5DD] rounded-lg w-full h-12 bg-black px-4",
              "focus:outline-2",
            )}
          />
          <p className="text-[#475467] text-sm">
            Must be at least 8 characters.
          </p>
        </div>
      </section>
      <div className="w-full flex flex-col gap-2">
        <Button className="w-full rounded-lg font-medium">Get Started</Button>
        <button className="bg-white rounded-lg w-full flex flex-row items-center justify-center gap-2 h-12">
          <Image src={GoogleIcon} alt="peavault-logo" />
          <p className="font-semibold font-circular-std text-black">
            Sign up with Google
          </p>
        </button>
      </div>
      <Link href="/login" className="text-[#475467] text-sm">
        Already have an account?{" "}
        <span className="text-peavault-primary">Sign In</span>
      </Link>
    </form>
  );
};

export default SignupForm;
