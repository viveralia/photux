import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

import classes from "./login.module.css";
import { logIn } from "../../store/user";
import { Button, Input } from "../../atoms";
import { saveSessionToCache } from "../../utils";
import { useAppDispatch } from "../../hooks";

interface LogInFormValues {
  email: string;
  password: string;
}

const LogInPage: FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<LogInFormValues>();

  const onSubmit = async (data: LogInFormValues) => {
    dispatch(logIn({ email: data.email }));
    saveSessionToCache({ email: data.email });
  };

  return (
    <div className={classes.container}>
      <Helmet>
        <title>Log In | Photux</title>
      </Helmet>
      <div className={classes.innerContainer}>
        <header>
          <h1 className={classes.title}>🤳 Photux</h1>
          <h2 className={classes.subtitle}>The photo app made with redux toolkit</h2>
        </header>
        <p className={classes.text}>Try logging in using any credentials</p>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            placeholder="e.g. johndoe@email.com"
            required
            type="email"
            id="email"
            {...register("email")}
          />
          <Input
            label="Password"
            placeholder="******"
            required
            type="password"
            id="password"
            {...register("password")}
          />
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
