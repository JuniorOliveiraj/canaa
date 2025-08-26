// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfigPortifolio = [
    {
        title: 'dashboard',
        path: '/app',
        icon: getIcon('eva:pie-chart-2-fill'),
        externo: false
      },
      {
        title: 'curiculo',
        path: 'https://drive.google.com/file/d/1pt1umuPt3l5-Mod2rANfNSbcgfD6Zg7x/view',
        icon: getIcon('bi:file-earmark-pdf-fill'),
        externo: true
      },
      {
        title: 'pages',
        path: 'https://www.instagram.com/',
        icon: getIcon('akar-icons:instagram-fill'),
        externo: true,
        plus: getIcon('material-symbols:keyboard-arrow-down'),
      },
      {
        title: 'linkedim',
        path: 'https://www.linkedin.com/in/junior-oliveira-ba22381a3/',
        icon: getIcon('akar-icons:linkedin-box-fill'),
        externo: true
      },
      {
        title: 'guithub',
        path: 'https://github.com/JuniorOliveiraj',
        icon: getIcon('fluent-mdl2:git-hub-logo'),
        externo: true
      },
];

export default navConfigPortifolio;
