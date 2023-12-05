
// material
import { Box, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import BlogCardPosts from '../components/_dashboard/blog/BlogCardPosts';
// ----------------------------------------------------------------------
import useSettings from '../hooks/useSettings';
 

// ----------------------------------------------------------------------
const metaAndTags = {
  meta_title: "Junior Oliveira - Blog ",
  meta_description:
    "Leia os últimos artigos do blog de Junior Oliveira, desenvolvedor React com foco em aplicações web, dashboards e sistemas administrativos.",
  meta_tags: "blog,react,blog, application, dashboard, junior oliveira, junior belem , belem, canaa, app react , junior react, belem junior, junior belem,"
}
export default function BlogHome() {
  const { themeStretch } = useSettings();
  return (
    <Page title="junior | Blog" sx={{padding: !themeStretch ? 0 : 10}} meta={ metaAndTags}>
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
