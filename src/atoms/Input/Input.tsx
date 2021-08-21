import React, { forwardRef } from "react";

import classes from "./input.module.css";

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, ...props }, ref) => {
  return (
    <div>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input className={classes.input} id={id} ref={ref} {...props} />
    </div>
  );
});

export default Input;
