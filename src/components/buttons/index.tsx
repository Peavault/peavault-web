import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        props.className,
        "text-base font-circular-std rounded-xl px-[30px] py-[16px]",
        variant === "primary" && "text-black bg-peavault-primary",
        variant === "secondary" &&
          "bg-transparent border border-peavault-primary text-peavault-primary",
        variant === "tertiary" && "text-peavault-primary p-0",
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
