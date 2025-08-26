// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Finaças',
    path: '/finacas',
    icon: getIcon('ph:money-bold'),
    children: [
      {
        title: 'Finaças card',
        path: '/finacas/card',
      },
      {
        title: 'Finaças analytics',
        path: '/finacas/analytics',
      }
    ]
  },

  {
    title: 'user',
    path: '/user',
    icon: getIcon('eva:people-fill'),
    children: [
      {
        title: 'user',
        path: '/user/list2',

      },
      {
        title: 'perfil',
        path: '/user/perfil',

      }, {
        title: 'new',
        path: '/user/new',

      }, {
        title: 'list',
        path: '/user/list',

      }, {
        title: 'cards',
        path: '/user/cards',

      },{
        title: 'account',
        path: '/user/account',

      }
    ]
  },
  {
    title: 'Board',
    path: '/kanban',
    icon: getIcon('ri:todo-fill'),
  },
  /* {
     title: 'Tarefas',
     path: '/tarefas',
     icon: getIcon('icons8:todo-list'),
   },*/

  {
    title: 'e-commerce',
    path: '/e-commerce',
    icon: getIcon('uim:bag'),
    children: [
      {
        title: 'shop ',
        path: '/e-commerce/shop',
      },
      {
        title: 'List',
        path: '/e-commerce/list',
      },
      {
        title: 'product create',
        path: '/e-commerce/product/new',
      },
    ]
  },
  {
    title: 'product agro',
    path: '/profutosAgro',
    icon: getIcon('fluent-mdl2:product-list'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: getIcon('eva:file-text-fill'),
    children: [
      {
        title: 'blog list',
        path: '/blog/posts',
      },
      {
        title: 'Create',
        path: '/blog/new-post',
        icon: getIcon('eva:file-text-fill'),
      },
      // {
      //   title: 'sobre ',
      //   path: '/blog/BlogPost',

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
