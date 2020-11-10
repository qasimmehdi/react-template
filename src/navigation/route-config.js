import Login from "../main/pages/auth/login";
import Dashboard from "../main/pages/dashboard";
import Test from "../main/pages/dashboard/test";

export const authRoles = {
  admin: "ADMIN",
  user: "USER",
  guest: "GUEST",
};

const routes = [
  {
    name: "Dashboard",
    exact: true,
    path: "/",
    component: Dashboard,
    isProtected: true,
    roles: [authRoles.admin, authRoles.user],
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    isProtected: false,
    roles: []
  },
  {
    name: "Test",
    path: "/test",
    component: Test,
    isProtected: true,
    roles: [authRoles.admin],
  },
];

export default routes;
