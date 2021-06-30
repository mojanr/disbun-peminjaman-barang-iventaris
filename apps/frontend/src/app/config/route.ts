import { RouteConfig } from "react-router-config";
import Login from "../pages/login";
import AppRoot from "../app.root";
import Dashboard from "../pages/dashboard";
import Peminjaman from "../pages/peminjaman";
import Main from "../pages/main";
import User from "../pages/user";
import Role from "../pages/role";
import Pegawai from "../pages/pegawai";
import NotFound404 from "../pages/404";
import Pengemudi from "../pages/pengemudi";

export const ROUTE: RouteConfig = {
  component: AppRoot,
  routes: [
    // {
    //   path: '/',
    //   exact: true,
    //   component: PublicPage
    // },
    // {
    //   path: '/auth/login',
    //   exact: true,
    //   component: LoginPage
    // },
    // {
    //   path: '/auth/password/forget',
    //   exact: true,
    //   component: PasswordForgetPage
    // },
    // {
    //   path: '/auth/register',
    //   exact: true,
    //   component: RegisterPage
    // },
    {
      path: '/dashboard',
      exact: false,
      component: Dashboard,
      routes: [
        {
          path: '/dashboard/main',
          exact: true,
          component: Main
        },
        // {
        //   path: '/dashboard/user',
        //   exact: true,
        //   component: User
        // },
        {
          path: '/dashboard/pengemudi',
          exact: true,
          component: Pengemudi
        },
        {
          path: '/dashboard/role',
          exact: true,
          component: Role
        },
        {
          path: '/dashboard/pegawai',
          exact: true,
          component: Pegawai
        },
        {
          path: '/dashboard/peminjaman',
          exact: true,
          component: Peminjaman
        },
      ]
    },
    {
      path: '/',
      exact: true,
      component: Login
    },
    {
      path: '*',
      // exact: true,
      component: NotFound404
    },
  ]
}