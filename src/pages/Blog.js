
// material
import { Box, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import BlogCardPosts from '../components/_dashboard/blog/BlogCardPosts';
// ----------------------------------------------------------------------
import useSettings from '../hooks/useSettings';
 

// ----------------------------------------------------------------------

export default function BlogHome() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Dashboard: Blog" sx={{padding: !themeStretch ? 0 : 10}}>
      <Box sx={{  margin:2}}/>
      <Container  maxWidth={themeStretch ? false : 'xl'} >
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
        </Stack>
        <BlogCardPosts path={'/blog'}/>
      </Container>
    </Page>
  );
}
