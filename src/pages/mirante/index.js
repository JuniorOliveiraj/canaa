// material
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import ComponentHeroMirante from './components/ComponetHero';
import ComponentExtraMirante from './components/TodasAsRotas';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(11)
    }
}));

// ----------------------------------------------------------------------

export default function ComponentsOverviewMirante() {
    return (
        <RootStyle title="Junior O | Mirante">
            <ComponentHeroMirante />
            <Container maxWidth="lg">
                <ComponentExtraMirante />
            </Container>
        </RootStyle>
    );
}
