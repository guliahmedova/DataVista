import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Emplyeees = lazy(() => import("pages/Employees/index"));
const Projects = lazy(() => import("pages/Projects/index"));
const Teams = lazy(() => import("pages/Teams/index"));
const Reports = lazy(() => import("pages/Reports/index"));

const PrivateRouter = () => {
    return (
        <Routes>
            <Route index={true} path='/' element={<Emplyeees />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/reports' element={<Reports />} />
        </Routes>
    )
};

export default PrivateRouter;