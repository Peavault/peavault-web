"use client";
import classNames from "classnames";
import React from "react";
import Image from "next/image";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import Button from "@/components/buttons";
import Link from "next/link";

const SigninForm = () => {
  return (
    <form className="w-[370px] flex flex-col items-center gap-8">
      <div className="w-full">
        <h3 className="font-oatmeal-sans text-3xl">Sign In</h3>
        <p className="font-circular-std">Login to your account.</p>
      </div>
      <section className="flex flex-col gap-3 w-full">
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
        </div>
      </section>
      <div className="w-full flex flex-col gap-2">
        <Button className="w-full rounded-lg font-medium">Login</Button>
        <button className="bg-white rounded-lg w-full flex flex-row items-center justify-center gap-2 h-12">
          <Image src={GoogleIcon} alt="peavault-logo" />
          <p className="font-semibold font-circular-std text-black">
            Sign In with Google
          </p>
        </button>
      </div>
      <Link href="/signup" className="text-[#475467] text-sm">
        Don&apos;t have an account?{" "}
        <span className="text-peavault-primary">Sign Up</span>
      </Link>
    </form>
  );
};

export default SigninForm;
