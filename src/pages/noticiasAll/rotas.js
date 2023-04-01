// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const RotasNoticias = [
  {
    title: 'Favoritos',
    path: '/noticias/favoritos',
    icon: getIcon('mdi:cards-heart'),
  },

];

export default RotasNoticias;
