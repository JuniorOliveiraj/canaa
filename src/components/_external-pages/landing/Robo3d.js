import { useTheme, styled } from '@mui/material';
import { Grid, Container, useMediaQuery, Box } from '@mui/material';
//
import { varFadeInUp, MotionInView } from '../../animate';
import Spline from '@splinetool/react-spline';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(12), // Reduzi um pouco a altura superior
    paddingBottom: theme.spacing(10), // Reduzi um pouco a inferior
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(12),
    },
}));

const SplineWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '500px', // Diminui a altura. Ajuste conforme quiser.
    borderRadius: theme.shape.borderRadius * 2, // Bordas mais arredondadas
    overflow: 'hidden',
    boxShadow: theme.shadows[3], // Opcional: adiciona uma leve sombra
    [theme.breakpoints.up('lg')]: {
        height: '600px', // Altura maior em telas grandes, opcional
    },
}));

// ----------------------------------------------------------------------

export default function Robo3d() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <RootStyle>
            <Container
                maxWidth={isDesktop ? false : 'lg'}
                sx={{
                    maxWidth: isDesktop ? 'calc(1200px * 1.2)' : undefined,
                    borderRadius: isDesktop ? '20px' : '10px',
                }}
            >
                <Grid container spacing={isDesktop ? 10 : 5}>
                    <Grid item xs={12}>
                        <MotionInView variants={varFadeInUp}>
                            <SplineWrapper>
                                <Spline scene="https://prod.spline.design/JP9BGV4pgrg71SND/scene.splinecode" />
                            </SplineWrapper>
                        </MotionInView>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
}
