import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingScreen from './Portifolio/Carregamnetopage';
import AppJogo from './projetos/jogo da velha';
import VerificarSorteio from './projetos/jogo da velha/verificar';
// layouts

//

//import BlogPost from './pages/Blog/BlogPost';
//import Blog from './pages/Blog/BlogList';
//import BlogCreate from './pages/Blog/BlogCreate';
import User from './pages/GridUser/User';
import Tarefas from './pages/tarefas/tarefas';
import Perfil from './pages/perfil/perfil';
import Login from './pages/Login';
import Financas from './pages/Finanças';

import AboutMeIndex from './Portifolio/AboutMe';
//import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';

import DashboardApp from './pages/DashboardApp';
import HomePageCurriculo from './homeCurriculo/homeCurriculos';
import NoticiasALL from './pages/noticiasAll';
import NoticiasALLFavoritas from './pages/noticiasAll/noticiasFavoritas/noticiasFavorias';
import ProdutosAgro from './pages/noticiasAll/produtos';
import NoticiasLayout from './pages/noticiasAll/home-index';
import NoticiaSobre from './pages/noticiasAll/sobre';
import Game from './projetos/jogo_da_velha';
import Upload from './pages/components-overview/Upload';
import EcommerceProductDetails from './pages/EcommerceProduct/EcommerceProductDetails';
import GeneralBanking from './pages/GeneralBanking';
import ComponentsOverviewMirante from './projetos/imagens_temp/mirante';

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
        {
          path: 'user',
          children: [
            { path: 'list2', element: <User /> },
            { path: 'perfil', element: <UserProfile /> },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: 'cards', element: <UserCards /> },
            { path: 'account', element: <UserAccount /> },
          ]
        },
        { path: 'profutosAgro', element: <ProdutosAgro /> },
        { path: 'kanban', element: <Kanban /> },
        //   { path: 'Calendar', element: <Calendar /> },
        {
          path: 'blog',
          children: [
            //{ path: 'list', element: <Blog /> },
            //{ path: 'create', element: <BlogCreate /> },
            // { path: 'list/:id', element: <BlogPost to=":id" /> },
            { path: 'posts', element: <BlogPosts /> },
            { path: 'post/:title', element: <BlogPost /> },
            { path: 'new-post', element: <BlogNewPost /> }

          ],
        },
        {
          path: 'products',
          children: [

            { path: 'details', element: <EcommerceProductDetails /> },

          ],
        },
        {
          path: 'e-commerce',
          children: [
            // { path: '/', element: <Navigate to="/dashboard/e-commerce/shop" replace /> },
            { path: 'shop', element: <EcommerceShop /> },
            { path: 'product/:name', element: <EcommerceProductDetails /> },
            { path: 'list', element: <EcommerceProductList /> },
            { path: 'product/new', element: <EcommerceProductCreate /> },
            { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
            { path: 'checkout', element: <EcommerceCheckout /> },
            { path: 'invoice', element: <EcommerceInvoice /> }
          ]
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
        { path: 'blog/post/:title', element: <BlogPost to=":title" /> },
        { path: 'payment', element: <Payment /> },
        {
          path: '/mirante',
          children: [
            { path: '', element: <ComponentsOverviewMirante /> },
            { path: 'mostrar_json', element: <MostrarJson /> },
            { path: 'Chart_cupom', element: <GeneralCupomMirante /> },
          ]
        },
        {
          path: '/portifolio',
          children: [
            { path: '', element: <Portifolio /> },
            { path: 'ler/:title', element: <ProjetosLer to=":title" /> }
          ]
        },
        { path: 'tools', element: <DesignToo />, },
        { path: 'sorteio', element: <AppJogo />, },
        { path: 'sorteio/verificar/:id', element: <VerificarSorteio />, },
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
const EcommerceShop = Loadable(lazy(() => import('./pages/dashboard/EcommerceShop')));
const EcommerceProductList = Loadable(lazy(() => import('./pages/dashboard/EcommerceProductList')));
const EcommerceProductCreate = Loadable(lazy(() => import('./pages/EcommerceProduct/EcommerceProductCreate')));
const EcommerceCheckout = Loadable(lazy(() => import('./pages/dashboard/EcommerceCheckout')));
const EcommerceInvoice = Loadable(lazy(() => import('./pages/dashboard/EcommerceInvoice')));
const BlogPosts = Loadable(lazy(() => import('./pages/dashboard/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('./pages/dashboard/BlogPost')));
const BlogNewPost = Loadable(lazy(() => import('./pages/dashboard/BlogNewPost')));
// usuarios
const UserCards = Loadable(lazy(() => import('./pages/dashboard/UserCards')));
const UserList = Loadable(lazy(() => import('./pages/dashboard/UserList')));
const UserAccount = Loadable(lazy(() => import('./pages/dashboard/UserAccount')));
const UserCreate = Loadable(lazy(() => import('./pages/dashboard/UserCreate')));
const UserProfile = Loadable(lazy(() => import('./pages/dashboard/UserProfile')));

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
//Portifolio
const Portifolio = Loadable(lazy(() => import('./pages/Portifolio')))
const ProjetosLer = Loadable(lazy(()=> import('./components/_external-pages/portifolio/LerProjeto')))
const BlogHome = Loadable(lazy(() => import('./pages/Blog')));
//Mirante
const MostrarJson = Loadable(lazy(() => import('./projetos/imagens_temp/mostrar json')));
const GeneralCupomMirante = Loadable(lazy(() => import('./projetos/imagens_temp/mirante/Chart_cupom')));
//const Calendar = Loadable(lazy(() => import('./pages/dashboard/Calendar')));