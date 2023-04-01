import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Link, Card, Grid, Typography, CardContent } from '@mui/material';
import SvgIconStyle from '../../../components/SvgIconStyle';
import Checkbox from '@mui/material/Checkbox';
import Iconify from '../../../components/Iconify';
import { useState } from 'react';
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


export default function NoticiasAllCardSobre2({ noticia, matches }) {
    const [checked, setChecked] = useState(false);
    console.log(checked)
    const { /*content, description,source,  publishedAt, url, */image, title, publishedAt } = noticia;

    return (
        <Grid item xs={matches ?  3.5 : 9} sm={matches ?  3.5 : 9} md={matches ?  3.5 : 9} sx={{ cursor: 'pointer', margin:1 }} >
            <CardPadrao sx={{ position: 'relative' }}>
                <div style={{
                    zIndex: 9,
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}>
                    <Checkbox onChange={(e) => { setChecked(e.target.checked); }} icon={<Iconify icon="material-symbols:favorite-outline" sx={{ color: 'text.disabled', width: 20, height: 20 }} />} checkedIcon={<Iconify icon="material-symbols:favorite-rounded" sx={{ color: 'red', width: 20, height: 20 }} />} />
                </div>
                <CardMediaStyle
                    sx={{
                        pt: {
                            xs: matches ?  'calc(100% * 4 / 3)': 'calc(55% * 4 / 3)',
                            sm: matches ?  'calc(100% * 3 / 4.66)':'calc(55% * 3 / 4.66)',
                        },
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
                        }}
                    />
                    <CoverImgStyle alt={title} src={image} />
                </CardMediaStyle>
                <CardContent
                >
                    <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                        {publishedAt}
                    </Typography>
                    <TitleStyle
                        key={noticia}
                        to={`/noticias/${encodeURIComponent(JSON.stringify(noticia))}`}
                        color="inherit"
                        variant="subtitle2"
                        underline="hover"
                        component={RouterLink}
                        sx={{
                            typography: 'h6 ', height: 60
                        }}
                    >
                        {title}
                    </TitleStyle>
                </CardContent>
            </CardPadrao>
        </Grid>
    );
}



