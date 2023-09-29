import { motion } from 'framer-motion';

// material
import { Typography, styled } from '@mui/material';
import { Box, alpha, Container, } from '@mui/material';
//
import { varFadeInUp, TextAnimate, MotionInView, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
    backgroundSize: 'cover',
    backgroundImage: theme.palette.grey[800] === '#212B36' ? 'url(/static/faqs/heroLight.png), url(/static/faqs/heroLight.png)' : 'url(/static/faqs/heroDark.png), url(/static/faqs/heroDark.png)',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.up('md')]: {
        height: 560,
        padding: 0
    }
}));

const ContentStyle = styled('div')(({ theme }) => ({
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        position: 'absolute',
        bottom: theme.spacing(10)
    }
}));



// ----------------------------------------------------------------------

export default function HeroDesignToo() {
    return (
        <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
            <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
                <ContentStyle>
                    <TextAnimate text="ferramentas " sx={{ color: 'primary.main', mr: 2 }} variants={varFadeInRight} /><br />
                    <TextAnimate text="de" sx={{ color: 'primary.main', mr: 2 }} variants={varFadeInRight} />
                    <TextAnimate text="design " sx={{ color: 'primary.main', mr: 2 }} variants={varFadeInRight} />
                    <br />
                    <Box sx={{ display: 'inline-flex', color: (theme) => alpha(theme.palette.grey[800], 0.7) }}>
                        <TextAnimate text="altamente" sx={{ mr: 2 }} />
                        <TextAnimate text="úteis" sx={{ mr: 2 }} />

                    </Box>
                    <Box>
                        <br />
                        <Typography>Um arquivo crescente com mais de 1.000 recursos de design,  </Typography>
                    </Box>

                    <MotionInView variants={varFadeInUp} sx={{ mt: 5 }}>

                    </MotionInView>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
