import { Home, Projects, Reports, Teams, Users } from './pages/index';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

enum Roles {
    SUPER_ADMIN = 1,
    ADMIN = 2,
    HEAD = 3,
    USER = 4
};

export const routes = [
    {
        id: 101,
        path: '/',
        exact: true,
        component: Home,
        allowerRoles: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.HEAD, Roles.USER],
    },
    {
        id: 202,
        path: '/projects',
        exact: false,
        component: Projects,
        allowerRoles: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.HEAD]
    },
    {
        id: 303,
        path: '/reports',
        exact: false,
        component: Reports,
        allowerRoles: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.HEAD, Roles.USER]
    },
    {
        id: 404,
        path: '/teams',
        exact: false,
        component: Teams,
        allowerRoles: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.HEAD]
    },
    {
        id: 505,
        path: '/users',
        exact: false,
        component: Users,
        allowerRoles: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.HEAD]
    },
    {
        id: 606,
        path: '/change-password',
        exact: false,
        component: ChangePassword,
        allowerRoles: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.HEAD, Roles.USER]
    },
    {
        id: 707,
        path: '/reset-password',
        exact: false,
        component: ResetPassword,
        allowerRoles: [Roles.SUPER_ADMIN, Roles.ADMIN]
    }
];