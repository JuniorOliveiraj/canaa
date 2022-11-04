import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/GridUser/User';
//import Login from './pages/Login';
import NotFound from './pages/Page404';
// Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import HomePage from './home/home';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/app" /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },


    {
      path: '/',
      element: <HomePage to="/" />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
      
      ],
    },
    {
      path:'/404',
      element: <NotFound to="/404"/>
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
