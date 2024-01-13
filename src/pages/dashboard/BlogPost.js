import { useEffect, useState } from 'react';
import { sentenceCase } from 'change-case';
import { PATH_DASHBOARD } from '../../routes/paths';
import { useParams } from 'react-router-dom';
// material
import { Box, Card, Divider, Skeleton, Container, Typography, Pagination } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getPost, getRecentPosts } from '../../redux/slices/blog';
// routes
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Markdown from '../../components/Markdown';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import {
  BlogPostHero,
  BlogPostTags,
  BlogPostRecent,
  BlogPostCommentList,
  BlogPostCommentForm
} from '../../components/_dashboard/blog';
import axios from 'axios';
import urlApi from '../../_mock/url';
// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    <Skeleton width="100%" height={560} variant="rectangular" sx={{ borderRadius: 2 }} />
    <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
      <Skeleton variant="circular" width={64} height={64} />
      <Box sx={{ flexGrow: 1, ml: 2 }}>
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
      </Box>
    </Box>
  </>
);

export default function BlogPost() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { title } = useParams();
  // Faça o que quiser com o valor de 'adm'
  const { post, error, recentPosts } = useSelector((state) => state.blog);
  const [metaAndTags, setMetaAndTags] = useState({ meta_title: '', meta_description: '', meta_tags: '' });
  useEffect(() => {
    dispatch(getPost(title));
    dispatch(getRecentPosts(title));
    const ListBlog = async () => {
      const lastCommaIndex = title.lastIndexOf('-');
      const idValue = title.substring(lastCommaIndex + 1);
      axios.get(`${urlApi}/blog/read?id=${idValue}`,)
        .then((response) => {
          setMetaAndTags({
            meta_title: response.data.BLOG.meta[0].title || '',
            meta_description: response.data.BLOG.meta[0].description || '',
            meta_tags: response.data.BLOG.tags.join(', ') || ''
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
    ListBlog()
  }, [dispatch, title]);
  return (
    <Page
      title={post ? post.title : "Blog: Post Details | Junior"}

      meta={metaAndTags && metaAndTags}
    >

      {post && (<BlogPostHero post={post} />)}
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Post Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Blog', href: PATH_DASHBOARD.blog.root },
            { name: sentenceCase(title) }
          ]}
        />

        {post && (
          <Card>

            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" sx={{ mb: 5 }}>
                {post.description}
              </Typography>

              <Markdown children={post.body} />

              <Box sx={{ my: 5 }}>
                <Divider />
                <BlogPostTags post={post} />
                <Divider />
              </Box>

              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography variant="h4">Comments</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                  ({post.comments.length})
                </Typography>
              </Box>
              <BlogPostCommentList post={post} />
              <BlogPostCommentForm comment={post.comment} />
              {post.comment === 1 && <BlogPostCommentList post={post} />}
              <Box sx={{ mb: 5, mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination count={8} color="primary" />
              </Box>

            </Box>
          </Card>
        )}
        {!post && SkeletonLoad}
        {error && <Typography variant="h6">404 Post not found</Typography>}

        {recentPosts.length > 0 && <BlogPostRecent posts={recentPosts} />}
      </Container>
    </Page>
  );
}
