// material
//

import { Box, Grid, Tab, Tabs, Typography, Skeleton } from '@mui/material';
import ProjetsCard from './CardsPorojetos';
import { useState } from 'react';
//----- redux 
import { useSelector, useDispatch } from '../../../redux/store';

import { getPostsInitial, getMorePosts } from '../../../redux/slices/blog';
import { useCallback } from 'react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// ----------------------------------------------------------------------


const SkeletonLoad = (
  <Grid container spacing={6} sx={{ mt: 1, }}>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
        <Box sx={{ display: 'flex', mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    ))}
  </Grid>
);
const abas = [
  { id: 0, label: 'Designer Web', content: 'PROJETOS_WEB_DEV' },
  { id: 1, label: 'Desenvolvimentos ', content: 'PROJETOS_DEVELOPED' },
  { id: 2, label: 'designer', content: 'PROJETOS_DESIGNER' },
];

// ----------------------------------------------------------------------

export default function Cardsportidolio() {
  const [abaAtiva, setAbaAtiva] = useState(0);
  const dispatch = useDispatch();
  const { posts, hasMore, index, step } = useSelector((state) => state.blog);
  const onScroll = useCallback(() => dispatch(getMorePosts()), [dispatch]);
  useEffect(() => {
    dispatch(getPostsInitial(index, step, {type:'PORTIFOLIO', tag:abas[abaAtiva].content}, ));

  }, [dispatch, index, step, abaAtiva,  ]);
  const handleChange = (event, novoValor) => {
    setAbaAtiva(novoValor);
  }

  return (
    <>
      <Grid item xs={12} sm={4}>
        <Typography variant="h5" paragraph>
          Projetos
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Designer e Desenvolvimentos
        </Typography>
      </Grid>
      <Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} sm={12} sx={{ justifyContent: 'center', alignItems: 'center', width: '100%', }}>
          <Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', }}>
            <Tabs value={abaAtiva} onChange={handleChange}>
              {abas.map(aba => (
                <Tab key={aba.id} label={aba.label} />
              ))}
            </Tabs>
          </Grid>
          <Box sx={{ margin: 10 }} />
          <Grid container spacing={3}>
            <InfiniteScroll
              next={onScroll}
              hasMore={hasMore}
              loader={SkeletonLoad}
              dataLength={posts.length}
              style={{ overflow: 'inherit', width: '100%', }}
            >
              <Grid container spacing={3}>
                {posts.map((post, index) => (
                  <ProjetsCard href='blog' key={post.id} post={post} index={index} />
                ))}
              </Grid>
            </InfiniteScroll>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
