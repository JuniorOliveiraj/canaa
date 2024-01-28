import Iconify from '../../components/Iconify';

// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD, PATH_PORTIFOLIO } from '../../routes/paths';


// ----------------------------------------------------------------------


const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="iconamoon:home-fill" sx={{ width: 22, height: 22 }} />,
    path: '/'
  },
  {
    title: 'Contato',
    icon: <Iconify icon="solar:round-graph-broken" sx={{ width: 22, height: 22 }} />,
    path: PATH_PAGE.components
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="tabler:file-filled" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: PATH_PAGE.about },
          { title: 'Contact us', path: PATH_PAGE.contact },
          { title: 'FAQs', path: PATH_PAGE.faqs },
          { title: 'blog', path: PATH_PAGE.blog },
          { title: 'Payment', path: PATH_PAGE.payment },
          //  { title: 'Maintenance', path: PATH_PAGE.maintenance },
          { title: 'Newsletter', path: PATH_PAGE.newsletter },
          { title: 'tools', path: PATH_PAGE.tools, }
        ]
      },
      {
        subheader: 'Authentication',
        items: [
          { title: 'Login', path: PATH_AUTH.loginUnprotected },
          { title: 'Register', path: PATH_AUTH.registerUnprotected },
          { title: 'Reset password', path: PATH_AUTH.resetPassword },
          { title: 'Verify code', path: PATH_AUTH.verify }
        ]
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 404', path: PATH_PAGE.page404 },
          { title: 'Page 500', path: PATH_PAGE.page500 }
        ]
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: PATH_DASHBOARD.root }]
      }
    ]
  },
  {
    title: 'Portifolio',
    icon: <Iconify icon="fa-solid:book" sx={{ width: 22, height: 22 }} />,
    path: PATH_PORTIFOLIO
  },
  {
    title: 'sobre',
    icon: <Iconify icon="fa-solid:book" sx={{ width: 22, height: 22 }} />,
    path: PATH_DOCS
  },
  
];

export default menuConfig;
