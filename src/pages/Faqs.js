// material
import { styled } from '@mui/material';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { FaqsHero, FaqsCategory, FaqsList, FaqsForm } from '../components/_external-pages/faqs';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));



// ----------------------------------------------------------------------
const metaAndTags = {
  meta_title: "Junior Oliveira - Faqs",
  meta_description:
    "Encontre as respostas para as suas perguntas mais frequentes sobre o portfólio e a apresentação de Junior Oliveira, desenvolvedor React com foco em aplicações web, dashboards e sistemas administrativos.",
  meta_tags: "react,faq, application, dashboard, junior oliveira, junior belem , belem, canaa, app react , junior react, belem junior, junior belem,"
}
export default function Faqs() {
  return (
    <RootStyle title="Faqs | Junior oliveira" meta={ metaAndTags}>
      <FaqsHero />

      <Container sx={{ mt: 15, mb: 10 }}>
        <FaqsCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <FaqsList />
          </Grid>
          <Grid item xs={12} md={6}>
            <FaqsForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
