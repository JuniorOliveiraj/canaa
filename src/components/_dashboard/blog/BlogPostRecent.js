import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Link, Card, Avatar, Typography, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgIconStyle from '../../SvgIconStyle';
import Iconify from '../../Iconify';

// ----------------------------------------------------------------------

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

PostItem.propTypes = {
  post: PropTypes.object
};

function PostItem({ post }) {
  const { cover, title, view, comment, share, author, createdAt, id } = post;
  
  const queryString = window.location.search;
  // Cria um objeto URLSearchParams com a parte da query
  const urlParams = new URLSearchParams(queryString);
  // Obtém o valor do parâmetro 'adm'
  const admValue = urlParams.get('adm');
  //const linkTo = `${PATH_DASHBOARD.blog.root}/post/${paramCase(title)}`;
  const linkTo = `${admValue !== 'true' ? '/blog':PATH_DASHBOARD.blog.root}/post/${paramCase(title)}-${id}`;

  const POST_INFO = [
    { number: comment, icon: 'lucide:message-circle' },
    { number: view, icon: 'mdi:eye' },
    { number: share, icon: 'material-symbols:share' }
  ];
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <Box sx={{ position: 'relative', paddingTop: 'calc(100% * 3 / 4)' }}>
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute'
            }}
          />
          <Avatar
            alt={author.name}
            src={author.photoURL}
            sx={{
              left: 24,
              zIndex: 9,
              width: 32,
              height: 32,
              bottom: -16,
              position: 'absolute'
            }}
          />
          <CoverImgStyle alt="cover" src={cover} />
        </Box>

        <CardContent sx={{ pt: 4.5 }}>
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {fDate(createdAt)}
          </Typography>

          <Link
            to={linkTo}
            color="inherit"
            variant="subtitle2"
            component={RouterLink}
            sx={{
              height: 44,
              overflow: 'hidden',
              WebkitLineClamp: 2,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical'
            }}
          >
            {title}
          </Link>

          <Box
            sx={{
              mt: 3,
              display: 'flex',
              flexWrap: 'wrap',
              color: 'text.disabled',
              justifyContent: 'flex-end'
            }}
          >
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5
                }}
              >
                <Box component={Iconify} icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

BlogPostRecent.propTypes = {
  posts: PropTypes.array.isRequired
};

export default function BlogPostRecent({ posts }) {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 10, mb: 5 }}>
        Recent posts
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
}
