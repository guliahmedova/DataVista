import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { routes } from './routes';
import PrivateRoutes from './pages/PrivateRoutes';
import { UnAuthorized } from './pages';
import { CustomLayout } from 'shared/index';
import NotFound from './pages/NotFound/NotFound';

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
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;