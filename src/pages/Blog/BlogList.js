import { Link as RouterLink, useParams } from 'react-router-dom';
// material
import { Button, Container, Stack, Typography, Breadcrumbs, Link, } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import BlogCardPosts from '../../components/_dashboard/blog/BlogCardPosts';
import { useEffect } from 'react';
import useSettings from '../../hooks/useSettings';
// ----------------------------------------------------------------------
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Blog() {
  const { title } = useParams();

  useEffect(() => {
    console.log(title)
  }, [title]);
  const { themeStretch } = useSettings();
  return (
    <Page title="Dashboard: Blog">
      <Container  maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" component={RouterLink} to="/dashboard" >
                Dashboard
              </Link>
              <Typography color="text.primary">Blog</Typography>
              <Typography color="text.primary">List</Typography>
            </Breadcrumbs>
          </div>
          <Button variant="contained" component={RouterLink} to="/dashboard/blog/create" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>
        <BlogCardPosts path={'/list'}/>
      </Container>
    </Page>
  );
}
