

import { BlogPostCard, BlogPostsSearch, BlogPostsSort } from '../../../sections/@dashboard/blog';
// mock
import { Grid, Box, Stack } from '@mui/material';
import POSTS from '../../../_mock/blog';
import { useEffect, useState } from 'react';
import urlApi from '../../../_mock/url';
import axios from 'axios';
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
];


export default function BlogCardPosts({ path }) {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const ListBlog = async () => {
            axios.get(`${urlApi}/blog/list`)
                .then((response) => {
                    setBlogs(response.data.BLOG)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        ListBlog()
    }, []);
    return (
        <Box>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <BlogPostsSearch posts={blogs} />
                <BlogPostsSort options={SORT_OPTIONS} />
            </Stack>

            <Grid container spacing={3}>
                {blogs.map((post, index) => (
                    <BlogPostCard key={post.id} post={post} index={index} path={path} />
                ))}
            </Grid>
        </Box>
    )
}
