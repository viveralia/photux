import React, { FC } from "react";
import clsx from "clsx";

import classes from "./button.module.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md";
}

const Button: FC<ButtonProps> = ({ size = "md", ...props }) => {
  return <button className={clsx(classes.button, classes[size])} {...props} />;
};

export default Button;
