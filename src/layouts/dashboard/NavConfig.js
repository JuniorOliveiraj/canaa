// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Finaças',
    path: '/dashboard/finacas',
    icon: getIcon('ph:money-bold'),
    children:[
      {
        title: 'Finaças card',
        path: '/dashboard/finacas/card',
      },
      {
        title: 'Finaças analytics',
        path: '/dashboard/finacas/analytics',
      }
    ]
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
 /* {
    title: 'Tarefas',
    path: '/dashboard/tarefas',
    icon: getIcon('icons8:todo-list'),
  },*/
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
    children:[
      {
        title: 'product list',
        path: '/dashboard/products/list',
      },
      {
        title: 'product create',
        path: '/dashboard/products/create',
      },
      {
        title: 'product',
        path: '/dashboard/products/details',
      },
    ]
  },
    {
    title: 'product agro',
    path: '/dashboard/profutosAgro',
    icon: getIcon('fluent-mdl2:product-list'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
    children:[
      {
        title: 'blog list',
        path: '/dashboard/blog/list',
      },
      {
        title: 'Create',
        path: '/dashboard/blog/create',
        icon: getIcon('eva:file-text-fill'),
      },
      // {
      //   title: 'sobre ',
      //   path: '/dashboard/blog/BlogPost',

      // }
    ]
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },

  /*{
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },*/
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },

];

export default navConfig;
