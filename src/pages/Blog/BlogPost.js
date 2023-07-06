

// material
import { Box, Card, Divider, Skeleton, Container, Typography } from '@mui/material';

// routes
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Markdown from '../../components/Markdown';
import BlogPostHero from '../../components/BlogPostHero';


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

  const post = {
    cover:'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_3.jpg', 
    title:'sei lla ', 
    author:{
      name:"josi  ",
      avatarUrl:'https://firebasestorage.googleapis.com/v0/b/portifolio-e4589.appspot.com/o/avatarUrl%2F241410664_123192016723870_6332275720911322123_n.jpg?alt=media&token=c24772c1-8212-41fd-8c51-59894d999119'
    },
    description: "TESTE",
    body: "editdocs.js:15 <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6><h1>Heading H1</h1><p><br></p><p><br></p><h2>Heading H2</h2><p><br></p><p><br></p><h3>Heading H3</h3><p><br></p><p><br></p><h4>Heading H4</h4><p><br></p><p><br></p><h5>Heading H5</h5><p><br></p><p><br></p><h6>Heading H6</h6><p><br></p><p><br></p><p><br></p><p><br></p><h3>Paragraph</h3><p><br></p><p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTAs successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p><p><br></p><p><strong>This is strong text.</strong></p><p><br></p><p><em>This is italic text</em></p><p><br></p><p><u>This is underline text</u></p><p><br></p><p><br></p><p><br></p><p><br></p><h3>Unordered list</h3><p><br></p><ul><li>Implements&nbsp; esign</li><li>Implementation</li></ol><p><br></p><p><br></p><p><br></p><p><br></p><h3>Blockquote</h3><p><br></p><blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote><p><br></p><p><br></p><p><br></p><p><br></p><h3>Block Code</h3><p><br></p><p>import React from 'react';</p><p>import ReactDOM from 'react-dom';</p><p>import ReactMarkdown from 'react-markdown';</p><p>import rehypeHighlight from 'rehype-highlight';</p><p><br></p><p>ReactDOM.render(</p><p>  &lt;ReactMarkdown rehypePlugins={[rehypeHighlight]}&gt;{'# Your markdown here'}&lt;/ReactMarkdown&gt;,</p><p>  document.querySelector('#content')</p><p>);</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p><br></p><p>Why do we use it?</p><p><br></p><p><br></p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p><p><br></p><p><img src='https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_5.jpg'></p><p><br></p><p><br></p><p>It is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.</p>"
  };
  


  return (
    <Page title="Blog: Post Details | junior ">
      <BlogPostHero post={post}/>
      <Container maxWidth={themeStretch ? false : 'lg'}>

        {post && (
          <Card>
         

            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h6" sx={{ mb: 5 }}>
                {post.description}
              </Typography>

              <Markdown children={post.body} />

              <Box sx={{ my: 5 }}>
                <Divider />
                {/* <BlogPostTags post={post} /> */}
                <Divider />
              </Box>

              {/* <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography variant="h4">Comments</Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                  ({post.comments.length})
                </Typography>
              </Box> */}

              {/* <BlogPostCommentList post={post} /> */}

          

              {/* <BlogPostCommentForm /> */}
            </Box>
          </Card>
        )}

        {!post && SkeletonLoad}

 

      </Container>
    </Page>
  );
}
