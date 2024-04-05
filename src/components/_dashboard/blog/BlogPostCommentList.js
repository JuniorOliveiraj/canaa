import PropTypes from 'prop-types';
// material
import { Box, List } from '@mui/material';
//
import BlogPostCommentItem from './BlogPostCommentItem';

// ----------------------------------------------------------------------

BlogPostCommentList.propTypes = {
  post: PropTypes.object.isRequired
};

export default function BlogPostCommentList({ post }) {
  const { comments } = post;

  return (
    <List disablePadding>
      {comments.map((comment) => {
        const { id, replyComment, users } = comment;
        const hasReply = replyComment.length > 0;

        return (
          <Box key={id} sx={{}}>
            <BlogPostCommentItem
              name={comment.name}
              photoURL={comment.photoURL}
              postedAt={comment.postedAt}
              message={comment.message}
            />
            {hasReply &&
              replyComment.map((reply) => {
                const user = users.find((user) => user.id === reply.userId);
                return (
                  <BlogPostCommentItem
                    key={reply.id}
                    message={reply.message}
                    tagUser={reply.tagUser}
                    postedAt={reply.postedAt}
                    name={user.name}
                    photoURL={user.photoURL}
                    hasReply
                  />
                );
              })}
          </Box>
        );
      })}
    </List>
  );
}
