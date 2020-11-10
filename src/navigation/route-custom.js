import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isAuthenticated } from '../main/shared/helpers';

const RouteCustom = ({ isProtected, exact, component, path }) => {
  if (!isAuthenticated() && isProtected) {
    return <Redirect to="/login" />;
  }

  if (isAuthenticated() && !isProtected) {
    return <Redirect to="" />;
  }

  return <Route exact={exact} component={component} path={path} />;
};

export default RouteCustom;

