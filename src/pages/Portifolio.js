import Page from '../components/Page';
import { Container, styled } from '@mui/material';
import ComponentHeroPortifolio from '../components/_external-pages/portifolio/ComponentHeroPortifolio';
import Cardsportidolio from '../components/_external-pages/portifolio/Cardsportidolio';
const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));
const metaAndTags = {
  meta_title: "Junior Oliveira - Portfolio",
  meta_description:
    "Portfolio Junior Oliveira Projetos criados",
  meta_tags: "react,, application, dashboard, junior oliveira, junior belem , belem, canaa, app react , junior react, belem junior, junior belem,"
}

export default function Portifolio() {
  return (
    <RootStyle title="Portfolio | Junior Oliveira " meta={metaAndTags}>
      <ComponentHeroPortifolio />
      <Container sx={{marginTop:10}}>
        <Cardsportidolio />
      </Container>
    </RootStyle>
  )
}