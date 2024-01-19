import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { routes } from './routes';
import PrivateRoutes from './pages/PrivateRoutes';
import { CustomLayout, UnAuthorized } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<CustomLayout />}>
          {routes.map((route) => (
            <Route element={<PrivateRoutes allowerRoles={route.allowerRoles} />} key={route.id}>
              <Route path={route.path} element={<route.component />} />
            </Route>
          ))}
        </Route>
        <Route path="unauthorized" element={<UnAuthorized />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;