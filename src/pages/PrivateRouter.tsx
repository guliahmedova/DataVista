import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import("pages/Home/index"));
const Emplyeees = lazy(() => import("pages/Employees/index"));
const Projects = lazy(() => import("pages/Projects/index"));
const Teams = lazy(() => import("pages/Teams/index"));
const Reports = lazy(() => import("pages/Reports/index"));

const PrivateRouter = () => {
    return (
        <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/employees' element={<Emplyeees />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/reports' element={<Reports />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default PrivateRouter;