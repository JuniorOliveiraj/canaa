// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
//import Label from '../../components/Label';
import Iconify from '../../components/Iconify';



const getIcon = (name) => <Iconify icon={name} width={44} height={44} />;
// ----------------------------------------------------------------------



const ICONS = {
  blog: getIcon('eva:file-text-fill'),
  cart:   getIcon('mdi:cart'),
  chat:getIcon('majesticons:chat-text'),
  mail: getIcon('material-symbols:mail'),
  user: getIcon('mdi:user'),
  kanban: getIcon('ri:todo-fill'),
  banking: getIcon('mdi:piggy-bank'),
  calendar: getIcon('mdi:calendar'),
  ecommerce: getIcon('uim:bag'),
  analytics: getIcon('carbon:analytics'),
  dashboard: getIcon('uim:chart-pie'),
  booking: getIcon('fa6-solid:plane-departure')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard
      },
    //  { title: 'e-commerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
    //  { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
   //   { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking }
    ]
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      // MANAGEMENT : USER
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'profile', path: PATH_DASHBOARD.user.profile },
          { title: 'cards', path: PATH_DASHBOARD.user.cards },
          { title: 'list 2.0 Test', path: PATH_DASHBOARD.user.list },
          { title: 'list 1.0', path: PATH_DASHBOARD.user.list2 },
          { title: 'create', path: PATH_DASHBOARD.user.newUser },
         // { title: 'edit', path: PATH_DASHBOARD.user.editById },
          { title: 'account', path: PATH_DASHBOARD.user.account }
        ]
      },

      // MANAGEMENT : E-COMMERCE
      {
        title: 'e-commerce',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'product', path: PATH_DASHBOARD.eCommerce.productById },
          { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
          { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct },
          //{ title: 'edit', path: PATH_DASHBOARD.eCommerce.editById },
          { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
          { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice }
        ]
      },

      // MANAGEMENT : BLOG
      {
        title: 'blog',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: 'posts', path: PATH_DASHBOARD.blog.posts },
          { title: 'post', path: PATH_DASHBOARD.blog.postById },
          { title: 'new post', path: PATH_DASHBOARD.blog.newPost }
        ]
      }
    ]
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'app',
    items: [
      // {
      //   title: 'mail',
      //   path: PATH_DASHBOARD.mail.root,
      //   icon: ICONS.mail,
      //   info: <Label color="error">2</Label>
      // },
      //{ title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
    //  { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
      {
        title: 'kanban',
        path: PATH_DASHBOARD.kanban,
        icon: ICONS.kanban
      }
    ]
  }
];

export default sidebarConfig;
