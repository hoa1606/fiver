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
import WorkManagerment from "../modules/admin/WorkManagerment/WorkManagerment";
import { TypeWorkManagerment } from "../modules/admin/TypeWorkManagerment";
import { ServiceManagerment } from "../modules/admin/ServiceManagerment";


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
                  <WorkManagerment/>
                </AdminLayout>
              ),
            },
            {
              path: PATH.ADMIN.TYPE_WORK_MANAGERMENT,
              element: (
                <AdminLayout>
                  <TypeWorkManagerment/>
                </AdminLayout>
              ),
            },
            {
              path: PATH.ADMIN.SERVICE_MANAGERMENT,
              element: (
                <AdminLayout>
                  <ServiceManagerment/>
                </AdminLayout>
              ),
            },
        ]
    }
  ]);
  return { routes };
};

export default useRouteElemenst;
