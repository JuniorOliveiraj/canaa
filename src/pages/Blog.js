
// material
import { Box, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import BlogCardPosts from '../components/_dashboard/blog/BlogCardPosts';
// ----------------------------------------------------------------------

 

// ----------------------------------------------------------------------

export default function BlogHome() {
  return (
    <Page title="Dashboard: Blog">
      <Box sx={{marginTop:10}}/>
      <Container sx={{ maxWidth: '90%' }} maxWidth={false}>
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
