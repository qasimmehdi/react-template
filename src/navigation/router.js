import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { isAuthenticated } from "../main/shared/helpers";
import RouteCustom from "./route-custom";
import routes, { authRoles } from "./route-config";

const fallbackUri = `${isAuthenticated() ? "" : "/login"}`;

const AppRouter = () => {
  const availableRoutes = routes.filter((route) => {
    return route.roles.includes(authRoles.user);
  });
  console.log(availableRoutes);
  return (
    <Router>
      {availableRoutes.map((route, index) => (
        <div>
          <Link key={index} to={route.path}>
            {route.name}
          </Link>
        </div>
      ))}
      <Switch>
        {availableRoutes.map((route, index) => (
          <RouteCustom
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            isProtected={route.isProtected}
          />
        ))}
        <Redirect to={fallbackUri} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
