import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingScreen from './Portifolio/Carregamnetopage';
// layouts

//

import BlogPost from './pages/Blog/BlogPost';
import Blog from './pages/Blog/BlogList';
import BlogCreate from './pages/Blog/BlogCreate';
import BlogHome from './pages/Blog';
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
import HomePageCurriculo from './homeCurriculo/homeCurriculos';
import NoticiasALL from './pages/noticiasAll';
import NoticiasALLFavoritas from './pages/noticiasAll/noticiasFavoritas/noticiasFavorias';
import ProdutosAgro from './pages/noticiasAll/produtos';
import NoticiasLayout from './pages/noticiasAll/home-index';
import NoticiaSobre from './pages/noticiasAll/sobre';
import Game from './projetos/jogo_da_velha';
import Upload from './pages/components-overview/Upload';
import EcommerceProductCreate from './pages/EcommerceProduct/EcommerceProductCreate';
import EcommerceProductDetails from './pages/EcommerceProduct/EcommerceProductDetails';
import GeneralBanking from './pages/GeneralBanking';
import MostrarJson from './projetos/imagens_temp/mostrar json';


// ----------------------------------------------------------------------


const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};


export default function Router() {

  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/app" /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'profutosAgro', element: <ProdutosAgro /> },
        { path: 'kanban', element: <Kanban /> },
     //   { path: 'Calendar', element: <Calendar /> },
        {
          path: 'blog',
          children: [
            { path: 'list', element: <Blog /> },
            { path: 'create', element: <BlogCreate /> },
            { path: 'list/:id', element: <BlogPost to=":id" /> },

          ],
        },
        {
          path: 'products',
          children: [
            { path: 'create', element: <EcommerceProductCreate /> },
            { path: 'list', element: <Products /> },
            { path: 'details', element: <EcommerceProductDetails /> },

          ],
        },
        { path: 'tarefas', element: <Tarefas /> },
        { path: 'perfil', element: <Perfil /> },
        {
          path: 'finacas',
          children: [
            { path: 'card', element: <Financas /> },
            { path: 'analytics', element: <GeneralBanking /> },
          ]
        },
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
      element: <MainLayout to="/" />,
      children: [
        { path: '/', element: <LandingPage to="/" /> },
        { path: '/contato', element: <Contact to="/contato" /> },
        { path: '/about', element: <AboutMeIndex to="/about" /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'blog', element: <BlogHome /> },
        { path: 'blog/:id', element: <BlogPost to=":id" /> },
        { path: 'payment', element: <Payment /> },
        { path: '/mostrar_json', element: <MostrarJson /> },
        { path: 'tools', element: <DesignToo />, },
        { path: 'tools/:id', element: <ListitemTools to=":id" /> },
        {
          path: 'components',
          children: [
            { path: '', element: <Navigate to="/components/all" /> },
            { path: 'all', element: <ComponentsOverview /> },
            // FOUNDATIONS
            { path: 'Colors', element: <Color /> },
            { path: 'Grid', element: <Grid /> },
            { path: 'Shadows', element: <Shadows /> },
            { path: 'Typography', element: <Typography /> },
            // MATERIAL UI
            { path: 'Buttons', element: <Buttons /> },
            // EXTRA COMPONENTS
            { path: 'Upload', element: <Upload /> },
            { path: 'Animate', element: <Animate /> },

          ]
        },
      ],
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
        { path: '/noticias', element: <NoticiasALL to="/noticias/all" /> },
        { path: ':id', element: <NoticiaSobre to="/noticias/:id" /> },
        { path: '/noticias/favoritos', element: <NoticiasALLFavoritas to="/noticias/favoritos" /> },
        { path: '/noticias/produtos', element: <ProdutosAgro to="/noticias/produtos" /> },
      ],

    },
    {
      path: '/projetos/velha',
      element: <Game to="/projetos/velha" replace />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    }
  ]);
}
//DASHBOARD
const DashboardLayout = Loadable(lazy(() => import('./layouts/dashboard')));
const Kanban = Loadable(lazy(() => import('./pages/dashboard/Kanban')));



// EXTERNAL  PAGE 
const MainLayout = Loadable(lazy(() => import('./layouts/main/index')));
const LandingPage = Loadable(lazy(() => import('./pages/LandingPage')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));
const DesignToo = Loadable(lazy(() => import('./pages/designToo')));
const ListitemTools = Loadable(lazy(() => import('./components/_external-pages/designToo/listitemTools')));
const Faqs = Loadable(lazy(() => import('./pages/Faqs')));
const Payment = Loadable(lazy(() => import('./pages/Payment')));
const ComponentsOverview = Loadable(lazy(() => import('./pages/ComponentsOverview')));
const Buttons = Loadable(lazy(() => import('./pages/components-overview/material-ui/buttons')));
const Color = Loadable(lazy(() => import('./pages/components-overview/foundations/FoundationColors')));
const Typography = Loadable(lazy(() => import('./pages/components-overview/foundations/FoundationTypography')));
const Shadows = Loadable(lazy(() => import('./pages/components-overview/foundations/FoundationShadows')));
const Grid = Loadable(lazy(() => import('./pages/components-overview/foundations/FoundationGrid')));
const Animate = Loadable(lazy(() => import('./pages/components-overview/extra/animate')));



//const Calendar = Loadable(lazy(() => import('./pages/dashboard/Calendar')));