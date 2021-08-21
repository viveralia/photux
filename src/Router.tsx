import React, { FC, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { LogInPage, PhotosPage } from "./pages";
import { recoverSessionFromCache } from "./utils";
import { logIn } from "./store/user";
import { useAppDispatch, useAppSelector } from "./hooks";

const PublicRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/login" component={LogInPage} />
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

const PrivateRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/photos" component={PhotosPage} />
      <Redirect from="/" to="/photos" />
    </Switch>
  );
};

const Router: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    const user = recoverSessionFromCache();
    if (!user) return;
    dispatch(logIn(user));
  }, []);

  const Routes = !user ? PublicRoutes : PrivateRoutes;

  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
