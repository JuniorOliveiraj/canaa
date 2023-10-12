import { motion } from 'framer-motion';

// material
import { Typography, styled } from '@mui/material';
import { Box, Container } from '@mui/material';
//
import { varFadeInUp, TextAnimate, MotionInView, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
    backgroundSize: 'cover',
    backgroundImage: theme.palette.grey[800] === '#212B36' ? 'url(/static/faqs/heroTools.png), url(/static/faqs/heroTools.png)' : 'url(/static/faqs/heroTools.png), url(/static/faqs/heroTools.png)',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.up('md')]: {
        height: 600,
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
                    <TextAnimate text="ferramentas " sx={{ color: '#00a76f', mr: 2 }} variants={varFadeInRight} /><br />
                    <TextAnimate text="de" sx={{ color: '#00a76f', mr: 2 }} variants={varFadeInRight} />
                    <TextAnimate text="design " sx={{ color: '#00a76f', mr: 2 }} variants={varFadeInRight} />
                    <br />
                    <Box sx={{ display: 'inline-flex', color: '#bac0c2' }}>
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
