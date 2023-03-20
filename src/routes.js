import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import Conatato from './Portifolio/contato';
//
import Blog from './pages/Blog';
import User from './pages/GridUser/User';
import Tarefas from './pages/tarefas/tarefas';
import Perfil from './pages/perfil/perfil';
import Login from './pages/Login';
import Financas from './pages/Finanças';
import HomePortifolio from './Portifolio/Home/Index';
import AboutMeIndex from './Portifolio/AboutMe';
//import Login from './pages/Login';
import NotFound from './pages/Page404';
// Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import HomePageCurriculo from './homeCurriculo/homeCurriculos';
import NoticiasALL from './pages/noticiasAll';
// import Namoro from './Portifolio/Namoro';
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
        { path: 'tarefas', element: <Tarefas /> },
        { path: 'perfil', element: <Perfil /> },
        { path: 'finacas', element: <Financas /> },
      ],
    },


    {
      path: '/Page/Curriculo',
      element: <HomePageCurriculo to="/Page/Curriculo" />,
      children: [
        { path: '/Page/Curriculo', element: <Navigate to="/dashboard" /> },
      
      ],
    },
    {
      path: '/',
      element: <HomePortifolio to="/" />,
      // children: [
      //   { path: '/', element: <Navigate to="/dashboard" /> },
      
      // ],
    },
    {
      path:'/contato',
      element:<Conatato to="/contato"/>
    },
    {
      path:'/about',
      element:<AboutMeIndex to="/about"/>
    },
    {
      path:'/404',
      element: <NotFound to="/404"/>
    },
    {
      path:'/login',
      element: <Login to="/login"/>
    },
    {
      path:'/noticias',
      element: <NoticiasALL to="/noticias"/>
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    }
  ]);
}
