import { useState } from 'react';
//import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
//import DashboardSidebar from '../layouts/dashboard/DashboardSidebar';
import { Link as RouterLink } from 'react-router-dom';


// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components

import Page from '../components/Page';
// mock
//import POSTS from '../_mock/blog';
import PostCardHome from './PostCardHome';

// ----------------------------------------------------------------------


export default function HomePage() {
  const [open, setOpen] = useState(false);
  const POSTS = [{
    id: 1,
    cover: "https://media-exp1.licdn.com/dms/image/C4E16AQF7u2JBw5H92w/profile-displaybackgroundimage-shrink_350_1400/0/1656415668138?e=1673481600&v=beta&t=8pZS7WKnN7MXmg_0pF2xwhDgVnskZVwrYXj_dnrgC9s",
    title: "Curriculo",
    createdAt: "Sun Nov 07 2022 16:28:17 GMT-0300 (Horário Padrão de Brasília)",
    view: 1,
    comment: 1,
    share: 1,
    favorite: 1,
    author: {
      name: "junior Oliveira",
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4D03AQHcbFe9-Phe1Q/profile-displayphoto-shrink_800_800/0/1656433703054?e=1673481600&v=beta&t=0BQ4CcNHqAfALp3abBGJSnPZLFjZ6vq2jAMfvrvlt8Y"
    },
    urlLink:"https://drive.google.com/file/d/1pt1umuPt3l5-Mod2rANfNSbcgfD6Zg7x/view?usp=share_link"
  },{
    id: 1,
    cover: "https://media-exp1.licdn.com/dms/image/C4E16AQF7u2JBw5H92w/profile-displaybackgroundimage-shrink_350_1400/0/1656415668138?e=1673481600&v=beta&t=8pZS7WKnN7MXmg_0pF2xwhDgVnskZVwrYXj_dnrgC9s",
    title: "linkedin",
    createdAt: "Sun Oct 16 2022 16:28:17 GMT-0300 (Horário Padrão de Brasília)",
    view: 1,
    comment: 1,
    share: 1,
    favorite: 1,
    author: {
      name: "junior Oliveira",
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4D03AQHcbFe9-Phe1Q/profile-displayphoto-shrink_800_800/0/1656433703054?e=1673481600&v=beta&t=0BQ4CcNHqAfALp3abBGJSnPZLFjZ6vq2jAMfvrvlt8Y"
    },
    urlLink:"https://www.linkedin.com/in/junior-oliveira-ba22381a3/"
  },{
    id: 1,
    cover: `../static/mock-images/imageHome/img_${2}.jpg`,
    title: "Instagram",
    createdAt: "Sun Oct 15 2022 16:28:17 GMT-0300 (Horário Padrão de Brasília)",
    view: 1,
    comment: 1,
    share: 1,
    favorite: 1,
    author: {
      name: "junior Oliveira",
      avatarUrl: `../static/mock-images/imageHome/img_${1}.jpg`
    },
    urlLink:"https://www.instagram.com/junyor_oliveiraj/"
  },{
    id: 1,
    cover: `../static/mock-images/imageHome/img_${3}.png`,
    title: "Github ",
    createdAt: "Sun Oct 15 2022 16:28:17 GMT-0300 (Horário Padrão de Brasília)",
    view: 1,
    comment: 1,
    share: 1,
    favorite: 1,
    author: {
      name: "junior Oliveira",
      avatarUrl: `https://avatars.githubusercontent.com/u/85002295?v=4`
    }, 
    urlLink:"https://github.com/JuniorOliveiraj"
  }];

  return (
    <Page title="social" marginTop={12}>
    <RootStyle >
      <DashboardNavbar onOpenSidebar={() => setOpen(true ? open:open)} />
     
      <Container> 
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Socioal 
          </Typography>
          <Button variant="contained" component={RouterLink} to="/dashboard">
          dashboard
          </Button>
        </Stack>
        <Grid container spacing={2}>
          {POSTS.map((post, index) => (
            <PostCardHome key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </RootStyle>
    </Page>
  );
}
const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});