import { RootState, useAppSelector } from '@/redux/store';
import { Urls } from '@/shared/constants/url';
import { ROLES } from '@/shared/models';
import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
const Emplyeees = lazy(() => import("@/pages/Employees/index"));
const Projects = lazy(() => import("@/pages/Projects/index"));
const Teams = lazy(() => import("@/pages/Teams/index"));
const Reports = lazy(() => import("@/pages/Reports/index"));

const routes = [
    {
        path: Urls.EMPLOYEES_URL,
        element: <Emplyeees />,
        authorites: [ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.HEAD, ROLES.EMPLOYEE],
    },
    {
        path: Urls.TEAMS_URL,
        element: <Teams />,
        authorites: [ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.HEAD]
    },
    {
        path: Urls.PROJECTS_URL,
        element: <Projects />,
        authorites: [ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.HEAD]
    },
    {
        path: Urls.REPORTS_URL,
        element: <Reports />,
        authorites: [ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.HEAD]
    },
    {
        path: "*",
        element: <Navigate to="/" />,
        authorites: [ROLES.SUPERADMIN, ROLES.ADMIN, ROLES.HEAD]
    },
];

const PrivateRouter = () => {
    const roleID = useAppSelector((state:RootState) => state.auth.user?.role.id);
    return <> {useRoutes(routes.filter((route) => checkPermission(route.authorites, roleID)))} </>
};

export default PrivateRouter;

export const checkPermission = (auth: number[], roleID: number | undefined) => {
    if (roleID && auth.includes(roleID)) return true;
    return false;
};