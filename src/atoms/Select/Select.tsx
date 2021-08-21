import React, { FC } from "react";

import classes from "./select.module.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: Option[];
}

const Select: FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select className={classes.select} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
