import { orderBy } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useCallback, useState } from 'react';
// material
import { Box, Grid, Button, Skeleton, Container, Stack, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getPostsInitial, getMorePosts } from '../../redux/slices/blog';
// hooks
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../components/_dashboard/blog';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

const applySort = (posts, sortBy) => {
  if (sortBy === 'latest') {
    return orderBy(posts, ['createdAt'], ['desc']);
  }
  if (sortBy === 'oldest') {
    return orderBy(posts, ['createdAt'], ['asc']);
  }
  if (sortBy === 'popular') {
    return orderBy(posts, ['view'], ['desc']);
  }
  return posts;
};

const SkeletonLoad = (
  <Grid container spacing={3} sx={{ mt: 2 }}>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
        <Box sx={{ display: 'flex', mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default function BlogPosts() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState('latest');
  const { posts, hasMore, index, step } = useSelector((state) => state.blog);
  const sortedPosts = applySort(posts, filters);
  const onScroll = useCallback(() => dispatch(getMorePosts()), [dispatch]);
  const [value, setValue] = useState('1');

  useEffect(() => {
    dispatch(getPostsInitial(index, step, {type:value === '2' ? 'PORTIFOLIO' : 'BLOG', dashboard:1} ));

  }, [dispatch, index, step, value]);

  const handleChangeSort = (event) => {
    setFilters(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Page title="Blog: Posts | Junior">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Blog"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Blog', href: PATH_DASHBOARD.blog.root },
            { name: 'Posts' }
          ]}
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={PATH_DASHBOARD.blog.newPost}
              startIcon={<Iconify icon={'ic:baseline-plus'} />}
            >
              New Post
            </Button>
          }
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch />
          <BlogPostsSort query={filters} options={SORT_OPTIONS} onSort={handleChangeSort} />
        </Stack>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 5 }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Post Blogs" value="1" />
              <Tab label="Post Portifólio" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <InfiniteScroll
              next={onScroll}
              hasMore={hasMore}
              loader={SkeletonLoad}
              dataLength={posts.length}
              style={{ overflow: 'inherit' }}
            >
              <Grid container spacing={3}>
                {sortedPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))}
              </Grid>
            </InfiniteScroll>
          </TabPanel>
          <TabPanel value="2">
            <InfiniteScroll
              next={onScroll}
              hasMore={hasMore}
              loader={SkeletonLoad}
              dataLength={posts.length}
              style={{ overflow: 'inherit' }}
            >
              <Grid container spacing={3}>
                {sortedPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))}
              </Grid>
            </InfiniteScroll>
          </TabPanel>
        </TabContext>

      </Container>
    </Page>
  );
}
