// material
import { alpha, useTheme, styled } from '@mui/material';
import { Box, Grid, Card, Container, Typography, useMediaQuery, Button, Stack, Link } from '@mui/material';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

import { motion } from "framer-motion";
import Iconify from '../../Iconify';
// ----------------------------------------------------------------------
 
const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15)
    }
}));
 

// ----------------------------------------------------------------------

export default function LandingSobremim() {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <RootStyle>
            <Container maxWidth="lg">
                <Grid container spacing={isDesktop ? 10 : 5}>
                    <Grid item xs={12} md={6}>
                        <MotionInView variants={varFadeInUp}>
                            <GlassCard />
                        </MotionInView>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <MotionInView variants={varFadeInUp}>
                            <HighlightSection />
                        </MotionInView>
                    </Grid>
                </Grid>
            </Container>

        </RootStyle>
    );
}
function HighlightSection() {
    return (
        <Box
            component={motion.div}
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 4,
            }}
        >
            {/* Top Section */}
            <Stack direction="column" alignItems="left" gap={2}>
                {/* Dotted Highlight Tag */}
                <Stack direction="column" alignItems="left" gap={2}>
                    {/* Blue Line */}
                        <Box
                            sx={{
                                width: 50,
                                height: 2,
                                background:
                                    "linear-gradient(90deg, rgba(0, 85, 255, 0) 0%, rgb(0,85,255) 50%, rgba(0, 85, 255, 0) 100%)",
                            }}
                        />
                    <Box
                        sx={{
                            backdropFilter: "blur(2.5px)",
                            background:
                                "linear-gradient(0.07deg, rgba(0,85,255,0.08) 0%, rgba(153,153,153,0.1) 100%)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            borderRadius: "10px",
                            px: 2,
                            py: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                background:
                                    "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(153,153,153,0) 350%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: 500,
                            }}
                        >
                            About Me
                        </Typography>

                        </Box>


                        
                </Stack>


                {/* Title */}
                <Box>
                    <Typography variant="h2" sx={{ fontWeight: 400 }}>
                        Junior de Oliveira Belem 
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
                    >
                        Full stack developer
                    </Typography>
                </Box>
            </Stack>

            {/* Middle Body Text */}
            <Typography variant="body1" sx={{ color: "white", opacity: 0.8 }}>
                Gosto de criar. De entender. De simplificar. E 
                <br />
                de transformar complexidade em soluções funcionais.
            </Typography>

            {/* Bottom Section */}
            <Stack gap={2}>
                {/* Separator */}
                <Box
                    sx={{
                        height: "1px",
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                />

                {/* Points */}
                <Stack direction="column" gap={2} flexWrap="wrap">
                    {/* Point 1 */}
                    <Stack direction="row" gap={1} alignItems="Left">
                        <Iconify
                            icon="iconoir:verified-badge" width={20} height={20}
                            sx={{ color: "rgb(0,85,255)" }}  />
                        <Typography color="white">Front-end em react & next js </Typography>
                    </Stack>

                    {/* Point 2 */}
                    <Stack direction="row" gap={1} alignItems="left">
                        <Iconify
                            icon="iconoir:verified-badge" width={20} height={20}
                            sx={{ color: "rgb(0,85,255)" }}  />
                        <Typography color="white">Beack-end em .net C#</Typography>
                    </Stack>
                </Stack>
                    <Box padding={2}  />
                {/* Footer */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap={4}
                    alignItems="left"
                    justifyContent="space-between"
                >
                    {/* Button */}
                    <Button
                        component={Link}
                        to="/about"
                        sx={{
                            backgroundColor: "rgb(0,85,255)",
                            borderRadius: "10px",
                            border: "3px solid rgba(255,255,255,0.15)",
                            boxShadow:
                                "0px 8px 40px rgba(0,85,255,0.5), 0px 0px 10px 1px inset rgba(255,255,255,0), 0px 0px 0px 1px rgba(0,85,255,0.12)",
                            color: "white",
                            px: 3,
                            py: 1,
                            "&:hover": {
                                backgroundColor: "rgb(0,95,255)",
                            },
                        }}
                    >
                        View About Landin
                    </Button>

                    {/* Stars + Text */}
                    <Stack direction="row" gap={1} alignItems="center">

                        <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                            200+ Agencies Rated
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

function GlassCard() {
    return (
        <Box
            component={motion.div}
            sx={{
                width: "100%",
                maxWidth: "100%",
                position: "relative",
                opacity: 1,
            }}
        >
            {/* Card com efeito Glassmorphism */}
            <Box
                sx={{
                    backdropFilter: "blur(2px)",
                    backgroundColor: "rgba(8,8,8,0.8)",
                    borderRadius: "30px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        borderRadius: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: "19px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src="static/mock-images/imageHome/blue_HOMELADIPAGE.png"
                            alt="Woman Using Laptop"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "inherit",
                                display: "block",
                            }}
                        />
                    </Box>
                </Box>

            </Box>

            {/* Glow (Brilho) */}
            <Box
                component={motion.div}
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                sx={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    backgroundColor: "rgb(0, 85, 255)",
                    filter: "blur(40px)",
                    borderRadius: "50%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                }}
            />

            {/* Linha azul no meio */}
            <Box
                sx={{

                    left: 0,
                    right: 0,
                    height: "2px",
                    transform:"scale(1.2)",
                    background:
                        "linear-gradient(90deg, rgba(0, 85, 255, 0) 0%, rgb(0, 85, 255) 50%, rgba(0, 85, 255, 0) 100%)",
                    transform: "translateY(-50%)",
                }}
            />
        </Box>
    );
}