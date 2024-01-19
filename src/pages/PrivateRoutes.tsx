import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { FC } from 'react';

interface PrivateRoutesProps {
    allowerRoles: number[]
};

const PrivateRoutes: FC<PrivateRoutesProps> = ({ allowerRoles }) => {
    const location = useLocation();
    let userToken = true;
    const roleID = 1;

    return (
        allowerRoles.find((role: number) => role === roleID)
            ? <Outlet />
            : userToken
                ? <Navigate to='/unauthorized' state={{ from: location }} replace />
                : <Navigate to='/login' state={{ from: location }} replace />
    )
};

export default PrivateRoutes;