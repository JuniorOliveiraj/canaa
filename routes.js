import { Navigate, useRoutes } from 'react-router-dom';
// layouts


import User from './pages/GridUser/User';

import Perfil from './pages/perfil/perfil';
import Login from './pages/Login';

import AboutMeIndex from './Portifolio/AboutMe';
//import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';

import NoticiasALL from './pages/noticiasAll';
import NoticiasALLFavoritas from './pages/noticiasAll/noticiasFavoritas/noticiasFavorias';
import ProdutosAgro from './pages/noticiasAll/produtos';
import NoticiasLayout from './pages/noticiasAll/home-index';
import NoticiaSobre from './pages/noticiasAll/sobre';

// import Namoro from './Portifolio/Namoro';
// ----------------------------------------------------------------------

export default function Router() {

  return useRoutes([
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: '/dashboard', element: <Navigate to="/dashboard/app" /> },
    //     { path: 'app', element: <DashboardApp /> },
    //     { path: 'user', element: <User /> },
    //     { path: 'products', element: <Products /> },
    //     { path: 'profutosAgro', element: <ProdutosAgro /> },
    //     { path: 'blog', element: <Blog /> },
    //     { path: 'tarefas', element: <Tarefas /> },
    //     { path: 'perfil', element: <Perfil /> },
    //     { path: 'finacas', element: <Financas /> },
    //   ],
    // },


    // {
    //   path: '/Page/Curriculo',
    //   element: <HomePageCurriculo to="/Page/Curriculo" />,
    //   children: [
    //     { path: '/Page/Curriculo', element: <Navigate to="/dashboard" /> },

    //   ],
    // },
    // {
    //   path: '/',
    //   element: <HomePortifolio to="/" />,
    //   // children: [
    //   //   { path: '/', element: <Navigate to="/dashboard" /> },

    //   // ],
    // },
    // {
    //   path:'/contato',
    //   element:<Conatato to="/contato"/>
    // },
    {
      path: '/about',
      element: <AboutMeIndex to="/about" />
    },
    {
      path: '/404',
      element: <NotFound to="/404" />
    },
    {
      path: '/login',
      element: <Login to="/login" />
    },
    {
      path: '/Register',
      element: <Register to="/Register" />
    },
    {
      path: '/noticias',
      element: <NoticiasLayout to="/noticias" />,
      children: [
        { path: '/noticias', element: <Navigate to="/noticias/all" /> },
        { path: '/noticias/all', element: <NoticiasALL to="/noticias/all" /> },
        { path: ':id', element: <NoticiaSobre to="/noticias/:id" /> },
        { path: '/noticias/favoritos', element: <NoticiasALLFavoritas to="/noticias/favoritos" /> },
        { path: '/noticias/produtos', element: <ProdutosAgro to="/noticias/produtos" /> },
        { path: 'perfil', element: <Perfil to="/user/perfil" /> },
        { path: 'user/perfil', element: <Perfil to="/user/perfil" /> },
        { path: '/noticias/user/showAll', element: <User to="/noticias/user/showAll" /> },
      ],

    },
    // {
    //   path: '/projetos/velha',
    //   element: <Game to="/projetos/velha" replace />,
    // },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/dashboard/perfil',
      element: <Navigate to="/noticias/perfil" replace />,
    }
  ]);
}
