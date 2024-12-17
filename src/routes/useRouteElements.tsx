import { Outlet, useRoutes } from "react-router-dom";
import { PATH } from "./path";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import LoginPage from "../modules/auth/Login/LoginPage";
import RegisterPage from "../modules/auth/Register/RegisterPage";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../modules/home/HomePage";
import { AdminLayout } from "../layout/AdminLayout";

const useRouteElemenst = () => {
  const routes = useRoutes([
    {
      path: PATH.AUTH.ROOT,
      element: <Outlet />,
      children: [
        {
          path: PATH.AUTH.LOGIN,
          element: (
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          ),
        },
        {
          path: PATH.AUTH.REGISTER,
          element: (
            <AuthLayout>
              <RegisterPage />
            </AuthLayout>
          ),
        },
      ],
    },

    {
      path: PATH.HOME,
      element: <Outlet />,
      children: [
        {
          path: PATH.HOME,
          element: (
            <MainLayout>
              <HomePage />
            </MainLayout>
          ),
        },
      ],
    },

    {
        path: PATH.ADMIN.ROOT,
        element: <Outlet/>,
        children: [
            {
                path: PATH.ADMIN.USER_MANAGERMENT,
            }
        ]
    }
  ]);
  return { routes };
};

export default useRouteElemenst;
