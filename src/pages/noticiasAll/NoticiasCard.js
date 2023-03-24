import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Grid, Typography, CardContent } from '@mui/material';
import SvgIconStyle from '../../components/SvgIconStyle';
import Checkbox from '@mui/material/Checkbox';
import Iconify from '../../components/Iconify';
import { useState } from 'react';
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
export default function NoticiasAllCard({ index, noticias }) {

  //console.log(post)
const [checked, setChecked] = useState(false);
  //console.log(post)
  const { /*content, description,source,  publishedAt, url, */image, title, } = noticias;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;
  console.log(checked); 
  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3} sx={{cursor: 'pointer'}} >
      
      <CardPadrao sx={{ position: 'relative' }}>
      <div style={{
                zIndex:9,
                position: 'absolute',
                top:0,
                right:0

              }}>
                <Checkbox onChange={(e)=>{ setChecked(e.target.checked);}} icon={ <Iconify icon="material-symbols:favorite-outline" sx={{ color: 'text.disabled', width:20, height:20}} />} checkedIcon={<Iconify icon="material-symbols:favorite-rounded" sx={{ color: 'red', width:20, height:20}} />} />
                        </div>
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
           key={noticias} 
           to={`/noticias/${encodeURIComponent(JSON.stringify(noticias))}`}
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



