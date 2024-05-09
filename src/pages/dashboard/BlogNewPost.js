// material
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { BlogNewPostForm } from '../../components/_dashboard/blog';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import urlApi from '../../_mock/url';

// ----------------------------------------------------------------------

export default function BlogNewPost() {
  const { themeStretch } = useSettings();
  const { id } = useParams();
  const [Blog, setBlog] = useState([]);
  useEffect(() => {
    const Fatch = async () => {
      await axios.get(`${urlApi}/blog/read?id=${id}`).then((response) => {
        setBlog(response.data.BLOG);
      });
    }
    if (id) Fatch();
    if (!id) setBlog([])
  }, [id]);

  return (
    <Page title={`Blog: ${!id ? 'New Post' : 'Edit Post'} | Junior`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={id ? `Edit Post ${Blog.title}`:'Create a new post'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Blog', href: PATH_DASHBOARD.blog.root },
            { name: !id ? 'New Post' : 'Edit Post' }
          ]}
        />

        <BlogNewPostForm id={id} status={id ? true : false}/>
      </Container>
    </Page>
  );
}
