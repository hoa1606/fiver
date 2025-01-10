import { Outlet, useRoutes } from "react-router-dom";
import { PATH } from "./path";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import LoginPage from "../modules/auth/Login/LoginPage";
import RegisterPage from "../modules/auth/Register/RegisterPage";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../modules/home/HomePage";
import { AdminLayout } from "../layout/AdminLayout";
import { Categories } from "../modules/home/Categories";
import WorkDetail from "../modules/home/WorkDeatil/workdetail";
import { UserList, UserManagerment } from "../modules/admin/UserManagerment";
import UserManagermant from "../modules/admin/UserManagerment/UserManagerment";


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
        {
          path: "/categories",
          element: (
            <MainLayout>
              <Categories />
            </MainLayout>
          ),
        },
        {
          path: "/categories/detail/:id",
          element: (
            <MainLayout>
              <WorkDetail/>
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
              element: (
                <AdminLayout>
                  <UserManagermant/>
                </AdminLayout>
              ),
            },
            {
              path: PATH.ADMIN.WORK_MANAGERMENT,
              element: (
                <AdminLayout>
                  <div>WORK_MANAGERMENT</div>
                </AdminLayout>
              ),
            },
            {
              path: PATH.ADMIN.TYPE_WORK_MANAGERMENT,
              element: (
                <AdminLayout>
                  <div>TYPE_WORK_MANAGERMENT</div>
                </AdminLayout>
              ),
            },
            {
              path: PATH.ADMIN.SERVICE_MANAGERMENT,
              element: (
                <AdminLayout>
                  <div>SERVICE_MANAGERMENT</div>
                </AdminLayout>
              ),
            },
        ]
    }
  ]);
  return { routes };
};

export default useRouteElemenst;
