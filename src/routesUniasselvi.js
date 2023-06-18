import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

//
import Blog from './pages/Blog';
import User from './pages/GridUser/User';
import Tarefas from './pages/tarefas/tarefas';
import Perfil from './pages/perfil/perfil';
import Login from './pages/Login';
import Financas from './pages/Finanças';

import AboutMeIndex from './Portifolio/AboutMe';
//import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

import NoticiasALL from './pages/noticiasAll';
import NoticiasALLFavoritas from './pages/noticiasAll/noticiasFavoritas/noticiasFavorias';
import ProdutosAgro from './pages/noticiasAll/produtos';
import NoticiasLayout from './pages/noticiasAll/home-index';
import NoticiaSobre from './pages/noticiasAll/sobre';


// import Namoro from './Portifolio/Namoro';
// ----------------------------------------------------------------------

export default function RouterUniasselvi() {

  return useRoutes([



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
      path: '/',
      element: <NoticiasLayout to="/" />,
      children: [
        { path: '/', element: <Navigate to="/all" /> },
        { path: '/all', element: <NoticiasALL to="/all" /> },
        { path: '/noticias/:id', element: <NoticiaSobre to="/noticias/:id" /> },
        { path: '/favoritos', element: <NoticiasALLFavoritas to="/favoritos" /> },
        { path: '/produtos', element: <ProdutosAgro to="/produtos" /> },
        { path: 'perfil', element: <Perfil to="/user/perfil" /> },
        { path: 'dashboard/perfil', element: <Perfil to="/dashboard/perfil" /> },
       { path: '/user/showAll', element: <User to="/user/showAll" /> },
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
