// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const RotasNoticias = [
  // {
  //   title: 'noticias',
  //   path: '/noticias/all',
  //   icon: getIcon('fluent:news-16-filled'),
  // },
  {
    title: 'Favoritos',
    path: '/noticias/favoritos',
    icon: getIcon('mdi:cards-heart'),
  },
  //  {
  //   title: 'usuarios cadastrados',
  //   path: '/noticias/user/showAll',
  //   icon: getIcon('mdi:users'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },

  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },


];

export default RotasNoticias;
