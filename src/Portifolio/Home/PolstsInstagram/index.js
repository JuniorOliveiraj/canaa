import styled from "styled-components"
import { motion } from "framer-motion";
import { Grid, Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
const ContainerImage = styled(motion.div)`
width: 100%;
max-width: 1120;
height: auto;
display: flex;
margin: 5%;

`;
const ContainerImage1 = styled(motion.div)`
width: 33%;
max-width: 1120;
height: auto;

`;

const Img = styled(motion.img)`
  width: 95%;
  height: auto;
  margin: 0% 3% 0% 0%;
  cursor:pointer;
  border-radius:10px;
`;
export default function PolstInstagram() {
    const matches = useMediaQuery('(min-width:700px)');
    return (
        <Box sx={{marginTop:matches ? 20 : 10}}>
            <Grid container spacing={2}>

                <Grid xs={14} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ContainerImage
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}

                    >
                        <ContainerImage1>
                            <Img src={`/static/illustrations/Rectangle ${26}.png`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 1 }} />
                        </ContainerImage1>
                        <ContainerImage1>
                            <Img src={`/static/illustrations/Rectangle ${27}.png`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 1 }} />
                        </ContainerImage1>
                        <ContainerImage1>
                            <Img src={`/static/illustrations/Rectangle ${26}.png`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 1 }} />
                        </ContainerImage1>

                    </ContainerImage>

                </Grid>
            </Grid>
        </Box>

    )
}
