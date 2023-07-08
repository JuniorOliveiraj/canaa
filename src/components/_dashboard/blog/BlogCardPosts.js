

import { BlogPostCard, BlogPostsSearch,BlogPostsSort } from '../../../sections/@dashboard/blog';
// mock
import { Grid, Box , Stack} from '@mui/material';
import POSTS from '../../../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
];


export default function BlogCardPosts({path}) {
    return (
        <Box>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <BlogPostsSearch posts={POSTS} />
                <BlogPostsSort options={SORT_OPTIONS} />
            </Stack>

            <Grid container spacing={3}>
                {POSTS.map((post, index) => (
                    <BlogPostCard key={post.id} post={post} index={index} path={path}/>
                ))}
            </Grid>
        </Box>
    )
}