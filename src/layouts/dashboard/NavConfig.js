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
    children: [
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
    children: [
      {
        title: 'user',
        path: '/dashboard/user/list2',

      },
      {
        title: 'perfil',
        path: '/dashboard/user/perfil',

      }, {
        title: 'new',
        path: '/dashboard/user/new',

      }, {
        title: 'list',
        path: '/dashboard/user/list',

      }, {
        title: 'cards',
        path: '/dashboard/user/cards',

      },{
        title: 'account',
        path: '/dashboard/user/account',

      }
    ]
  },
  {
    title: 'Board',
    path: '/dashboard/kanban',
    icon: getIcon('ri:todo-fill'),
  },
  /* {
     title: 'Tarefas',
     path: '/dashboard/tarefas',
     icon: getIcon('icons8:todo-list'),
   },*/

  {
    title: 'e-commerce',
    path: '/dashboard/e-commerce',
    icon: getIcon('uim:bag'),
    children: [
      {
        title: 'shop ',
        path: '/dashboard/e-commerce/shop',
      },
      {
        title: 'List',
        path: '/dashboard/e-commerce/list',
      },
      {
        title: 'product create',
        path: '/dashboard/e-commerce/product/new',
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
    children: [
      {
        title: 'blog list',
        path: '/dashboard/blog/posts',
      },
      {
        title: 'Create',
        path: '/dashboard/blog/new-post',
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
