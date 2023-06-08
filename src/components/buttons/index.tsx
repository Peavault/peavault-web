import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  autoPadding?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = ({
  variant = "primary",
  autoPadding = true,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        classNames(
          "text-base font-circular-std",
          autoPadding && "px-[30px] py-[16px] rounded-xl",
          variant === "primary" && "text-black bg-peavault-primary",
          variant === "secondary" &&
            "bg-transparent border border-peavault-primary text-peavault-primary",
          variant === "tertiary" && "text-peavault-primary p-0",
        ),
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
