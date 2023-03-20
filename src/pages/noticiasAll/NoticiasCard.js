import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Grid, Typography, CardContent } from '@mui/material';
import SvgIconStyle from '../../components/SvgIconStyle';

// utils


//

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

// const AvatarStyle = styled(Avatar)(({ theme }) => ({
//   zIndex: 9,
//   width: 32,
//   height: 32,
//   position: 'absolute',
//   left: theme.spacing(3),
//   bottom: theme.spacing(-2),
// }));

// const InfoStyle = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'flex-end',
//   marginTop: theme.spacing(3),
//   color: theme.palette.text.disabled,
// }));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});
const CardPadrao = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[999]

}));
// ----------------------------------------------------------------------

NoticiasAllCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function NoticiasAllCard({ index, noticias, adicionar }) {
  //console.log(post)
  const open1 = () => {
    adicionar(noticias, 1)

}


  //console.log(post)
  const { /*content, description,source,  publishedAt, url, */image, title, } = noticias;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;
  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3} onClick={open1} sx={{cursor: 'pointer'}} >
      <CardPadrao sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <CoverImgStyle alt={title} src={image} />
        </CardMediaStyle>
        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {/* {fDate(createdAt)} */}
          </Typography>

          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
              }),
            }}
          >
            {title}
          </TitleStyle>
        </CardContent>
      </CardPadrao>
    </Grid>
  );
}





// function DialogAdicionar({/*valores =>*/ media, valores, /*cunctions =>*/  handleClose, ...other }) {
//   const [openAdd, setOpenAdd] = useState(false);
//   if (valores != null && openAdd === false) {
//     if (valores.openValor) {
//       setOpenAdd(true)
//     }

//   }
//   const handleClose2 = () => {
//     setOpenAdd(false)
//     handleClose(false);
//   };

//   if (valores != null) {
//     return (
//       <div>
//         <Dialog
//           open={openAdd}
//           onClose={handleClose2}
//           aria-labelledby="draggable-dialog-title"

//         >
//           <DialogTitle sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[999], 1), }} id="draggable-dialog-title">
//             Subscribe
//           </DialogTitle>
//           <DialogContent sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[999], 1) }}>
//             <DialogContentText>
//               <Grid item xs={12} md={6} lg={4}>
        

//                   {/* {"R$ " + valores.total} */}
             
//               </Grid>
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[999], 1) }}>
//             <Button sx={{ color: (theme) => alpha(theme.palette.grey[800], 1) }} autoFocus onClick={handleClose2}>
//               Cancel
//             </Button>
//             <Button sx={{ color: (theme) => alpha(theme.palette.grey[800], 1) }} onClick={handleClose2}>Concluir</Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     )
//   }

// }