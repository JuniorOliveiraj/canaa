// material
import { styled } from '@mui/material';
import { Grid, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';
import { ContactHero, ContactForm, } from '../components/_external-pages/contact';
import { varFadeInUp, MotionInView } from '../components/animate';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));
const metaAndTags = {
  meta_title: "Junior Oliveira - Entre em contato",
  meta_description:
    "Entre em contato, envie me uma mensagem que lhe responderei em  até 24 horas uteis ",
  meta_tags: "react,, application, dashboard, junior oliveira, junior belem , belem, canaa, app react , junior react, belem junior, junior belem,"
}

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <RootStyle title="Contact us | Junior Oliveira " meta={ metaAndTags}>
      <ContactHero />
      <Container sx={{ my: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionInView variants={varFadeInUp} sx={{ height: '100%  ' }}>
              <Box sx={{ margin: '10px 0px  20% 0px', height: '100%  ' }} >
                <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56916.509179831664!2d-48.98728590079516!3d-26.92627870222667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df24a491abf305%3A0x5e70391ecf5b681c!2sGaspar%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1676676863967!5m2!1spt-BR!2sbr" width={'90%'} height={'90%'} style={{ filter: "grayscale(100%) invert(100%)", height: '90%', borderRadius: 12 }} allowFullScreen={""} loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
              </Box>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
